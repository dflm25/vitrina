/**
 * 
 */
import React, { useEffect, useState } from 'react';
import { FlatList, View, Text, ActivityIndicator } from 'react-native';

// Components
import ItemProduct from '../../components/items/products';

// Services
import { fetchProducts } from '../../services/home';
import styles from './styles';

const getProducts = async (setProducts, setIsLoading) => {
  const response = await fetchProducts();
  setProducts(response.data);
  setIsLoading(false);
}

function ProductsList () {
  const [page, setPage] = useState(0);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getProducts(setProducts, setIsLoading);
  }, [page]);

  const renderFooter = () => {
    if (!isLoading) {
      return null;
    }

    return (
      <View style={styles.contentIndicator}>
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
    );
  }

  const loadMore = () => {
    setIsLoading(true);
    setPage(page + 1);
  }

  return (
    <View>
        <Text style={styles.title}>Productos vitrina</Text>
        <FlatList
          data={products}
          renderItem={ItemProduct}
          keyExtractor={(item) => item.id.toString()}
          ListFooterComponent={renderFooter}
          onEndReached={loadMore}
          onEndReachedThreshold={0.5}
        /> 
    </View>
  );
}

export default ProductsList;