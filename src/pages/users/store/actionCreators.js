import * as actionsTypes from './constants';

import {
  getUserList
} from "@/services/users"

const changeListAction = (res) => ({
  type: actionsTypes.GET_USER_LIST,
  userList: res
})

export const getUserListAction = () => {
  return (dispatch) => {
    getUserList().then(res => {
      dispatch(changeListAction(res))
    })
  }
}