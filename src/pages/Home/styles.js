 /**
 * 
 */
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  logo: {
      width: 40, 
      height: 40
  },
  icon: {
      color: "#fff",
      marginRight: 10
  },
  name: {
      color: "#fff"
  },
  cardTitle: {
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
  },
  categoryContainer: {
    marginBottom: 10,
  },
  contenNoFound: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 80
  },
  textNoFound: {
    textAlign: 'center',
    fontSize: 20
  }
});

export default styles;