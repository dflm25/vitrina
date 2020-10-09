/**
 * Login screen
 */
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Button, Item, Input } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import Logo from '../../assets/img/logo.jpg';

import styles from './styles';

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

export default Login;