/**
 * Header Home
 */

import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { View, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Header, Left, Body, Right, Button, Item, Input } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import { toggleMenu } from '../redux/actions'

const HeaderApp = (props) => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    let status = useSelector(store => store.menuReducer);
    
    return (
        <>
            <View>
                <Header 
                    style={{ backgroundColor: '#8CC23F' }}
                    androidStatusBarColor="#8CC23F"
                >
                <Left>
                    <Button transparent onPress={ () => dispatch(toggleMenu()) }>
                        <Icon name={status ? 'close' : 'bars' } style={styles.iconMenu} size={28} />
                    </Button>
                </Left>
                <Body>
                <Item style={styles.input}>
                    <Input placeholder='Buscar en vitrina virtual' />
                    <Icon active name='search' />
                </Item>                    
                </Body>
                <Right>
                    <Button transparent onPress={()=> navigation.navigate('Cart')}>
                        <Icon name='shopping-cart' style={styles.iconMenu} size={30} />
                    </Button>
                </Right>
                </Header>
                <View style={styles.userbar}>
                    <Icon name="user" size={20} style={styles.icon} />
                    <Text style={styles.name}>Daniel Felipe Lucumi</Text>
                </View>
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
        height: 35,
        padding: 5,
        width: 260
    }
});

export default HeaderApp;