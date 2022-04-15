import request from './axios'

export function register(user) {
  return request({
    method: 'post',
    url: '/users/register',
    data: user
  })
}

export function loginUser(user) {
  return request({
    method: 'post',
    url: '/users/login',
    data: user
  })
}

export function getUserList() {
  return request({
    method: 'get',
    url: '/users/list'
  })
}

// export function modifyUser(user) {
//   return request({
//     method: 'post',
//     url: '/users/modify',
//     data: user
//   })
// }

export function updateUser(user) {
  return request({
    method: 'post',
    url: '/users/update',
    data: user
  })
}

export function removeUser(Uid) {
  return request({
    method: 'delete',
    url: '/users/remove',
    data: Uid
  })
}

export function searchUser(user) {
  return request({
    method: 'get',
    url: '/users/search',
    params: user
  })
}