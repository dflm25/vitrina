/**
 * Utilities information
 */

import React from 'react';
import { Image, View, Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// get-productos-home
export const host = 'https://vitrinavirtualfecoomeva.com/api/'
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

export const formatMoney = (amount, decimalCount = 2, decimal = ".", thousands = ",") => {
    try {
        decimalCount = Math.abs(decimalCount);
        decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

        const negativeSign = amount < 0 ? "-" : "";

        let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
        let j = (i.length > 3) ? i.length % 3 : 0;

        return negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : "");
    } catch (e) {
        console.log(e)
    }
};

export const setAuthData = async (data) => {
    try {
        const jsonValue = JSON.stringify(data)
        await AsyncStorage.setItem('userInfo', jsonValue);
    } catch (e) {
        // saving error
    }
}

export const setToken = async (data) => {
    try {
        const jsonValue = JSON.stringify(data)
        await AsyncStorage.setItem('token', jsonValue);
    } catch (e) {
        // saving error
    }
}

export const getToken = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('token');
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
      // error reading value
    }
}

export const getColorToast = type => {

    switch (type) {
        case 'error':
            return '#FDD7E4';
            break;
        case 'warning':
            return '#fff3cd';
            break;
        default:
            return '#FDD7E4';
            break;
    }

}