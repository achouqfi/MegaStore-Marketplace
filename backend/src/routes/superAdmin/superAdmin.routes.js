
const superadmin = require("../../controller/supedAdmin/superAdmin.controller")
const express = require("express")
const router = express.Router();

router.post('/login', superadmin.login)

module.exports = router;

