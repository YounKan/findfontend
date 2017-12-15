import axios from 'axios'
import localStorage from 'localStorage'
import { request } from 'https';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3009',
    headers: { 'Content-Type': 'application/json' }
})

export const login = (username, password) => {
    const data = {
        username: username,
        password: password
    }

    return axiosInstance.post('login', data)
        .then(data => data)
        .catch(error => error.response)
}

export const find = () => {
    return axiosInstance.get('api/user/find/'+localStorage.getItem('username'))
        .then(data => data)
        .then(response => response.data)
        .catch(error => error.response)
}





export const register = (firstname ,lastname ,username,password,email,tel) => {
    const data = {
        firstname:firstname,
        lastname:lastname,
        username: username,
        password: password,
        email:email,
        tel:tel
    }

    return axiosInstance.post('api/user/signup', data)
        .then(data => data)
        .catch(error => error.response)
}

export const editprofile = (firstname ,lastname ,username,password,email) => {
    const data = {
        firstname:firstname,
        lastname:lastname,
        username: username,
        password: password,
        email:email
    }

    return axiosInstance.put('api/user/editprofile', data)
        .then(data => data)
        .catch(error => error.response)
}

export const publishPost = (title, content,author) => {
    const data = {
        title: title,
        content: content,
        author: author
    }

    return axiosInstance.post('api/comment/create/', data)
        .then(data => data)
        .catch(error => error.response)
}

export const getAllPosts = () => {
    return axiosInstance.get('/api/comment/all/')
        .then(response => response.data)
        .catch(error => { throw (error.response) })
}


export const postItem = (name,description,lookfor,send,category) => {
    const item = {
    name:name,
     description:description,
     lookfor:lookfor,
     send:send,
     category:category,
     postby: localStorage.getItem('username')
     }

    return axiosInstance.post('api/item/create/', item)
      .then(item => item)
      .catch(error => error.response)
}

export const getAllItem = () => {
    return axiosInstance.get('/api/item/all/')
        .then(response => response.data)
        .catch(error => { throw (error.response) })
}

export const getUser= () => {
    return axiosInstance.get('/api/user/getuser/')
        .then(response => response.data)
        .catch(error => { throw (error.response) })
}








/*--------------------------------------------------------------------*/

export const commentTopic = (title ,content ,author) => {
    const data = {
        title:title,
        content:content,
        author: author
    }

    return axiosInstance.post('api/comment/create', data)
        .then(data => data)
        .catch(error => error.response)
}



export const newTopic = (title ,content ,author,room) => {
    const data = {
        title:title,
        content:content,
        author: author,
        room : room
    }

    return axiosInstance.post('api/topic/create', data)
        .then(data => data)
        .catch(error => error.response)
}

export const findtopic = () => {
    return axiosInstance.get('api/topic/id/'+ localStorage.getItem('topic'))
        .then(data => data)
        .then(response => response.data)
        .catch(error => error.response)
}


export const getAlltopic = () => {
    return axiosInstance.get('/api/topic/all/')
        .then(response => response.data)
        .catch(error => { throw (error.response) })
}



/*--------------------------------------------------------------------*/
