import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import ProductList from "../components/ProductList"
import { listProducts } from "../actions/productActions"

const HomePage = () => {
  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)
  const { loading, error, products } = productList

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])

  return <ProductList loading={loading} error={error} products={products} />
}

export default HomePage
