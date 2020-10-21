import asyncHandler from "express-async-handler"
import Product from "../models/productModel.js"
import { throwError } from "../utils/index.js"
import { PRODUCT_NOT_FOUND } from "../utils/errors.js"

// Public to  GET /products
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({})

  res.json(products)
})

// Public to /products/:id
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)

  if (product) {
    res.json(product)
  } else throwError(res, 404, PRODUCT_NOT_FOUND)
})

export { getProducts, getProductById }
