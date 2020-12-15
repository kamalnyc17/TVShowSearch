import axios from "axios";

const BASEURL = "https://api.tvmaze.com/search/shows?q="

export default function FetchAPI(query) {
    return axios.get(BASEURL + query)
}