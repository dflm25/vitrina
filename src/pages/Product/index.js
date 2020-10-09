/**
 * 
 */

import React from 'react';
import { View, Text, Image, Dimensions, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


// Components
import Layout from '../../components/Layout';

// Utils
import { pathImage } from '../../utils';

import styles from './styles'

const BannerWidth = Dimensions.get('window').width;
const BannerHeight = 220;

const Product = ({ route, navigation }) => {
    const { categoria, imagen_principal, titulo, descripcion } = route.params;
    
    return (
    <Layout style={styles.container}>
      <View style={styles.animatedBox}>
        <Image
          style={{ 
              width: BannerWidth, 
              height: BannerHeight, 
              alignSelf: 'center' 
          }} 
          source={{ uri: `${pathImage}${imagen_principal}` }} 
          resizeMode="stretch"
        />
        <Text style={styles.title}>{titulo}</Text>
        <View style={styles.divider} />
        <Text style={styles.description}>{descripcion}</Text>
        <View style={styles.divider} />
        <View style={styles.contentShield}>
          <Icon style={styles.iconShield} active name='shield' /> 
          <Text style={styles.labelShield}>Metodos de pago seguros</Text>
        </View>
        <View style={styles.contentButtons}>
          <TouchableOpacity style={styles.addBtn}>
            <Text style={styles.textBtn}>Agregar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buyBtn}>
            <Text style={styles.textBtn}>Comprar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Layout>
    );
}

export default Product;