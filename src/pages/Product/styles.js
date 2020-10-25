/**
 * 
 */
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    backgroundColor: '#fff'
  },
  title: {
    paddingVertical: 10,
    fontSize: 22,
  },
  description: {
    fontSize: 16,
    textAlign: 'justify',
    paddingVertical: 20
  },
  divider: {
    borderBottomColor: '#8CC23F',
    borderBottomWidth: 1,
  },
  contentShield: {
    paddingVertical: 8,
    flex: 1,
    flexDirection: 'row'
  },
  iconShield: {
    color: '#8CC23F',
    fontSize: 24,
    marginRight: 10
  },
  labelShield: {
    color: '#8CC23F',
    fontSize: 16,
    marginBottom: 5
  },
  contentButtons: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 20
  },
  addBtn: {
    backgroundColor: '#FF8C0A',
    paddingVertical: 10,
    width: '48%',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buyBtn: {
    backgroundColor: '#7BB543',
    paddingVertical: 10,
    width: '48%',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textBtn: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold'
  },
  animatedBox: {
    paddingBottom: 40
  },
  contentPrice: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  tachado: {
    textDecorationLine: 'line-through', 
    textDecorationStyle: 'solid',
    color: '#7BB543',
    fontWeight: 'bold',
    fontSize: 20
  },
  precio: {
    color: '#7BB543',
    fontWeight: 'bold',
    fontSize: 24
  },
  iconFavorite: {
    fontSize: 24,
    color: '#000'
  },
  iconAction: {
    fontSize: 16,
    color: '#fff',
    marginRight: 10
  },
  contentEmprendedor: {
    paddingVertical: 20
  },
  titleEmprendedor: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10
  },
  contentEmprendedorDescription: {
    marginLeft: 10
  }
});

export default styles;