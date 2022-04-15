import {combineReducers} from "redux-immutable"

import { reducer as userReducer } from '../pages/users/store'

export default combineReducers({
  user: userReducer,
})
