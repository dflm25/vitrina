/**
 * 
 */
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
  },
  title: {
    paddingVertical: 10,
    fontSize: 24,
  },
  description: {
    fontSize: 16,
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
    fontSize: 16
  },
  contentButtons: {
    flex: 1,
    flexDirection: 'row'
  },
  addBtn: {
    backgroundColor: '#e5e5e5',
    paddingVertical: 10,
    width: '50%',
    textAlign: 'center'
  },
  buyBtn: {
    backgroundColor: '#D11402',
    paddingVertical: 10,
    width: '50%',
    textAlign: 'center',
  },
  textBtn: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold'
  }
});

export default styles;