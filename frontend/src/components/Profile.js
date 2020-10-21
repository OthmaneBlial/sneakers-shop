import React from "react"
import TextField from "@material-ui/core/TextField"
import FormControl from "@material-ui/core/FormControl"
import FormGroup from "@material-ui/core/FormGroup"
import FormLabel from "@material-ui/core/FormLabel"
import Button from "@material-ui/core/Button"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"
import Message from "./Message"
import Loader from "./Loader"

const useStyles = makeStyles((theme) => ({
  formItem: {
    display: "block",
    margin: "20px 0",
  },
  button: {
    margin: "0 auto",
    width: 300,
  },
  input: {
    padding: "5px",
    width: 300,
  },
}))

const Profile = ({
  message,
  error,
  success,
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
}) => {
  const classes = useStyles()
  return (
    <Grid container>
      <Grid item md={3}>
        <h2>User Profile</h2>
        {message && <Message variant='error'>{message}</Message>}
        {error && <Message variant='error'>{error}</Message>}
        {success && <Message variant='success'>Profile Updated</Message>}
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
            Update
          </Button>
        </form>
      </Grid>
    </Grid>
  )
}

export default Profile
