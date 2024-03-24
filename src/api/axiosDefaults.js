import axios from "axios";

axios.defaults.baseURL = "https://footiemedia-e40f5ee4a039.herokuapp.com/"
axios.defaults.headers.post['Content-Type'] = 'mulitpart/form-data'
axios.defaults.withCredentials = true