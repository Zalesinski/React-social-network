import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "8e112cec-0a47-47b9-8ced-2dbb9ab84267"
    }
})

export const usersAPI = {
    getUsers (selectedPage = 1, pageSize = 10) {
        return instance
            .get(`users?page=${selectedPage}&count=${pageSize}`)
            .then(response => response.data);
    },
    followUser (userId) {
        return instance
            .post(`follow/${userId}`)
            .then(response => response.data)
    },
    unfollowUser (userId) {
        return instance
            .delete(`follow/${userId}`)
            .then(response => response.data)
    }
}

export const authAPI = {
    getAuth () {
        return instance
            .get(`auth/me`)
    },
    login (email, password, rememberMe = false, captcha) {
        return instance
            .post(`auth/login`, {email, password, rememberMe, captcha});
    },
    logout () {
        return instance
            .delete(`auth/login`);
    },
    getCaptcha () {
        return instance
            .get(`auth/login`);
    }
}

export const profileAPI = {
    getProfile (userId) {
        return instance
            .get(`profile/${userId}`)
            .then(response => response.data);
    },
    getStatus (userId) {

        return instance

            .get(`profile/status/${userId}`)
    },
    updateStatus (status) {
        return instance
            .put(`profile/status`, {status})
    },
    saveAva (file) {
        const formData = new FormData();
        formData.append("image", file)
        return instance
            .put(`profile/photo`, formData)
    },
    saveProfile(profile) {
        return instance
            .put(`profile`, profile)
    }
}

export const securityAPI = {
    getCaptcha () {
        return instance
            .get(`security/get-captcha-url`);
    }
}