import axios from "axios";

export default {
    getArticles: function(query) {
        return axios.get("/", { params: {q: query} });
    }
};