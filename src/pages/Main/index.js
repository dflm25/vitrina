/**
 * Home screen
 */
import React from 'react';
import { View } from 'react-native';

// Components
import SliderCategory from '../../containers/SliderCategory';
import ProductsList from '../../containers/ProductsList';
import HeaderApp from '../../components/HeaderApp';
import Layout from '../../components/Layout';

// Styles
import styles from './styles';

function Main() {
    return (
        <Layout>
            <HeaderApp />
            <View style={styles.cardTitle}>
                <View style={styles.categoryContainer}>
                    <SliderCategory />
                </View>
                <ProductsList />
            </View>
        </Layout>
    );
}

export default Main;