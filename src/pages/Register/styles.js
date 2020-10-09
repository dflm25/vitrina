/**
 * 
 */
import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
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
  },
  contentImage: {
    flex: 1,
    justifyContent: 'center',
  }
});

export default styles;