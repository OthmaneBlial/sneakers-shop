import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Login from "../components/Login"
import { login } from "../actions/userActions"

const LoginPage = ({ location, history }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin

  const redirect = location.search ? location.search.split("=")[1] : "/"

  useEffect(() => {
    if (userInfo) {
      history.push(redirect)
    }
  }, [history, userInfo, redirect])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login(email, password))
  }

  return (
    <Login
      loading={loading}
      error={error}
      submitHandler={submitHandler}
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      redirect={redirect}
    />
  )
}

export default LoginPage
