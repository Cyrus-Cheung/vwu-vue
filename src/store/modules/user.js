import { login } from '../../api/login'
import Cookies from 'js-cookie'

const user = {
  state: {
    username: '',
    token: Cookies.get('admin-token'),
    avatar: 'http://wx.qlogo.cn/mmopen/6Uy62ZWkLef6aH1gmlcGa4dnfJHJSWSYuShg9vhC6AibwI2MtqSnuln7cc78RUxh39qvPnOZpEuepRW2KtjvKXtJh4OWSzfmy/0'
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_USERNAME: (state, username) => {
      state.username = username
    }
  },

  actions: {
    Login ({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        login(userInfo.username, userInfo.password).then(response => {
          // console.log(response.data)
          const data = response.data
          Cookies.set('admin-token', data.token)
          commit('SET_TOKEN', data.token)
          commit('SET_USERNAME', data.username)
          resolve(response.data)
        }).catch(error => {
          reject(error)
        })
      })
    },
    Logout ({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        Cookies.remove('admin-token')
        resolve()
      })
    }
  }
}

export default user
