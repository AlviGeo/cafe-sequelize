const express = require("express");
const router = express.Router();
const menuController = require("../controllers/Menu_con");

const storage = multer.diskStorage({
    destination: (req, res, cb) => {
        cb(null, './public/images')
    },
    filename: (req, file, cb) => {
        cb(null, new Date().localeDateString + file.originalname)
    }
})

const upload = multer ({
    storage : storage
})


router.get("/show", menuController.getData);
router.get("/show/:menuId", menuController.getData);
router.post("/create", menuController.createData);
router.post("/delete", menuController.deleteDataById);

module.exports = router;
