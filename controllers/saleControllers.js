const saleServices = require('../services/saleServices');

const getAll = async (req, res) => {
    const result = await saleServices.getAll();
    res.status(200).json(result);
};

const getById = async (req, res) => {
    const { id } = req.params;
    const response = await saleServices.getById(id);
    if (response.message) {
    return res.status(404).json({ message: 'Sale not found' });
    }
    return res.status(200).json(response);
};

module.exports = {
    getAll,
    getById,
};