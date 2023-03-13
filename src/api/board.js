import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com/";

export default {
    getArticle: function(id) {
        return axios.get(BASE_URL + `posts/${id}`);
    },

    getArticles: function(page) {
        console.log(page);
        return axios.get(BASE_URL + `posts`);
    },

    postArticle: function(userId, title, body) {
        return axios.post(
            BASE_URL + "posts",
            //객체 형식으로 보내기
            {
                userId: userId,
                title: title,
                body: body,
            }
        );
    },
}