import React, { useEffect, useState } from "react";
import { StyleSheet, Image, Dimensions } from "react-native";
import { Content, H1, Spinner, Card } from "native-base";
import getEnvVars from "../../enviroment";
import backend from "../api/backend";

const { apiUrl, apikey,  apiImageUrl, apiImageSize } = getEnvVars();
const { width, height } = Dimensions.get("window");

const InformacionJuegos = ({route, navigation}) => {
    //id de la pelicula
    const { id } = route.params;
    const [juego, setJuego] = useState(null);
    const [error, setError] = useState(false);

    const getInformacionJuego = async () => {
        try{
            await backend.get(`${apiUrl}${id}?apikey=${apikey}`)

            setJuego(response.data);
        } catch(error){
           setError(true);

        }
    };

    if (!juego) {
        return (
            <View style={{ flex: 1, justifyContent: "center" }}>
                <Spinner color="blue" />
            </View>
        )
    }

    
    useEffect(() => {
        getInformacionJuego();

    }, []);
    

    return(
        <Content>
            <H1>{juego.name}</H1>
            <Card cardBody>
                <Image 
                source={{uri: `${apiImageUrl}${apiImageSize}/${juego.background_image}`}}
                style={styles.gameposter}
                />
                <Text>{juego.minimum}</Text>
                <Text>{juego.recommended}</Text>
                <Text>Lanzamiento: {juego.released_at}</Text>
                <Text>Genero: {juego.genres}</Text>
                {
                    juego.genres.map((genres) => (
                    <Text key={genres.id}>{genres.name}</Text>
                        
                    
                    ))
                }
            </Card>
        </Content>
    );
}



const styles = StyleSheet.create({
    gameposter: {
        width: width,
        height: height * 0.5,
        resizeMode: "contain"
    }
});

export default InformacionJuegos;

