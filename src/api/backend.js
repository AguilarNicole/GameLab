import axios from "axios";
import getEnvVars from "../../environment";

//Crear una instancia de conexion va ser igual paara toda a aplicacion
const { apiUrl } = getEnvVars();
const instance = axios.create({
    baseURL: apiUrl
});

export default instance;