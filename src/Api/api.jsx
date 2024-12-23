import axios from "axios";
import {BaseUrl}from'./constants.jsx'
const accessToken = import.meta.env.VITE_Access_Token


const TMDB = axios.create({
    baseURL:BaseUrl,
    headers:{
        Authorization:`Bearer ${accessToken}`
    }

})

export default TMDB


