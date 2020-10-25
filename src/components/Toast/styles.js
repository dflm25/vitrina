/**
 * 
 */

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  fadingContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    position: 'absolute',
    zIndex: 99,
    flex: 1,
    left: 5,
    right: 5,
    top: 10,
    alignSelf: 'stretch',
    borderRadius: 5
  },
  fadingText: {
    textAlign: 'center',
    paddingVertical: 10,
    fontSize: 16
  }
})

export default styles;