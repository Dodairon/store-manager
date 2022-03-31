const productModels = require('../models/productModels');

const getAll = async () => {
    const result = await productModels.getAll();
    return result;
};

const getById = async (id) => {
    const response = await productModels.getById(id);
    if (response === undefined) {
    return { message: 'Product not found' };
    }
    return response;
};

const createProducts = async (name, quantity) => {
        const result = await productModels.create(name, quantity); 
        return result;
};

const updateProducts = async (id, name, quantity) => {
        const result = await productModels.update(id, name, quantity); 
        return result;
};

const deleteProducts = async (id) => {
        await productModels.deleteProducts(id); 
};

module.exports = {
    getAll,
    getById,
    createProducts,
    updateProducts,
    deleteProducts,
};
