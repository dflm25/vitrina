/**
 * 
 */
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    textAlign: 'left',
    fontWeight: 'bold',
  },
  container: {
    justifyContent: 'space-between',
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#e5e5e5',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginHorizontal: 5,
    marginVertical: 5,
    paddingVertical: 5,
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    height: 48,
    borderTopWidth: 1,
  },
  footerItem: {
    width: '50%',
  },
  price: {
    textAlign: 'right',
    color: '#F15A24',
    fontWeight: 'bold',
  }
});

export default styles;
