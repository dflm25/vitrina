
import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Badge } from 'native-base';

export const ColorsProduct = (props) => {
  const { data, action = null } = props;

  const renderColor = (item) => {
    return (
      <TouchableOpacity onPress={() => action() }>
        <View 
          style={{
            backgroundColor: item.hexadecimal, 
            paddingHorizontal: action ? 30 : 15, 
            borderColor: '#e5e5e5', 
            borderWidth: 1,
            paddingVertical: action ? 30 : 10, 
          }}
        />
      </TouchableOpacity>
    )
  }

  return (
    <View style={{ flex : 1, flexDirection: 'row', flexWrap:'wrap', }}>
      {data.map(item=>renderColor(item))}
    </View>
  );
}