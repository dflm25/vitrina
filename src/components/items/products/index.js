/**
 * Item product component
 */
import React from 'react';
import { Text, TouchableOpacity, Image, View } from 'react-native';

// Utils
import { pathImage, formatMoney } from '../../../utils';

// styles
import styles from './styles';


function ItemProduct ({ item }) {
  const { titulo, imagen_principal, precio_regular } = item;
  return (
    <View style={styles.container}>
        <Image 
          source={{ uri: `${pathImage}${imagen_principal}` }} 
          style={{height: 250, width: null, flex: 1}} 
        />
        <View style={styles.footer}>
          <TouchableOpacity 
            onPress={() => navigation.navigate('Product', item)}
            style={styles.footerItem}  
          >
            <Text 
              style={styles.title}
              numberOfLines={1}
            >
                {titulo}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={() => navigation.navigate('Product', item)}
            style={styles.footerItem}
          >
            <Text style={styles.price}>
              {formatMoney(precio_regular)}
            </Text>
          </TouchableOpacity>
        </View>
    </View>
  )
}

export default ItemProduct;