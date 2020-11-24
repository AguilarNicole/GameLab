import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import { Input, Container, Form, Item, H1, Button, Header, Icon} from "native-base";
import backend from "../api/backend";
import getEnvVars from "../../enviroment";

const { apikey } = getEnvVars();

const { width, height } = Dimensions.get("window");

const Inicio = () => {
    const [inicio, setInicio] = useState(null);
    const [error, setError] = useState(false);

    const getInicio = async () => {
        try{

        const response = await backend.get(`games?api-key=${apikey}&page=1`);

        setInicio(response.data);
        /* console.log(response.data); */

        } catch (error){
            //error al ejecutar la peticion a API
            setError(true);

        }
    }

    getInicio();


    return (
        <Container>
            <Header searchBar>
                <Item >
                    <Input placeholder="Buscar"/>
                </Item>
                <Button icon>
                    <Icon name="search" />
                </Button>
            </Header>
            <H1 style={{ marginTop: 20 }}>VideoJuegos</H1>
            <Image
                source={require("../../assets/Logo.jpeg")}
                style={styles.logoApp}
    
            />
            <Text>Titulo de Juegos</Text>
            <Text>Valoracion</Text>
            <Text>Resultados totales: {inicio.count}</Text>
        </Container>
    );
    

};




//Estilos Pantalla Inicio
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",

    },
    input: {
        margin: 15,
    },
    marioimage: {
        width: width * 0.99,
        height: height * 0.5,
        /* marginRight: 50 */
        /* flex: 1, */
        /* resizeMode: "contain", */

    },
    searchInput: {
        flex: 1,
        flexDirection: "column",
        marginTop: 10,
        marginRight: 15,
    },
    logoApp: {
        width: width,
        height: height * 0.25,
        /* resizeMode: "contain" */

    }

});

export default Inicio;