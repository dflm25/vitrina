
import React from 'react'
import { useDispatch } from "react-redux";
import { StyleSheet, View } from 'react-native'
import { toggleMenu } from '../redux/actions';
import { renderMenuItems } from '../utils';
import { items } from '../data/menuItems.json';

const drawerContent = () => {
    const dispatch = useDispatch();
    
    return (
      <View style={styles.animatedBox}>
        {renderMenuItems(items)}
      </View>
    );
}

const styles = StyleSheet.create({
    animatedBox: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 10,
    },
})

export default drawerContent;