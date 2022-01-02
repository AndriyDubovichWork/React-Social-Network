import * as axios from 'axios';

// @ts-ignore
const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '25b10c74-22ee-49b1-87fa-5eaa964453f1',
  },
});
export const AuthAPI = {
  authMe: () => {
    return instance.get(`auth/me`).then((response) => response.data);
  },
  LogIn: (email, password, rememberMe) => {
    return instance
      .post(`auth/login`, { email, password, rememberMe })
      .then((response) => response);
  },
  LogOut: () => {
    return instance.delete(`auth/login`).then((response) => response);
  },
};

export const UsersAPI = {
  getUsers: (currentPage = 1, pageSize = 10) => {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },

  unFollow: (id) => {
    return instance.delete(`follow/${id}`).then((response) => response.data);
  },
  Follow: (id) => {
    return instance.post(`follow/${id}`).then((response) => response.data);
  },
};
export const ProfileAPI = {
  getUserProfile: (userId) => {
    return instance.get(`profile/${userId}`).then((response) => response.data);
  },
  getStatus: (userId) => {
    return instance.get(`profile/status/${userId}`).then((response) => {
      return response.data;
    });
  },
  UpdatePhoto: (photoFile) => {
    let formData = new FormData();
    formData.append('image', photoFile);
    return instance.put(`profile/photo`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
  updateStatus: (status) => {
    return instance
      .put(`profile/status`, { status })
      .then((response) => response.data);
  },
};

// export const NewsData = {
//   GetNews: () => {
//     const options = {
//       method: 'GET',
//       url: 'https://google-news.p.rapidapi.com/v1/top_headlines',
//       params: { lang: 'en', country: 'US' },
//       headers: {
//         'x-rapidapi-host': 'google-news.p.rapidapi.com',
//         'x-rapidapi-key': '933c98fa7amshe2840a4a213dfadp15a53ajsn8629f35eaef5',
//       },
//     };

//     return axios.request(options).then(function (response) {
//       console.log(response.data);
//     });
//   },
// };
