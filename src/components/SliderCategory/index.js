
import React from 'react'
import { View, ScrollView, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import styles from './styles';

const SliderCategory = ({ data }) => {
  if (!data) 
    return null;

  return (
    <ScrollView
      style={styles.container}
      horizontal={true}
      showsHorizontalScrollIndicator={true}
    >
      {
        data.map(item=>(<View style={styles.item} key={`item-category${item.id}`}>
          <View style={styles.iconContainer}>
            <Icon style={styles.icon} name={item.icono_mobile} />
          </View>
          <Text style={styles.textItem}>
            {item.categoria}
          </Text>
        </View>))
      }
    </ScrollView>
  );
}

export default SliderCategory;