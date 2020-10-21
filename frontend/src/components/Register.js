import React from "react"
import Message from "./Message"
import Loader from "./Loader"
import FormContainer from "../components/FormContainer"
import TextField from "@material-ui/core/TextField"
import FormControl from "@material-ui/core/FormControl"
import FormGroup from "@material-ui/core/FormGroup"
import FormLabel from "@material-ui/core/FormLabel"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import Link from "@material-ui/core/Link"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  title: {
    margin: "40px 0",
  },
  formItem: {
    display: "block",
    margin: "20px 0",
  },
  button: {
    margin: "0 auto",
    width: "100%",
  },
  input: {
    padding: "5px",
    width: 300,
  },
  meta: {
    marginTop: "10px",
  },
}))

const Register = ({
  message,
  error,
  loading,
  submitHandler,
  name,
  setName,
  email,
  setEmail,
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
  redirect,
}) => {
  const classes = useStyles()
  return (
    <FormContainer>
      <Typography variant='h4' className={classes.title}>
        SIGN UP
      </Typography>
      {message && <Message variant='error'>{message}</Message>}
      {error && <Message variant='error'>{error}</Message>}
      {loading && <Loader />}
      <form onSubmit={submitHandler}>
        <FormControl component='fieldset' className={classes.formItem}>
          <FormGroup>
            <FormLabel component='legend'>Name</FormLabel>
            <TextField
              className={classes.input}
              id='name'
              type='name'
              placeholder='Enter name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormGroup>
        </FormControl>

        <FormControl component='fieldset' className={classes.formItem}>
          <FormGroup>
            <FormLabel component='legend'>Email Address</FormLabel>
            <TextField
              className={classes.input}
              id='email'
              type='email'
              placeholder='Enter email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormGroup>
        </FormControl>

        <FormControl component='fieldset' className={classes.formItem}>
          <FormGroup>
            <FormLabel component='legend'>Password</FormLabel>
            <TextField
              className={classes.input}
              id='password'
              type='password'
              placeholder='Enter password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormGroup>
        </FormControl>

        <FormControl component='fieldset' className={classes.formItem}>
          <FormGroup>
            <FormLabel component='legend'>Confirm Password</FormLabel>
            <TextField
              className={classes.input}
              id='confirmPassword'
              type='password'
              placeholder='Confirm password'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </FormGroup>
        </FormControl>

        <Button
          type='submit'
          variant='contained'
          color='primary'
          className={classes.button}
        >
          Register
        </Button>
      </form>

      <Typography variant='p' className={classes.meta}>
        Already registered?{" "}
        <Link
          href={redirect ? `/login?redirect=${redirect}` : "/login"}
          className={classes.link}
        >
          Log in
        </Link>
      </Typography>
    </FormContainer>
  )
}

export default Register
