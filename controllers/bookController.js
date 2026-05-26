const Book = require("../models/bookModel");

// createBook
exports.createBooks = async (req, res) => {
  try {
    const book = await Book.create(req.body);
    res.status(201).json({ success: true, data: book });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

//getAll
exports.getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json({ success: true, count: books.length, data: books });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// getSingleBook
exports.getBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status;
      (404).json({ message: "Book not found!" });
    }
    res.status(200).json({ success: "true", data: book });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

//updateBook
exports.updateBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({ success: "true", data: book });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// deleteBook
exports.deleteBook = async (req, res) => {
  try {
    await Book.findByIdAndDelete(req.params.id);
    res.status(200).json({ success: "true", message: "Book Deleted!" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
