const saleModels = require('../models/saleModels');

const getAll = async () => {
    const result = await saleModels.getAll();
    return result;
};

const getById = async (id) => {
    const response = await saleModels.getById(id);
    if (response.length === 0) {
    return { message: 'Sale not found' };
    }
    return response;
};

module.exports = {
    getAll,
    getById,
};
