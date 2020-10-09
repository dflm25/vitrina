/**
 * Login screen
 */
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Container, Header, Button, Item, Input } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import Logo from '../assets/img/logo.jpg';

const  Login = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <Image 
            source={Logo}
            style={styles.logo}
        />
        <Item style={styles.inputContent}>
            <Icon style={styles.icon} active name='envelope-open' />
            <Input placeholder='Email'/>
        </Item>
        <Item style={styles.inputContent}>
            <Icon style={styles.icon} active name='lock' />
            <Input placeholder='Password'/>
        </Item>
        <Button block success style={styles.btnLogin}>
          <Text style={styles.btnTextLogin}>Entrar</Text>
        </Button>
        <TouchableOpacity onPress={()=> navigation.navigate('Register')}>
          <Text>Olvidaste tu contraseña?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate('Register')}>
          <Text style={styles.textCreateAccount}>Crear una cuenta</Text>
        </TouchableOpacity>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      padding: 10,
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center'
    },
    inputContent: {
      marginBottom: 10
    },
    stretch: {
      width: 50,
      height: 200,
      resizeMode: 'stretch',
    },
    icon: {
      fontSize: 20,
      marginRight: 10
    },
    logo: {
        width: 250, 
        height: 80,
        marginBottom: 30
    },
    btnLogin: {
      marginBottom: 25,
      marginTop: 32,
      height: 52
    },
    btnTextLogin: {
      color: '#fff',
      fontSize: 20
    },
    textCreateAccount: {
      fontSize: 16,
      marginTop: 30
    }
});

export default Login;