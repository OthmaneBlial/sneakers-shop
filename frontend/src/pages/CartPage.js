import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Cart from "../components/Cart"
import { addToCart, removeFromCart } from "../actions/cartActions"

const CartPage = ({ match, location, history }) => {
  const productId = match.params.id

  const qty = location.search ? Number(location.search.split("=")[1]) : 1

  const dispatch = useDispatch()

  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty))
    }
  }, [dispatch, productId, qty])

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id))
  }

  const checkoutHandler = () => {
    history.push("/login?redirect=shipping")
  }

  return (
    <Cart
      cartItems={cartItems}
      dispatch={dispatch}
      addToCart={addToCart}
      removeFromCartHandler={removeFromCartHandler}
      checkoutHandler={checkoutHandler}
    />
  )
}

export default CartPage
