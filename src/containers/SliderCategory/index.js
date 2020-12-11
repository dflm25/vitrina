/**
 * Slider categories component
 */
import React, { useEffect, useState } from 'react';
import { View, FlatList, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

// Services
import { fetchCategorias } from '../../services/home';

// Styles
import styles from './styles';

const getCategories = async (setCategories) => {
  const response = await fetchCategorias();
  setCategories(response);
}

const SliderCategory = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories(setCategories);
  }, []);

  const itemCategory = () => {
    return categories.map(item=> (
      <View style={styles.item} key={`item-category${item.id}`}>
        <View style={styles.iconContainer}>
          <Icon 
            style={styles.icon} 
            name={item.icono_mobile ? item.icono_mobile : 'image'} 
          />
        </View>
        <Text style={styles.textItem} numberOfLines={1}>
          {item.categoria}
        </Text>
      </View>)
    )
  }

  return (
    <FlatList
      data={categories}
      style={styles.container}
      horizontal={true}
      showsHorizontalScrollIndicator={true}
      renderItem={itemCategory}
      keyExtractor={(item) => item.id.toString()}
    />
  );
}

export default SliderCategory;