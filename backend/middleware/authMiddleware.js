import jwt from "jsonwebtoken"
import asyncHandler from "express-async-handler"
import User from "../models/userModel.js"
import { throwError } from "../utils/index.js"
import { NOT_AUTHORIZED } from "../utils/errors.js"

const protect = asyncHandler(async (req, res, next) => {
  let token

  const auth = req.headers.authorization
  const jwtSecrect = process.env.JWT_SECRET

  if (auth && auth.startsWith("Bearer")) {
    try {
      token = auth.split(" ")[1]
      const decoded = jwt.verify(token, jwtSecrect)

      req.user = await User.findById(decoded.id).select("-password")

      next()
    } catch (error) {
      console.error(error)
      throwError(res, 401, NOT_AUTHORIZED)
    }
  }

  if (!token) throwError(res, 401, NOT_AUTHORIZED)
})

export { protect }
