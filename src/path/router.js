const { Router } = require("express");
const controller = require("./controller");

const router = Router();

router.post("/signin", controller.userRegister);
router.post("/login", controller.userLogin);
router.post("/add/product", controller.insertProduct);
router.post("/sales/data", controller.insertSale);
module.exports = router;
