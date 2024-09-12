import axios from 'axios'

const API_BASE_URL = "http://localhost:3030"

const APIService = {
    login : async (userId, password) => {
        const res = await axios.post(`${API_BASE_URL}/login`, {
            userId,
            password
        })
        return res
    },
    register : async (userId, password, check_password, name) => {
        const res = await axios.post(`${API_BASE_URL}/register`, {
            userId,
            password,
            check_password,
            name
        })
        return res.data
    },
    recruitments : async (title, content, isDone, authorId) => {
        const res = await axios.post(`${API_BASE_URL}/recruitments`, {
            title,
            content,
            isDone,
            authorId
        })
        return res.data
    },
    recruitmentsPosts : async () => {
        const res = await axios.get(`${API_BASE_URL}/recruitmentsPosts`) 
        return res.data
    },
    userData : async (Id) => {
        const res = await axios.post(`${API_BASE_URL}/userData`, {
            Id
        })
        return res
    },
    isDone : async (postsId) => {
        const res = await axios.post(`${API_BASE_URL}/isDone`, {
            postsId
        })
        return res
    },
    recuritmentsDelete : async (postsId) => {
        const res = await axios.post(`${API_BASE_URL}/recuritmentsDelete`, {
            postsId
        })
        return res
    }
}

export default APIService