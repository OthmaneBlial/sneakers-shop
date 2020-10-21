import {
  PRODUCT_LIST_ACTIONS,
  PRODUCT_DETAILS_ACTIONS,
} from "../constants/productConstants"

export const productListReducer = (state = { products: [] }, action) => {
  const [REQUEST, SUCCESS, FAIL] = PRODUCT_LIST_ACTIONS
  switch (action.type) {
    case REQUEST:
      return { loading: true, products: [] }
    case SUCCESS:
      return { loading: false, products: action.payload }
    case FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const productDetailsReducer = (
  state = { product: { reviews: [] } },
  action
) => {
  const [REQUEST, SUCCESS, FAIL] = PRODUCT_DETAILS_ACTIONS
  switch (action.type) {
    case REQUEST:
      return { loading: true, ...state }
    case SUCCESS:
      return { loading: false, product: action.payload }
    case FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
