//exportar todas las constantes que vienene desde expo
import Constants from "expo-constants";

//crear objeto que va contener las variables de ambiente, expo cuando se ejecuta lo hace en modo development
const ENV = {
    dev: {
        apiUrl: "https://api.rawg.io/api/games",
        apikey: "43d3703466604b88b642c649595ab7d9",
        apiImageUrl: "https://media.rawg.io/media/games",
        apiImageSize: "w500"
    }
};

const getEnvVars = (env = Constants.manifest.releaseChannel) => {
    if(__DEV__){ 
       return ENV.dev; 
    } 
};

export default getEnvVars;
