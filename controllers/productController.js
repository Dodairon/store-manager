const productModels = require('../models/productModels');
const productServices = require('../services/productServices');

const getAll = async (req, res) => {
    const result = await productServices.getAll();
    res.status(200).json(result);
};

const getById = async (req, res) => {
    const { id } = req.params;
    const response = await productServices.getById(id);
    if (response.message) {
    return res.status(404).json({ message: response.message });
    }
    return res.status(200).json(response);
};

const createProducts = async (req, res) => {
    const { name, quantity } = req.body;
    try {
    const result = await productServices.createProducts(name, quantity); 
    return res.status(201).json({ id: result, name, quantity });
    } catch (error) {
    return res.status(409).json({ message: error.message });
    }
};

const updateProducts = async (req, res) => {
    const { id } = req.params;
    const { name, quantity } = req.body;
    try {
        const result = await productServices.updateProducts(id, name, quantity); 
        return res.status(200).json(result);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

const deleteProducts = async (req, res) => {
    const { id } = req.params;
    try {
        await productServices.deleteProducts(id); 
        return res.status(204).end();
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

// const deleteProducts = async (id) => {
//     await productModels.deleteProducts(id); 
// };

module.exports = {
    getAll,
    getById,
    createProducts,
    updateProducts,
    deleteProducts,
};
