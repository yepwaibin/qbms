import { Map } from "immutable";
import * as actionType from "./constants";

const defaultState = Map({
  userList: [],
});

const reducer = (state = defaultState, action) => {
  switch(action.type) {
    case actionType.GET_USER_LIST:
      return state.set("userList", action.userList);
    default:
      return state;
  }
}

export default reducer;