/**
 * Side bar component
 */

import React from 'react'
import {useSelector} from 'react-redux';
import {StyleSheet, View, KeyboardAvoidingView} from 'react-native';
import { Footer, FooterTab, Button, Text, Content } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Layout = (props) => {
  const navigation = useNavigation();
  const status = useSelector(store => store.menuReducer);

  return <KeyboardAvoidingView style={styles.container}>
      <Content style={props.style}>
        <View style={{ zIndex: 1 }}>
          {props.children}
        </View>
      </Content>
      <Footer>
        <FooterTab>
          <Button style={styles.btnVitrina}>
            <Icon style={styles.icon} active name='shopping-basket' />
            <Text style={styles.textIcon}>Vitrina</Text>
          </Button>
          <Button style={styles.btnPulguero}>
            <Icon style={styles.icon} active name='tag' />
            <Text style={styles.textIcon}>Pulguero</Text>
          </Button>
          <Button style={styles.btnCambalache}>
            <Icon style={styles.icon} active name='exchange' />
            <Text style={styles.textIcon}>Cambalache</Text>
          </Button>
          <Button style={styles.btnUser} onPress={() => navigation.navigate('Login')}>
            <Icon style={styles.icon} active name='user' />
            <Text style={styles.textIcon}>Mi cuenta</Text>
          </Button>
        </FooterTab>
      </Footer>
    </KeyboardAvoidingView>
}

const styles = StyleSheet.create({
    container: {
        // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        flex: 1,
        zIndex: 0
    },
    icon: {
      color: '#fff',
      fontSize: 20,
    },
    textIcon: {
      fontSize: 10,
      fontWeight: 'bold',
      color: '#fff'
    },
    btnVitrina: {
      backgroundColor: '#8CC32D'
    },
    btnPulguero: {
      backgroundColor: '#F15A24'
    },
    btnCambalache: {
      backgroundColor: '#662D91'
    },
    btnVitrina: {
      backgroundColor: '#8CC32D'
    }
})

export default Layout;