const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BookSchema = new Schema({
  title: String,
  subtitle: String,
  authors: Array,
  description: String,
  image: String,
  link: String
});

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;
