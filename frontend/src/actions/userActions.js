import {
  USER_LOGIN_ACTIONS,
  USER_REGISTER_ACTIONS,
  USER_DETAILS_ACTIONS,
  USER_UPDATE_PROFILE_ACTIONS,
} from "../constants/userConstants"
import { createAction } from "../utils/"

export const login = (email, password) =>
  createAction(
    USER_LOGIN_ACTIONS,
    "post",
    "api/users/login",
    {
      email,
      password,
    },
    {
      saveOnLocalStorageAs: "userInfo",
    }
  )

export const logout = () => (dispatch) => {
  localStorage.removeItem("userInfo")
  const USER_LOGOUT = USER_LOGIN_ACTIONS[3]
  dispatch({ type: USER_LOGOUT })
}

export const register = (name, email, password) =>
  createAction(
    USER_REGISTER_ACTIONS,
    "post",
    "api/users",
    {
      name,
      email,
      password,
    },
    {
      dispatchAdditionalAction: USER_LOGIN_ACTIONS[1],
      saveOnLocalStorageAs: "userInfo",
    }
  )

export const getUserDetails = (id) =>
  createAction(USER_DETAILS_ACTIONS, "get", "api/users/" + id, null, {
    withToken: true,
  })

export const updateUserProfile = (user) =>
  createAction(USER_UPDATE_PROFILE_ACTIONS, "put", "/api/users/profile", user, {
    withToken: true,
  })
