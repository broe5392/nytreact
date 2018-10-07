import axios from "axios";

export default {
    getArticles: function(query) {
        console.log(query);
        return axios.get("/API/articles/articles", { params: {q: query} });
    }
};