import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, Dimensions, FlatList } from "react-native";
import { Input, Container, Form, Item, H1, Button, Header, Icon, Spinner, Card, CardItem, Body, Content } from "native-base";
import backend from "../api/backend";
import getEnvVars from "../../environment";
/* import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes"; */

const { apikey, apiImageUrl, apiImageSize } = getEnvVars();

const { width, height } = Dimensions.get("window");

const Inicio = () => {
    const [inicio, setInicio] = useState(null);
    const [error, setError] = useState(false);
    const [search, setSearch] = useState("");

    const getInicio = async () => {
        try {

            const response = await backend.get(`games?api-key=${apikey}&page=1`);

            setInicio(response.data);
            /* console.log(response.data); */

        } catch (error) {
            //error al ejecutar la peticion a API
            setError(true);

        }
    }
    useEffect(() => {
        getInicio();

    }, []);

    if (!inicio) {
        return (
            <View style={{ flex: 1, justifyContent: "center", backgroundColor: "#000000" }}>
                <Spinner color="blue" />
            </View>
        )
    }
    return (

        <Container>
            <Content style={{backgroundColor: "#000000"}}>
                
            <Header searchBar style={{backgroundColor: "#333333"}}>
                <Item style={{ flex: 3}}>
                    <Input placeholder="Buscar" />
                </Item>
                <Button icon>
                    <Icon name="search" />
                </Button>
            </Header>
            <Image
                source={require("../../assets/logo.png")}
                style={styles.logoApp}

            />

            <H1 style={{ marginTop: 20, color: "wheat"}}>VideoJuegos</H1>
            <FlatList
                data={inicio.count}
                keyExtractor={(item) => item.id.toString()}
                ListEmptyComponent={<Text style={{color: "wheat"}}>¡Error504! No hay Juegos</Text>}
                renderItem={({ item }) => {
                    return (
                        <View>
                            <Card>
                                <CardItem cardBody>
                                <Image 
                                source={{ 
                                    uri:`${apiImageUrl}${apiImageSize}${item.background_image}`,}} style={styles.gamesimage} />
                                    <CardItem>
                                    <Body style={{ flex: 1, flexDirection: "row"}}>
                                        {/* {console.log(`${apiImageUrl}${apiImageSize}${item.background_image}`)} */}
                                       
                                        <H3>{item.name}</H3>
                                        <Text>{item.rating}</Text>
                                    </Body>
                                </CardItem>
                            </CardItem>
                            </Card>
                        </View>
                    )

                }}
            />

            </Content>
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
    gamesimage: {
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
        marginTop: 0,
        width: width,
        height: height * 0.25,
        /* resizeMode: "contain" */

    }

});

export default Inicio;