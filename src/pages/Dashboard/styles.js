/**
 * 
 */
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    flexDirection: 'column',
    padding: 10,
    justifyContent: 'center'
  },
  logo: {
    width: 400,
    height: 260
  },
  btnProductos: {
    marginTop: 5,
    height: 52
  },
  btnResumen: {
    marginTop: 5,
    height: 52
  },
  btnTextLogin: {
    color: '#fff',
    fontSize: 20
  },
  icon: {
    fontSize: 20,
    marginRight: 10,
    color: '#fff'
  },
  introText: {
    fontSize: 14,
    paddingVertical: 6,
    paddingHorizontal: 20,
    textAlign: 'justify'
  },
  title: {
    fontSize: 20,
    textAlign: 'left'
  }
});

export default styles;