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

import { pathImage } from '../../utils';
import { fetchProducts, fetchCategorias } from '../../services/home';

import styles from './styles';

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
            {
                (data.data && data.data.length > 0) ? <View>
                    <H2>Productos vitrina</H2>
                    <FlatList
                        data={data.data}
                        renderItem={ItemProducto}
                        keyExtractor={(item) => parseInt(item.id)}
                    /> 
                </View> : <View style={styles.contenNoFound}>
                    <Text style={styles.textNoFound}>No se encontraron productos</Text>
                </View>
            }
        </View>
    </Layout>);
}

export default Home;