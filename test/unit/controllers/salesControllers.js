const chai = require("chai");
const expect = chai.expect;
const sinon = require("sinon");
const connection = require("../../../models/connection");
const salesController = require("../../../controllers/saleControllers");
const { afterEach } = require('mocha');

const res = {};
const req = {};

afterEach(() => {
    sinon.restore()
  });

describe("Sales Controllers test", () => {
  describe("verify get/sales", () => {
    it("checks if all sales return", async () => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon.stub(connection, "execute").resolves([
        [
          {
            saleId: 1,
            date: "2021-09-09 04:54:29",
            productId: 1,
            quantity: 2,
          },
        ],
      ]);
      await salesController.getAll(req, res);
      expect(res.status.calledWith(200)).to.be.equal(true);
      expect(
        res.json.calledWith([
          {
            saleId: 1,
            date: "2021-09-09 04:54:29",
            productId: 1,
            quantity: 2,
          },
        ])
      );
    });
  });
});


