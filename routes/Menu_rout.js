const express = require("express");
const router = express.Router();

const menuController = require("../controllers/Menu_con");

router.get("/show", menuController.getData);
router.get("/show/:menuId", menuController.getData);
router.post("/create", menuController.createData);
router.post("/delete", menuController.deleteDataById);

module.exports = router;
