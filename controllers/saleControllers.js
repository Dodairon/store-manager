const saleModels = require('../models/saleModels');

const getAll = async (req, res) => {
    res.status(200).json(await saleModels.getAll());
};

const getById = async (req, res) => {
    const { id } = req.params;
    const response = await saleModels.getById(id);
    if (response.length === 0) {
    return res.status(404).json({ message: 'Sale not found' });
    }
    return res.status(200).json(response);
};

module.exports = {
    getAll,
    getById,
};