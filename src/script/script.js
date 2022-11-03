import axios from "axios";

const repos = axios
.get("https://api.github.com/users/ribborges")
.then((res) => axios.get(res.data.login))
.catch((err) => console.log(err));