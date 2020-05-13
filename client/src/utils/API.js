import axios from "axios";

export default {
    search: function (search) {
        return axios.get("/search/" + search);
    },
    save: function (book) {
        return axios.post("/api/books", book);
    },
    getBooks: function () {
        return axios.get("/api/books");
    },
    removeBook: function (id) {
        return axios.delete("/api/books/" + id)
    }
}