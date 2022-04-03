const salesValidation = (req, res, next) => {
  const [sales] = req.body;
  if (sales.productId === undefined) {
    return res.status(400).json({ message: '"productId" is required' });
  }
  if (sales.quantity === undefined) {
    return res.status(400).json({ message: '"quantity" is required' });
  }
  if (!Number.isInteger(sales.quantity) || sales.quantity < 1) {
    return res
      .status(422)
      .json({ message: '"quantity" must be greater than or equal to 1' });
  }
  next();
};

module.exports = salesValidation;
