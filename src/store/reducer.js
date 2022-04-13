import {combineReducers} from "redux-immutable"

import { reducer as recommendReducer } from '../pages/discover/child-pages/recommend/store'
import {reducer as playerReducer } from '../pages/player/store'
import {reducer as rankingReducer } from '../pages/discover/child-pages/ranking/store'

export default combineReducers({
  recommend: recommendReducer,
  player: playerReducer,
  ranking: rankingReducer
})
