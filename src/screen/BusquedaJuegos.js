import React, { useState } from "react";
import { StyleSheet, View, Text, Dimensions, Image } from "react-native";
import { Container, H1, Spinner, Card, CardItem, Body, H3} from "native-base";
import backend from "../api/backend";
import getEnvVars from "../../enviroment";
import { FlatList } from "react-native-gesture-handler";


const { apiUrl, apiKey, apiImageSize, apiImageUrl } = getEnvVars();
const { width, height } = Dimensions.get("window");

const BusquedaJuegos = ({route, navigation}) =>{
    const { search } = route.params;
    const [inicio, setInicio] = useState(null);
    const [error, setError] = useState(false);
    const getSearchJuegos = async () => {
        try{
            const response = await backend.get(`${apiUrl}Search${search}&api-key=${apiKey}`);
            setInicio(response.data);
        }catch (error){
            setError(true);
        }
        
    }

     //Efecto para comunicarnos con el API y buscar las peliculas
     useEffect(() => {
        getSearchJuegos();
    }, []);

    //mostrar spinner de carga si la api no da respuesta
    if (!Inicio) {
        return (
            <Container>
                <Spinner color="blue" />
            </Container>
        )
    }
    
    return(
        <Content>
            <H1>Busqueda: {inicio.count}</H1>
            <FlatList
            data={inicio.count}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
                return(
                    <View>
                    <Card>
                        <CardItem cardBody>
                        <Image   source={ 
                                         item.background_image ? ({ uri: `${apiImageUrl}${apiImageSize}${item.background_image}`}) 
                                         : require("../../assets/icon.png")}
                                     style={ item.background_image ? styles.gamesimage : styles.imageNotFound} /> 
                        </CardItem>
                        <CardItem>
                            <Body>
                                {/* {console.log(`${apiImageUrl}${apiImageSize}${item.background_image}`)} */}
                               
                                <H3>{item.name}</H3>
                                <Text>{item.rating}</Text>
                            </Body>
                        </CardItem>
                    </Card>
                </View>
                )

            }
              

            }
            />
        </Content>
      
    );

}

const styles = StyleSheet.create({
    gamesimage: {
        width: width * 0.99,
        height: height * 0.5,
    },
    imageNotFound:{
        width: width * 0.99,
        height: height * 0.5,
        resizeMode: "contain"
    }
});

export default BusquedaJuegos;