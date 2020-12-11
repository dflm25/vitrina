/**
 * styles slides categories
 */
import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  item: {
    justifyContent: 'center',
    borderRadius: 14,
    width: 100,
    height: 80,
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
    marginVertical: 15,
    paddingVertical: 5,
  },
  iconContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 42
  },
  icon: {
    color: '#F15A24',
    fontSize: 26,
  },
  textItem: {
    color: '#F15A24',
    textAlign: 'center',
    fontSize: 12,
  }
})

export default styles;