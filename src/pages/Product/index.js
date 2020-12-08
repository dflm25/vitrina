/**
 * 
 */

import React, { useEffect, useState } from 'react';
import { View, Text, Image, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

// Components
import Layout from '../../components/Layout';
import {ColorsProduct} from '../../components/products';
import ModalAddProduct from '../../components/products/ModalAddProduct';

// Utils
import { pathImage, formatMoney } from '../../utils';

import styles from './styles'

const BannerWidth = Dimensions.get('window').width;
const BannerHeight = 350;

const Product = ({ route, navigation }) => {
  const [modal, setModal] = useState(false);
    const { 
      categoria, 
      imagen_principal,
      titulo,
      descripcion, 
      colors,
      precio_descuento, 
      precio_regular, 
      id,
      emprendedor
    } = route.params;

    useEffect(()=>{
      navigation.setOptions({ name: titulo });
    }, []);

    const renderDiscount = () => {
      return precio_descuento ?
        (<Text style={[ styles.precio ]}>${formatMoney(precio_descuento, 0)}</Text>) : null;
    }

    const subscribeFavorite = () => {
      console.log('send to favorite'); // id
    }

    const addToCard = () => {
      setModal(true);
    } 

    return (
    <Layout style={styles.container}>
      <ScrollView style={styles.animatedBox}>
        <Image
          style={{ 
              width: BannerWidth, 
              height: BannerHeight, 
              alignSelf: 'center'
          }} 
          source={{ uri: `${pathImage}${imagen_principal}` }} 
          resizeMode="cover"
        />
        <Text style={styles.title}>
          {titulo}
        </Text>
        <View style={styles.contentPrice}>
          <Text style={[ precio_descuento ? styles.tachado : styles.precio ]}>
            $ {formatMoney(precio_regular, 0)}
          </Text>
          {renderDiscount()}
          <TouchableOpacity style={styles.favoriteBtn} onPress={subscribeFavorite}>
            <Icon style={styles.iconFavorite} active name='heart' />
          </TouchableOpacity>
        </View>
        <View style={styles.divider} />
          <Text style={styles.description}>
            {descripcion.replace(/<\/?[^>]+(>|$)/g, "")}
          </Text>
        <View style={styles.divider} />
        <View style={styles.contentShield}>
          <Icon style={styles.iconShield} active name='shield' /> 
          <Text style={styles.labelShield}>Metodos de pago seguros</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.contentShield}>
          <Text style={styles.labelShield}>Colores disponibles</Text>
        </View>
        <View style={styles.contentShield}>
          <ColorsProduct data={colors} />
        </View>
        <View style={styles.divider} />
        <View style={styles.contentEmprendedor}>
          <Text style={styles.labelShield}>Acerca de nuestro emprendedor</Text>
          <View style={styles.contentShield}>
            {/*<Image
              style={{ 
                  width: 120, 
                  height: 120, 
                  alignSelf: 'center'
              }}
              source={{ uri: `${pathImage}${emprendedor.logo}` }} 
              resizeMode="contain"
            />
            <View style={styles.contentEmprendedorDescription}>
              <Text style={styles.titleEmprendedor}>{emprendedor.razon_social}</Text>
              <Text>{emprendedor.descripcion}</Text>
            </View>
            */}
          </View>
        </View>
        <View style={styles.contentButtons}>
          <TouchableOpacity style={styles.addBtn} onPress={addToCard}>
            <Icon style={styles.iconAction} active name='shopping-cart' />
            <Text style={styles.textBtn}>Agregar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buyBtn}>
            <Icon style={styles.iconAction} active name='shopping-basket' />
            <Text style={styles.textBtn}>Comprar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <ModalAddProduct 
        state={modal} 
        action={setModal} 
        data={{ imagen_principal, titulo, colors }}
      />
    </Layout>
    );
}

export default Product;
