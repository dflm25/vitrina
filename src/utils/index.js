/**
 * Utilities information
 */

import React from 'react';
import { Image, View, Dimensions } from 'react-native';
import { ListItem, Text, Left, Body, Right } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Link } from "react-router-native";

import styles from './styles'

// get-productos-home
export const host = 'https://dev.vitrinavirtual.tk/api/'
export const pathImage = 'https://vitrinavirtualfecoomeva.com/';

export const renderItem = (image, index) => {
    const BannerWidth = Dimensions.get('window').width;
    const BannerHeight = 180;

    return (
        <View key={index}>
            <Image
                style={{ 
                    width: BannerWidth, 
                    height: BannerHeight, 
                    alignSelf: 'center' 
                }} 
                source={{ uri: image }} 
                resizeMode="stretch"
            />
        </View>
    );
}

export const renderMenuItems = (items) => {
    let returnValue = [];
    
    items.map(function (item, index) {
        returnValue.push(<ListItem icon>
            <Left>
                <Icon name={item.iconLeft} size={20} />
            </Left>
            <Body>
                <Text>{item.label}</Text>
            </Body>
            <Right>
                <Icon name={item.iconRight} size={16} />
            </Right>
        </ListItem>);
    });

    returnValue.push(<Link to={"/login"} style={styles.loginBtn} underlayColor="#f0f4f7">
        <Text style={{ color: '#fff', textAlign: 'center' }}>Entrar</Text>
    </Link>)

    returnValue.push(<Link to={"/register"} style={styles.registerBtn}
    underlayColor="#f0f4f7">
        <Text style={{ color: '#fff', textAlign: 'center' }}>Registrate</Text>
    </Link>)

    return returnValue;
}
