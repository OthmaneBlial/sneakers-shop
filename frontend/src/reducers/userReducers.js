import {
  USER_LOGIN_ACTIONS,
  USER_REGISTER_ACTIONS,
  USER_DETAILS_ACTIONS,
  USER_UPDATE_PROFILE_ACTIONS,
} from "../constants/userConstants"

export const userLoginReducer = (state = {}, action) => {
  const [REQUEST, SUCCESS, FAIL, LOGOUT] = USER_LOGIN_ACTIONS
  switch (action.type) {
    case REQUEST:
      return { loading: true }
    case SUCCESS:
      return { loading: false, userInfo: action.payload }
    case FAIL:
      return { loading: false, error: action.payload }
    case LOGOUT:
      return {}
    default:
      return state
  }
}

export const userRegisterReducer = (state = {}, action) => {
  const [REQUEST, SUCCESS, FAIL] = USER_REGISTER_ACTIONS
  switch (action.type) {
    case REQUEST:
      return { loading: true }
    case SUCCESS:
      return { loading: false, userInfo: action.payload }
    case FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const userDetailsReducer = (state = { user: {} }, action) => {
  const [REQUEST, SUCCESS, FAIL] = USER_DETAILS_ACTIONS
  switch (action.type) {
    case REQUEST:
      return { ...state, loading: true }
    case SUCCESS:
      return { loading: false, user: action.payload }
    case FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const userUpdateProfileReducer = (state = {}, action) => {
  const [REQUEST, SUCCESS, FAIL] = USER_UPDATE_PROFILE_ACTIONS
  switch (action.type) {
    case REQUEST:
      return { loading: true }
    case SUCCESS:
      return { loading: false, success: true, userInfo: action.payload }
    case FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
