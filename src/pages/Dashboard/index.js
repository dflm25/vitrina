/**
 * Login screen
 */
import React from 'react';
import { Text, Image, ScrollView, View } from 'react-native';
import { Item, Button } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Logo from '../../assets/img/img-dashboard.png';

import styles from './styles';

const  Dashboard = ({ route, navigation }) => {
    const { userInfo} = route.params;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Hola, {userInfo.nombre}
        </Text>
        <Image
            resizeMode="cover"
            source={Logo}
            style={styles.logo}
        />
        <Text style={styles.introText}>
          En esta sección puedes añadir y gestionar tus productos, ingresa a "Nuevo producto" 
          para crear una publicación nueva en nuestra Vitrina Virtual.
        </Text>
        <Text style={styles.introText}>
          Si ya tienes publicaciones y deseas realizar alguna modificación a una de ellas ingresa a 
          "Productos" para ver mas opciones.
        </Text>
        <Button block success 
          style={styles.btnProductos}
        >
          <Icon style={styles.icon} name='store' />
          <Text style={styles.btnTextLogin}>
            Añadir y gestionar productos
          </Text>
        </Button>
        <Button block warning 
          style={styles.btnResumen}
        >
          <Icon style={styles.icon} name='chart-bar' />
          <Text style={styles.btnTextLogin}>
            Resumen de ventas
          </Text>
        </Button>
      </View>
    );
}

export default Dashboard;