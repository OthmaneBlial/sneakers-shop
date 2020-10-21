import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import ProductDetails from "../components/ProductDetails"
import { listProductDetails } from "../actions/productActions"

const ProductPage = ({ history, match }) => {
  const [qty, setQty] = useState(1)

  const dispatch = useDispatch()

  const productDetails = useSelector((state) => state.productDetails)
  const { loading, error, product } = productDetails

  useEffect(() => {
    dispatch(listProductDetails(match.params.id))
  }, [dispatch, match])

  const addToCartHandler = () => {
    history.push(`/cart/${match.params.id}?qty=${qty}`)
  }

  return (
    <ProductDetails
      loading={loading}
      error={error}
      product={product}
      qty={qty}
      setQty={setQty}
      addToCartHandler={addToCartHandler}
    />
  )
}

export default ProductPage
