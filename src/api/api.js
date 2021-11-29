import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '25b10c74-22ee-49b1-87fa-5eaa964453f1',
    },
});
export const authMe = () => {
    return instance.get(`auth/me`).then((response) => response.data);
};

export const UsersAPI = {
    getUsers: (currentPage = 1, pageSize = 10) => {
        return instance
            .get(`users?page=${currentPage}&count=${pageSize}`)
            .then((response) => response.data);
    },

    unFollow: (id) => {
        return instance
            .delete(`follow/${id}`)
            .then((response) => response.data);
    },
    Follow: (id) => {
        return instance.post(`follow/${id}`).then((response) => response.data);
    },
};
export const ProfileAPI = {
    getUserProfile: (userId) => {
        return instance
            .get(`profile/${userId}`)
            .then((response) => response.data);
    },
    getStatus: (userId) => {
        return instance.get(`profile/status/${userId}`).then((response) => {
            return response.data;
        });
    },
    updateStatus: (status) => {
        return instance
            .put(`profile/status`, { status })
            .then((response) => response.data);
    },
    LogIn: (email, password, rememberMe) => {
        return instance
            .post(`auth/login`, { email, password, rememberMe })
            .then((response) => {
                console.log(response);
                return response;
            });
    },
};
