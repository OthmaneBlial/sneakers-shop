import React from "react"
import { Link } from "react-router-dom"
import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card"
import CardMedia from "@material-ui/core/CardMedia"
import { makeStyles } from "@material-ui/core/styles"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import MenuItem from "@material-ui/core/MenuItem"
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"
import Button from "@material-ui/core/Button"
import Paper from "@material-ui/core/Paper"
import DeleteOutlineRounded from "@material-ui/icons/DeleteOutlineRounded"
import Message from "./Message"

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 170,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 40,
  },
  title: {
    padding: "10px",
    marginLeft: 10,
  },
}))

const Cart = ({
  cartItems,
  dispatch,
  addToCart,
  removeFromCartHandler,
  checkoutHandler,
}) => {
  const classes = useStyles()
  return (
    <Grid container spacing={2}>
      <Grid item md={9}>
        <h1>Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <Message>
            Your cart is empty <Link to='/'>Go Back</Link>
          </Message>
        ) : (
          <List>
            {cartItems.map((item) => (
              <ListItem key={item.product}>
                <Grid container>
                  <Grid item md={3}>
                    <Card className={classes.root}>
                      <CardMedia
                        className={classes.media}
                        alt={item.name}
                        image={item.image}
                      />
                    </Card>
                  </Grid>
                  <Grid item md={4}>
                    <Link
                      className={classes.title}
                      to={`/product/${item.product}`}
                    >
                      {item.name}
                    </Link>
                  </Grid>
                  <Grid item md={2}>
                    ${item.price}
                  </Grid>
                  <Grid md={1}>
                    <FormControl className={classes.formControl}>
                      <Select
                        labelId='qty'
                        id='qty'
                        value={item.qty}
                        onChange={(e) =>
                          dispatch(
                            addToCart(item.product, Number(e.target.value))
                          )
                        }
                      >
                        {[...Array(item.countInStock).keys()].map((x) => (
                          <MenuItem key={x + 1} value={x + 1}>
                            {x + 1}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item md={2}>
                    <Button
                      type='button'
                      variant='light'
                      onClick={() => removeFromCartHandler(item.product)}
                    >
                      <DeleteOutlineRounded />
                    </Button>
                  </Grid>
                </Grid>
              </ListItem>
            ))}
          </List>
        )}
      </Grid>
      <Grid item md={3}>
        <Paper>
          <List>
            <ListItem>
              <h2>
                Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)})
                items: $
                {cartItems
                  .reduce((acc, item) => acc + item.qty * item.price, 0)
                  .toFixed(2)}
              </h2>
            </ListItem>
            <ListItem>
              <Button
                variant='contained'
                color='primary'
                fullWidth={true}
                disabled={cartItems.length === 0}
                onClick={checkoutHandler}
              >
                Proceed To Checkout
              </Button>
            </ListItem>
          </List>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default Cart
