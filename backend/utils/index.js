import jwt from "jsonwebtoken"

const buildUser = (user) => ({
  _id: user._id,
  name: user.name,
  email: user.email,
  isAdmin: user.isAdmin,
})

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  })
}

const throwError = (response, status, error) => {
  response.status(status)
  throw new Error(error)
}

export { buildUser, generateToken, throwError }
