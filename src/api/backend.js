import axios from "axios";
import getEnvVars from "../../environment";

const { apiUrl } = getEnvVars();
const instance = axios.create({
    baseURL: apiUrl
});

export default instance;