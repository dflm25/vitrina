
import React, { useState } from 'react'
import { StyleSheet, View, Text, Modal, Alert, TouchableHighlight, Dimensions, ImageBackground } from 'react-native';
import {ColorsProduct} from '../products';
import { pathImage } from '../../utils';
import { fetchTallasByColor } from '../../services/products';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const ModalAddProduct = (props) => {
  const { state, action, data } = props;
  const [color, setColor] = useState();

  // Handle change color
  const handleOnSelect = (color) => {
    
  }

  return (
    <Modal
        animationType="slide"
        transparent={false}
        visible={state}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <ImageBackground
              source={{ uri: `${pathImage}${data.imagen_principal}` }}
              style={{width: '100%', height: '70%'}}
            > 
              <Text style={styles.title}>{data.titulo}</Text>
            </ImageBackground>
            <ColorsProduct 
              data={data.colors} 
              action={handleOnSelect}
            />
            <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                onPress={() => {
                  action(!state);
                }}
              >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </TouchableHighlight>
          </View>
        </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: "center",
    backgroundColor: 'rgba(0,0,0,0.3)'
  },
  modalView: {
    width: width - 20,
    backgroundColor: "white",
    padding: 0,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    height: height - 100,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  title: {
    fontSize: 28,
    padding: 20,
    fontWeight: 'bold',
    textAlign: 'right',
    color: '#fff',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  }
});


export default ModalAddProduct;