import * as axios from "axios";


const instance = axios.create ({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": 'caaeedb3-fe3c-454c-9b24-259eac0f5662'
    }
});


export const userAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,
        )
            .then(response => {
                return response.data;
            });
    },
    getMe() {
        return instance.get(`auth/me`,
        )
            .then(response => {
                return response.data;
            });
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe}
        )
            .then(response => {
                return response.data;
            });
    },
    logout() {
        return instance.delete(`auth/login`,
        )
            .then(response => {
                return response.data;
            });
    },

    delete(id) {
        return instance.delete(`follow/${id}`,
        )
            .then(response => {
                return response.data;
            });
    },
    post(id) {
        return instance.post(`follow/${id}`,
        )
            .then(response => {
                return response.data;
            });
    },
    getProfile(userId) {
        return instance.get(`profile/` + userId
        )
    },
    getStatus(userId) {
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status) {
        return instance.put(`profile/status/`, {status: status});
    },
    savePhoto(photoFile) {
        const formData = new FormData();
        formData.append('image', photoFile)
        return instance.put(`profile/photo/`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    },
    saveProfile(profile) {
        return instance.put(`profile/`, profile)
    },
    getCaptcha() {
        return instance.get(`security/get-captcha-url/`);

    }
}






