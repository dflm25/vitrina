/**
 * Side bar component
 */

import React, { useEffect, useState } from 'react'
import {useSelector, useDispatch} from 'react-redux';
import { View, KeyboardAvoidingView} from 'react-native';
import { Footer, FooterTab, Button, Text, Content } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Spinner from 'react-native-loading-spinner-overlay';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setSpinner } from '../../redux/actions';
import { fetchProducts } from '../../services/home';

import Toast from '../Toast';
import styles from './styles';

const Layout = (props) => {
  const [userInfo, setUserInfo] = useState();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const spinner = useSelector(store => store.spinnerReducer);

  useEffect(() => {
    const getUserInfo = async () => {
      const jsonValue = await AsyncStorage.getItem('userInfo');
      setUserInfo(jsonValue != null ? JSON.parse(jsonValue) : null);
    }
    
    getUserInfo();
  }, []);

  const handleProduct = (tienda) => {
    dispatch(setSpinner(true));
    dispatch(fetchProducts({ tienda }));
  }

  return <KeyboardAvoidingView style={styles.container}>
      <Content style={props.style}>
        <Toast />
        <Spinner
          visible={spinner}
          textStyle={styles.spinnerTextStyle}
        />
        <View style={{ zIndex: 1 }}>
          {props.children}
        </View>
      </Content>
      <Footer>
        <FooterTab>
          <Button style={styles.btnVitrina} onPress={ () => handleProduct (1) }>
            <Icon style={styles.icon} active name='shopping-basket' />
            <Text style={styles.textIcon}>Vitrina</Text>
          </Button>
          <Button style={styles.btnPulguero} onPress={ () => handleProduct (2) }>
            <Icon style={styles.icon} active name='tag' />
            <Text style={styles.textIcon}>Pulguero</Text>
          </Button>
          <Button style={styles.btnCambalache} onPress={ () => handleProduct (3) }>
            <Icon style={styles.icon} active name='exchange' />
            <Text style={styles.textIcon}>Cambalache</Text>
          </Button>
          <Button 
            style={styles.btnUser}
            onPress={() => navigation.navigate(!userInfo ? 'Login' : 'Dashboard', {
              userInfo
            })}
          >
            <Icon style={styles.icon} active name='user' />
            <Text style={styles.textIcon}>Mi cuenta</Text>
          </Button>
        </FooterTab>
      </Footer>
    </KeyboardAvoidingView>
}

export default Layout;