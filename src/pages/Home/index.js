/**
 * Home screen
 */

import React, { useEffect } from 'react';
import { StyleSheet, View, FlatList,TouchableOpacity, Image } from 'react-native';
import { H2,Card, CardItem, Text } from 'native-base';

import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from '@react-navigation/native';

import SliderCategory from '../../components/SliderCategory';
import HeaderApp from '../../components/HeaderApp';
import Layout from '../../components/Layout';

import { renderItem, pathImage } from '../../utils';
import { fetchProducts, fetchCategorias } from '../../services/home';

const  Home = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const { data }  = useSelector(store => store.homeReducer);
    const categorias = useSelector(store => store.categoryReducer);

    useEffect(() => {
        dispatch(fetchProducts());
        dispatch(fetchCategorias());
    }, []);

    const ItemProducto = ({ item }) => {
        const { titulo, imagen_principal } = item;
        return (
            <Card>
                <CardItem header bordered>
                  <TouchableOpacity onPress={() => navigation.navigate('Product', item)}>
                    <Text>{titulo}</Text>
                  </TouchableOpacity>
                </CardItem>
                <CardItem bordered>
                    <Image 
                        source={{ uri: `${pathImage}${imagen_principal}` }} 
                        style={{height: 200, width: null, flex: 1}} 
                    />
                </CardItem>
                <CardItem footer bordered>
                  <TouchableOpacity onPress={() => navigation.navigate('Product', item)}>
                    <Text>Ver producto</Text>
                  </TouchableOpacity>
                </CardItem>
            </Card>
        )
    }

    return (<Layout>
        <HeaderApp />
        <View style={styles.cardTitle}>
            <View style={styles.categoryContainer}>
                <SliderCategory data={categorias} />
            </View>
            <H2>Productos vitrina</H2>
            {
                <FlatList
                    data={data.data}
                    renderItem={ItemProducto}
                    keyExtractor={(item) => parseInt(item.id)}
                    // extraData={navigation}
                />
            }
        </View>
    </Layout>);
}

const styles = StyleSheet.create({
    logo: {
        width: 40, 
        height: 40
    },
    icon: {
        color: "#fff",
        marginRight: 10
    },
    name: {
        color: "#fff"
    },
    cardTitle: {
        padding: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
    },
    categoryContainer: {
        marginBottom: 10,
    }
});

export default Home;