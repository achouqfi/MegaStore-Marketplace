const admin = require("../../controller/admin/admin.controller")
const express = require("express")
const router = express.Router();

router.post('/store', admin.create)

module.exports = router;