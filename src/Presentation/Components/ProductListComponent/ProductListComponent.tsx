import React, { useMemo } from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import Product from '@Domain/Entities/Product';
import {useNavigation} from '@react-navigation/native';
import Screens from '@Constants/Screens';
import ProductListComponentStyle from '@Presentation/Components/ProductListComponent/ProductListComponentStyle';
import moment from 'moment';

export interface Props {
  product: Product;
}

const ProductListComponent: React.FC<Props> = ({product}) => {
  const navigation = useNavigation();

  const handleOnPress = () => {
    // @ts-ignore
    navigation.navigate(Screens.DETAILS_SCREEN, {product});
  };

  const createdDate = useMemo(() => {
    return moment(product.createdAt).format('DD MMMM, YYYY');
  }, [product.createdAt]);

  return (
    <Pressable style={ProductListComponentStyle.mainContainer} onPress={handleOnPress}>
      <Image style={ProductListComponentStyle.image} source={{uri: product.image}} />
      <View style={ProductListComponentStyle.textContainer}>
        <Text style={ProductListComponentStyle.productName}>{product.product}</Text>
        <Text style={ProductListComponentStyle.productDate}>{createdDate}</Text>
      </View>
      <View style={ProductListComponentStyle.pointsContainer}>
        <Text style={product.is_redemption ? ProductListComponentStyle.minusIcon : ProductListComponentStyle.plusIcon}>{product.is_redemption ? '-' : '+'}</Text>
        <Text style={ProductListComponentStyle.points}>{product.points}</Text>
      </View>
      <Text style={ProductListComponentStyle.goToIcon}>{'>'}</Text>
    </Pressable>
  );
};

export default ProductListComponent;
