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

export function modifyUser(user) {
  return request({
    method: 'post',
    url: '/users/modify',
    data: user
  })
}