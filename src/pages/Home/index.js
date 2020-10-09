/**
 * Home screen
 */

import React, { useEffect } from 'react';
import Carousel from 'react-native-banner-carousel';
import { StyleSheet, Dimensions, View, FlatList,TouchableOpacity, Image } from 'react-native';
import { H2,Card, CardItem, Text } from 'native-base';

import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from '@react-navigation/native';

import HeaderApp from '../../components/HeaderApp';
import Layout from '../../components/Layout';

import { renderItem, pathImage } from '../../utils'
import { fetchProducts } from '../../services/home'

const BannerWidth = Dimensions.get('window').width;
const images = [
    "https://vitrinavirtualfecoomeva.com/storage/sliders/a-banner-vitrina-2020.jpg",
    "https://vitrinavirtualfecoomeva.com/storage/sliders/banner-2.jpg",
    "https://vitrinavirtualfecoomeva.com/storage/sliders/banner-3.jpg"
];

const  Home = ({props}) => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const { loading, data }  = useSelector(store => store.homeReducer)

    useEffect(() => {
        dispatch(fetchProducts());
    }, []);

    const ItemProducto = ({ item }) => {
        const { titulo, imagen_principal } = item;
        return (
            <Card>
                <CardItem header bordered>
                    <Text>{titulo}</Text>
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
        <Carousel
            autoplay
            autoplayTimeout={5000}
            loop
            index={0}
            pageSize={BannerWidth}
        >
            {images.map((image, index) => renderItem(image, index))}
        </Carousel>
        <View style={styles.cardTitle}>
            <H2>Productos vitrina</H2>
            {
                <FlatList
                    data={data.data}
                    renderItem={ItemProducto}
                    keyExtractor={(item, index) => item.id}
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
    }
});

export default Home;