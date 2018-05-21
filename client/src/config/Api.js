import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: 'https://lets-shop-server.herokuapp.com',
  })
}