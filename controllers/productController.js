const productModels = require('../models/productModels');

const getAll = async (req, res) => {
    res.status(200).json(await productModels.getAll());
};

const getById = async (req, res) => {
    const { id } = req.params;
    const response = await productModels.getById(id);
    if (response === undefined) {
    return res.status(404).json({ message: 'Product not found' });
    }
    return res.status(200).json(response);
};

const createProducts = async (req, res) => {
    const { name, quantity } = req.body;
    try {
        const result = await productModels.create(name, quantity); 
        return res.status(201).json({ id: result, name, quantity });
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

module.exports = {
    getAll,
    getById,
    createProducts,
};
