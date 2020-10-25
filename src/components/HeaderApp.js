/**
 * Header Home
 */

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { View, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Header, Body, Right, Button, Item, Input } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HeaderApp = (props) => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const [userInfo, setUserInfo] = useState();

    useEffect(() => {
        const getUserInfo = async () => {
          const jsonValue = await AsyncStorage.getItem('userInfo');
          setUserInfo(jsonValue != null ? JSON.parse(jsonValue) : null);
        }
    
        getUserInfo();
    }, []);
    
    return (
        <>
            <View>
                <Header 
                    style={{ backgroundColor: '#8CC23F' }}
                    androidStatusBarColor="#8CC23F"
                >
                <Body>
                <Item style={styles.input}>
                    <Input placeholder='Buscar en vitrina virtual' />
                    <Icon active name='search' />
                </Item>                    
                </Body>
                <Right>
                    <Button transparent onPress={()=> navigation.navigate('Cart')}>
                        <Icon name='shopping-cart' style={styles.iconMenu} size={34} />
                    </Button>
                </Right>
                </Header>
                {userInfo && <View style={styles.userbar}>
                    <Icon name="user" size={20} style={styles.icon} />
                    <Text style={styles.name}>{userInfo.nombre} {userInfo.appellido}</Text>
                </View>}
            </View> 
        </>
    );
}

const styles = StyleSheet.create({
    iconMenu: {
        color: "#fff"
    }, 
    userbar: {
        flexDirection: 'row',
        padding: 10,
        backgroundColor: "#8CC23F", 
    },
    icon: {
        color: "#fff",
        marginRight: 10,
        marginLeft: 10
    },
    name: {
        color: "#fff"
    },
    input: {
        backgroundColor: "#fff",        
        height: 40,
        padding: 5,
        width: 310,
        borderRadius: 5
    }
});

export default HeaderApp;