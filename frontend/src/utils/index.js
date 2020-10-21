import axios from "axios"

const createAction = (
  ACTIONS,
  method,
  url,
  body = null,
  options = {}
) => async (dispatch, getState) => {
  const [REQUEST, SUCCESS, ERROR] = ACTIONS
  const { withToken, saveOnLocalStorageAs, dispatchAdditionalAction } = options

  try {
    dispatch({
      type: REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const headers = createHeaders(userInfo && withToken ? userInfo.token : null)

    const { data } = await axios({ method, url, data: body, headers })

    dispatch({
      type: SUCCESS,
      payload: data,
    })

    if (dispatchAdditionalAction) {
      dispatch({
        type: dispatchAdditionalAction,
        payload: data,
      })
    }
    saveOnLocalStorage && saveOnLocalStorage(saveOnLocalStorageAs, data)
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: getMessageFromError(error),
    })
  }
}

const createHeaders = (token) => {
  let headers
  const contentTypeJson = {
    "Content-Type": "application/json",
  }
  if (token) {
    headers = { ...contentTypeJson, Authorization: `Bearer ${token}` }
  } else {
    headers = contentTypeJson
  }

  return headers
}

const saveOnLocalStorage = (name, data) =>
  localStorage.setItem(name, JSON.stringify(data))

const getMessageFromError = (error) =>
  error.response && error.response.data.message
    ? error.response.data.message
    : error.message

export { createAction, saveOnLocalStorage }
