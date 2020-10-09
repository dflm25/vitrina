/**
 * Login screen
 */
import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { Button, Item, Input } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import Logo from '../../assets/img/logo.jpg';

import styles from './styles';

const  Register = () => {
    return (
      <ScrollView style={styles.container}>
        <Item style={styles.contentImage}>
          <Image 
              source={Logo}
              style={styles.logo}
          />
        </Item>
        <Item style={styles.inputContent}>
            <Icon style={styles.icon} active name='id-card' />
            <Input placeholder='Cedula'/>
        </Item>
        <Item style={styles.inputContent}>
            <Icon style={styles.icon} active name='user' />
            <Input placeholder='Nombre'/>
        </Item>
        <Item style={styles.inputContent}>
            <Icon style={styles.icon} active name='user' />
            <Input placeholder='Apellido'/>
        </Item>
        <Item style={styles.inputContent}>
            <Icon style={styles.icon} active name='envelope' />
            <Input placeholder='Email'/>
        </Item>
        <Item style={styles.inputContent}>
            <Icon style={styles.icon} active name='mobile' />
            <Input placeholder='Telefono'/>
        </Item>
        <Item style={styles.inputContent}>
            <Icon style={styles.icon} active name='lock' />
            <Input placeholder='Password'/>
        </Item>
        <Button block success style={styles.btnLogin}>
          <Text style={styles.btnTextLogin}>Registrarme</Text>
        </Button>
      </ScrollView>
    );
}

export default Register;