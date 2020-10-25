
import React from 'react'
import { StyleSheet, View, Text } from 'react-native';
import { Badge } from 'native-base';

export const ColorsProduct = (props) => {
  const { data } = props;

  const renderColor = (item) => {
    return (
    <View 
      style={{
        backgroundColor: item.hexadecimal, 
        paddingHorizontal: 15, 
        borderColor: '#e5e5e5', 
        borderWidth: 1,
        paddingVertical: 10
      }}
    />)
  }

  return (
    <View style={{ flex : 1, flexDirection: 'row', flexWrap:'wrap', }}>
      {data.map(item=>renderColor(item))}
    </View>
  );
}