const express = require("express");
const router = express.Router();

const categoryAdminController = require("../app/controllers/categoryAdminController");

router.get("/:slug", categoryAdminController.show);
router.get("/", categoryAdminController.index);
module.exports = router;
