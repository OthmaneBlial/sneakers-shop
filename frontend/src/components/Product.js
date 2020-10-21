import React from "react"
import { Link } from "react-router-dom"
import Rating from "./Rating"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardMedia from "@material-ui/core/CardMedia"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
}))

const Product = ({ product }) => {
  const classes = useStyles()
  return (
    <Card className={classes.root}>
      <Link to={`/product/${product._id}`}>
        <CardMedia className={classes.media} image={product.image} />
      </Link>

      <CardContent>
        <Typography variant='h6'>
          <Link to={`/product/${product._id}`}>
            <strong>{product.name}</strong>
          </Link>
        </Typography>
        <Rating
          className={classes.rating}
          value={product.rating}
          text={`${product.numReviews} reviews`}
        />
        <Typography variant='h5'>${product.price}</Typography>
      </CardContent>
    </Card>
  )
}

export default Product
