/**
 * Login screen
 */
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { Button, Item, Input } from 'native-base';
import Toast from '../../components/Toast';

// services
import { login } from '../../services/auth';
import { setSpinner } from '../../redux/actions';

// Styles
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import Logo from '../../assets/img/logo.jpg';

const  Login = ({ navigation }) => {
  const dispatch = useDispatch();
  const toastState  = useSelector(store => store.toastReducer);
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  
  // Handle submit form
  const handleLogin = async () => {
    dispatch(setSpinner(true));
    await dispatch(login({ usuario, password }));
  }

  return (
    <View style={styles.container}>
      <Toast state={toastState} />
      <Image 
        source={Logo}
        style={styles.logo}
      />
      <Item style={styles.inputContent}>
        <Icon style={styles.icon} active name='envelope-open' />
        <Input 
          placeholder='Usuario' 
          onChangeText={(text)=> setUsuario(text)}
          value={usuario}
        />
      </Item>
      <Item style={styles.inputContent}>
        <Icon style={styles.icon} active name='lock' />
        <Input 
          placeholder='Password' 
          onChangeText={(text)=> setPassword(text)}
          value={password}
        />
      </Item>
      <Button block success 
        style={styles.btnLogin}
        onPress={handleLogin}
      >
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