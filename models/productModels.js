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

module.exports = {
    getAll,
    getById,
    create,
};