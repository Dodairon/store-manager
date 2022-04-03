const chai = require("chai");
const expect = chai.expect;
const sinon = require("sinon");
const connection = require("../../../models/connection");
const productController = require("../../../controllers/productController");
const { afterEach } = require("mocha");

const res = {};
const req = {};

afterEach(() => {
  sinon.restore();
});

describe("Products Controllers test", () => {
  describe("verify get/products", () => {
    it("checks if all products return", async () => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(connection, "execute")
        .resolves([[{ id: 13, name: "batata", quantity: 20 }]]);
      await productController.getAll(req, res);
      expect(res.status.calledWith(200)).to.be.equal(true);
      expect(res.json.calledWith([{ id: 13, name: "batata", quantity: 20 }]));
    });
  });
  describe("verify get/products/:id", () => {
    it("checks if id products return", async () => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      req.params = { id: 13 };
      sinon
        .stub(connection, "execute")
        .resolves([[{ id: 13, name: "batata", quantity: 20 }]]);
      await productController.getById(req, res);
      expect(res.status.calledWith(200)).to.be.equal(true);
      expect(res.json.calledWith({ id: 13, name: "batata", quantity: 20 }));
    });
  });
  it("checks if id products is not found", async () => {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    req.params = { id: 13 };
    sinon.stub(connection, "execute").resolves([[]]);
    await productController.getById(req, res);
    expect(res.status.calledWith(404)).to.be.equal(true);
    expect(res.json.calledWith({ message: "Product not found" }));
  });
});
