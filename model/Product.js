const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  productId: {
    type: Date,
    default: Date.now(),
  },
  productName: {
    type: String,
    required: true,
  },
  qtyPerUnit: {
    type: Number,
    required: true,
  },
  unitPrice: {
    type: Number,
    required: true,
  },
  unitInStock: {
    type: Number,
    required: true,
  },
  discontinued: {
    type: Boolean,
    required: true,
  },
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
});

module.exports = mongoose.model("Products", ProductSchema)