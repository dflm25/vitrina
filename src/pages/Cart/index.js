/**
 * 
 */

import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'native-base';

import Layout from '../../components/Layout';
import styles from './styles'

const Cart = () => {
    
    return (
    <Layout style={styles.container}>
      <View style={styles.animatedBox}>
        <Text>Cart page</Text>
      </View>
      <Button block success style={styles.btnLogin}>
          <Text style={styles.btnTextLogin}>Registrarme</Text>
      </Button>
    </Layout>
    );
}

export default Cart;