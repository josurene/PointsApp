import React, { useEffect, useMemo, useState } from 'react';
import { ActivityIndicator, FlatList, Pressable, Text, View } from 'react-native';
import { useDBService } from '@Infrastructure/Provider/DBProvider';
import { useDispatch, useSelector } from 'react-redux';
import ProductsSlice from '@StateRedux/Slice/ProductsSlice';
import { RootState } from '@StateRedux/Store/store';
import MainScreenStyle from '@Presentation/Screens/MainScreen/MainScreenStyle';
import Product from '@Domain/Entities/Product';
import PointsComponent from '@Presentation/Components/PointsComponent/PointsComponent';
import ProductListComponent from '@Presentation/Components/ProductListComponent/ProductListComponent';
import { FilterState } from '@Constants/Enums';

const MainScreen: React.FC = () => {
  const databaseService = useDBService();
  const [isLoading, setIsLoading] = useState(true);
  const products = useSelector((state: RootState) => state.products.products);
  const [filter, setFilter] = useState<FilterState>(FilterState.all);
  const dispatch = useDispatch();

  useEffect(() => {
    if (databaseService) {
      setIsLoading(false);
    }
  }, [databaseService]);

  useEffect(() => {
    databaseService?.getProducts().then(newProducts => {
      dispatch(ProductsSlice.actions.setProducts(newProducts));
    });
  }, [databaseService, dispatch]);

  const filteredItems = useMemo(() => {
    return products.filter(product => {
      if (filter === FilterState.all) {
        return true;
      }
      if (filter === FilterState.earned) {
        return !product.is_redemption;
      }
      if (filter === FilterState.spent) {
        return product.is_redemption;
      }
    });
  }, [filter, products])

  const buttons = useMemo(() => {
    switch (filter) {
      case FilterState.earned:
      case FilterState.spent:
        return (
          <Pressable
            style={MainScreenStyle.bigButton}
            onPress={() => setFilter(FilterState.all)}>
            <Text style={MainScreenStyle.bigButtonText}>Todos</Text>
          </Pressable>
        );
      case FilterState.all:
        return (
          <View style={MainScreenStyle.buttonsContainer}>
            <Pressable
              style={MainScreenStyle.smallButton}
              onPress={() => setFilter(FilterState.earned)}>
              <Text style={MainScreenStyle.smallButtonText}>Ganados</Text>
            </Pressable>
            <Pressable
              style={MainScreenStyle.smallButton}
              onPress={() => setFilter(FilterState.spent)}>
              <Text style={MainScreenStyle.smallButtonText}>Canjeados</Text>
            </Pressable>
          </View>
        );
    }
  }, [filter]);

  if (isLoading) {
    return (
      <View style={MainScreenStyle.mainContainerLoading}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  const renderProduct = ({item}: {item: Product}) => {
    return <ProductListComponent product={item} />;
  };

  return (
    <View style={MainScreenStyle.mainContainer}>
      <Text style={MainScreenStyle.welcomeText}>Bienvenido de vuelta!</Text>
      <Text style={MainScreenStyle.nameText}>Ruben Rodriguez</Text>
      <Text style={MainScreenStyle.yourPoints}>TUS PUNTOS</Text>
      <PointsComponent />
      <Text style={MainScreenStyle.yourMovements}>TUS MOVIMIENTOS</Text>
      <View style={MainScreenStyle.flatListContainer}>
        <FlatList data={filteredItems} renderItem={renderProduct} />
      </View>
      {buttons}
    </View>
  );
};

export default MainScreen;
