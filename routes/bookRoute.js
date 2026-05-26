const express = require("express");
const router = express.Router();
const {
  createBooks,
  getBooks,
  getBook,
  updateBook,
  deleteBook,
} = require("../controllers/bookController");

router.post("/", createBooks);
router.get("/books", getBooks);
router.get("/:id", getBook);
router.put("/:id", updateBook);
router.delete("/:id", deleteBook);

module.exports = router;
