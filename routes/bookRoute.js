const express = require("express");
const router = express.Router();
const { createBooks, getBooks } = require("../controllers/bookController");

router.post("/", createBooks);
router.get("/books", getBooks);

module.exports = router;
