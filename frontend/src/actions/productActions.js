import {
  PRODUCT_LIST_ACTIONS,
  PRODUCT_DETAILS_ACTIONS,
} from "../constants/productConstants"
import { createAction } from "../utils"

export const listProducts = () =>
  createAction(PRODUCT_LIST_ACTIONS, "get", "/api/products")

export const listProductDetails = (id) =>
  createAction(PRODUCT_DETAILS_ACTIONS, "get", "/api/products/" + id)
