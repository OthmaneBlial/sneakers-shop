import React from "react"
import Grid from "@material-ui/core/Grid"
import Product from "./Product"
import Message from "./Message"
import Loader from "./Loader"

const ProductList = ({ loading, error, products }) => {
  return (
    <>
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='error'>{error}</Message>
      ) : (
        <Grid container justify='center' alignItems='center' spacing={2}>
          {products.map((product) => (
            <Grid item key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  )
}

export default ProductList
