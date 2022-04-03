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

const createSales = async (req, res) => {
    const sales = req.body;
    const result = await saleServices.createSales(sales);
    const saleObj = {
        id: result,
        itemsSold: sales,
      };
      return res.status(201).json(saleObj);
};

const updateSales = async (req, res) => {
    const { id } = req.params;
    const salesUpdates = req.body;
    await saleServices.updateSales(id, salesUpdates);
    const updateSaleObj = {
        saleId: id,
        itemUpdated: salesUpdates,
      };
      return res.status(200).json(updateSaleObj);
};

module.exports = {
    getAll,
    getById,
    createSales,
    updateSales,
};