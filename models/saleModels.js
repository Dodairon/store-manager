const connection = require('./connection');

const getAll = async () => {
        const sql = `SELECT
        StoreManager.sales_products.sale_id AS saleId,
        StoreManager.sales.date AS date,
        StoreManager.sales_products.product_id AS productId,
        StoreManager.sales_products.quantity AS quantity
        FROM
        StoreManager.sales_products
        JOIN
        StoreManager.sales
        ON
        sales.id = sales_products.sale_id
        ORDER BY
        saleId, productId`;
        const [getAllSales] = await connection.execute(sql);
        return getAllSales;
};

const getById = async (id) => {
    const sql = `SELECT
    StoreManager.sales.date AS date,
    StoreManager.sales_products.product_id AS productId,
    StoreManager.sales_products.quantity AS quantity
    FROM
    StoreManager.sales_products
    JOIN
    StoreManager.sales
    ON
    sales.id = sales_products.sale_id
    WHERE id = ?
    ORDER BY
    productId`;
    const [getBySales] = await connection.execute(sql, [id]);
    return getBySales;
};

module.exports = {
    getAll,
    getById,
};