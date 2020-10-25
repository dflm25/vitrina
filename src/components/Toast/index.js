
/**
 * 
 */
import React, { useEffect, useRef, useState } from 'react';
import { View, Text } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { setToastError } from '../../redux/actions';
import { getColorToast } from '../../utils';
 
// Styles
import styles from './styles';

const Toast = ({ state }) => {
  const dispatch = useDispatch();

  if (!state)
    return null;

  useEffect(()=>{
    const timer = setTimeout(() => {
      // setTimeout(()=> dispatch(setToastError(null)), 4000)
    }, 1000);
    return () => clearTimeout(timer);
  },[]);

  return (
    state ?
      <View
      style={[styles.fadingContainer, {
          backgroundColor: getColorToast(state.type)
        }
      ]}
    >
      <Text style={styles.fadingText}>{state.msg}</Text>
    </View> : null
  ); 
}

export default Toast;