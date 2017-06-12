import fetch from '../utils/fetch'

export function login (username, password) {
  const data = {
    username,
    password
  }
  return fetch({
    url: 'api/public/login',
    method: 'post',
    data
  })
}
