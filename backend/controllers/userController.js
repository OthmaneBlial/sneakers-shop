import asyncHandler from "express-async-handler"
import User from "../models/userModel.js"
import { buildUser, throwError, generateToken } from "../utils/index.js"
import {
  INVALID_LOGIN,
  USER_EXISTS,
  INVALID_USER_DATA,
  USER_NOT_FOUND,
} from "../utils/errors.js"

//  Public POST to /users/login
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ email })

  if (user && (await user.matchPassword(password))) {
    res.json({
      ...buildUser(user),
      token: generateToken(user._id),
    })
  } else throwError(res, 401, INVALID_LOGIN)
})

// Public POST to /users
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body

  const userExists = await User.findOne({ email })

  if (userExists) throwError(res, 400, USER_EXISTS)

  const user = await User.create({
    name,
    email,
    password,
  })

  if (user) {
    res.status(201).json({
      ...buildUser(user),
      token: generateToken(user._id),
    })
  } else throwError(res, 400, INVALID_USER_DATA)
})

// Private GET to /users/profile
const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id)

  if (user) {
    res.json({
      ...buildUser(user),
    })
  } else throwError(res, 404, USER_NOT_FOUND)
})

// Private PUT to /users/profile
const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id)

  if (user) {
    user.name = req.body.name || user.name
    user.email = req.body.email || user.email
    if (req.body.password) {
      user.password = req.body.password
    }

    const updatedUser = await user.save()

    res.json({
      ...buildUser(updatedUser),
      token: generateToken(updatedUser._id),
    })
  } else throwError(res, 404, USER_NOT_FOUND)
})

export { authUser, registerUser, getUserProfile, updateUserProfile }
