const admin = require("../../controller/admin/admin.controller")
const express = require("express")
const router = express.Router();

router.post('/store', admin.create);
router.post('/login', admin.login);
router.get('/', admin.fetch);
router.delete('/delete/:_id', admin.deleteAdmin);

module.exports = router;