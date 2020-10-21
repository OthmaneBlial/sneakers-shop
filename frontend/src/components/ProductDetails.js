import React from "react"
import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card"
import CardMedia from "@material-ui/core/CardMedia"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import MenuItem from "@material-ui/core/MenuItem"
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"
import Button from "@material-ui/core/Button"
import Rating from "./Rating"
import Message from "./Message"
import Loader from "./Loader"

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 530,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 40,
  },
}))

const ProductDetails = ({
  loading,
  error,
  product,
  qty,
  setQty,
  addToCartHandler,
}) => {
  const classes = useStyles()
  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='error'>{error}</Message>
      ) : (
        <Grid container spacing={1}>
          <Grid item md={6}>
            <Card className={classes.root}>
              <CardMedia
                className={classes.media}
                alt={product.name}
                image={product.image}
              />
            </Card>
          </Grid>
          <Grid item md={3}>
            <List variant='flush'>
              <ListItem>
                <Typography variant='h6'>{product.name}</Typography>
              </ListItem>
              <ListItem>
                <Rating
                  value={product.rating}
                  text={`${product.numReviews} reviews`}
                />
              </ListItem>
              <ListItem>
                <strong>Price: ${product.price}</strong>
              </ListItem>
              <ListItem>Description: {product.description}</ListItem>
            </List>
          </Grid>
          <Grid item md={3}>
            <Card>
              <List>
                <ListItem>
                  <Grid container justify='space-between'>
                    <Grid item>Price:</Grid>
                    <Grid>
                      <strong>${product.price}</strong>
                    </Grid>
                  </Grid>
                </ListItem>

                <ListItem>
                  <Grid container justify='space-between'>
                    <Grid item>Status:</Grid>
                    <Grid item>
                      {product.countInStock > 0 ? "In Stock" : "Out Of Stock"}
                    </Grid>
                  </Grid>
                </ListItem>

                {product.countInStock > 0 && (
                  <ListItem>
                    <Grid container justify='space-between'>
                      <Grid item>Qty</Grid>
                      <Grid>
                        <FormControl className={classes.formControl}>
                          <Select
                            labelId='qty'
                            id='qty'
                            value={qty}
                            onChange={(e) => setQty(e.target.value)}
                          >
                            {[...Array(product.countInStock).keys()].map(
                              (x) => (
                                <MenuItem key={x + 1} value={x + 1}>
                                  {x + 1}
                                </MenuItem>
                              )
                            )}
                          </Select>
                        </FormControl>
                      </Grid>
                    </Grid>
                  </ListItem>
                )}

                <ListItem>
                  <Button
                    onClick={addToCartHandler}
                    variant='contained'
                    color='primary'
                    fullWidth={true}
                    disabled={product.countInStock === 0}
                  >
                    Add To Cart
                  </Button>
                </ListItem>
              </List>
            </Card>
          </Grid>
        </Grid>
      )}
    </>
  )
}

export default ProductDetails
