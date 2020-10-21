import axios from "axios"
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants"
import { saveOnLocalStorage } from "../utils"

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/${id}`)
  const cartItems = getState().cart.cartItems

  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      qty,
    },
  })

  saveOnLocalStorage("cartItems", cartItems)
}

export const removeFromCart = (id) => (dispatch, getState) => {
  const cartItems = getState().cart.cartItems
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: id,
  })

  saveOnLocalStorage("cartItems", cartItems)
}
