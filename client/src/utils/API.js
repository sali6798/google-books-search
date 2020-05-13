import axios from "axios";

export default {
    search: function (search) {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${search}&maxResults=40&key=AIzaSyDlcftYZPY_X1lyarWB-0AYX20zyRLeq7E`)
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