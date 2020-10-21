import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Link from "@material-ui/core/Link"
import { logout } from "../actions/userActions"

const Header = () => {
  const classes = useStyles()
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' className={classes.title}>
            <Link href='/' className={classes.link}>
              SNREAKERS SHOP
            </Link>
          </Typography>
          <Link href='/cart' className={classes.link}>
            CART
          </Link>
          {userInfo ? (
            <>
              <Link href='/profile' className={classes.link}>
                PROFILE
              </Link>
              <Link
                href='/login'
                className={classes.link}
                onClick={logoutHandler}
              >
                LOGOUT
              </Link>
            </>
          ) : (
            <Link href='/login' className={classes.link}>
              LOGIN
            </Link>
          )}
        </Toolbar>
      </AppBar>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: "#ffffff",
  },
  link: {
    color: "#ffffff",
    fontWeight: "bold",
    margin: theme.spacing(2),
    "&:hover": {
      color: "#ffffff",
      textDecoration: "none",
    },
  },
}))

export default Header
