const connection = require('./connection');

const getAll = async () => {
    const sql = 'SELECT * FROM StoreManager.products ORDER BY id ASC';
    const [getAllProducts] = await connection.execute(sql);
    return getAllProducts;
};

const getById = async (id) => {
    const sql = 'SELECT * FROM StoreManager.products WHERE id = ?';
    const [getByProducts] = await connection.execute(sql, [id]);
    return getByProducts[0];
};

const create = async (name, quantity) => {
    const sql = `SELECT
    StoreManager.products.name
    FROM
    StoreManager.products
    WHERE
    StoreManager.products.name = ?`;
    const [existName] = await connection.execute(sql, [name]);
    if (existName[0]) {
        throw new Error('Product already exists');
    }
    const createProductsSql = `INSERT INTO
    StoreManager.products(name, quantity)
    VALUES (?, ?);`;
    const [createProducts] = await connection.execute(createProductsSql, [name, quantity]);
    return createProducts.insertId;
};

const update = async (id, name, quantity) => {
    const sql = `SELECT
    StoreManager.products.id
    FROM
    StoreManager.products
    WHERE
    StoreManager.products.id = ?`;
    const [existName] = await connection.execute(sql, [id]);
    if (!existName[0]) {
        throw new Error('Product not found');
    }
    const createProductsSql = `UPDATE StoreManager.products
    SET name = ?,
    quantity = ?
    WHERE id = ?`;
    await connection.execute(createProductsSql, [name, quantity, id]);
    return { id, name, quantity };
};

const deleteProducts = async (id) => {
    const sql = `SELECT
    StoreManager.products.id
    FROM
    StoreManager.products
    WHERE
    StoreManager.products.id = ?`;
    const [existName] = await connection.execute(sql, [id]);
    if (!existName[0]) {
        throw new Error('Product not found');
    }
    const createProductsSql = 'DELETE FROM StoreManager.products WHERE id = ?';
    await connection.execute(createProductsSql, [id]);
};

module.exports = {
    getAll,
    getById,
    create,
    update,
    deleteProducts,
};