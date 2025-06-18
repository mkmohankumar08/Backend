const express = require("express");
const { createContact } = require("../controller/contactController");
const router = express.Router();

router.post("/contact", createContact);

module.exports = router;
