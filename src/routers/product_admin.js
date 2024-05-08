const express = require("express");
const router = express.Router();

const productAdminController = require("../app/controllers/productAdminController");

router.get("/:slug", productAdminController.show);
router.get("/", productAdminController.index);
module.exports = router;
