import React, { useMemo } from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import DetailsScreenStyle from '@Presentation/Screens/DetailsScreen/DetailsScreenStyle';
import Product from '@Domain/Entities/Product';
import moment from 'moment';

export interface Props {
  navigation: {
    goBack: () => void;
  };
  route: {
      params: {
          product: Product,
      }
  }
}

const DetailsScreen: React.FC<Props> = ({navigation, route}) => {
    const purchasedDate = useMemo(() => {
        return moment(route.params.product.createdAt).format('DD [de] MMMM, YYYY')
    },[route]);


  return (
    <View>
        <View  style={DetailsScreenStyle.header}>
            <Text style={DetailsScreenStyle.headerText}>{route.params.product.product}</Text>
        </View>
        <View style={DetailsScreenStyle.mainContainer}>
            <Image style={DetailsScreenStyle.image} source={{uri: route.params.product.image}} />
            <Text style={DetailsScreenStyle.details}>Detalles del producto:</Text>
            <Text style={DetailsScreenStyle.purchasedDate}>Comprado el {purchasedDate}</Text>
            <Text style={DetailsScreenStyle.pointsText}>Con esta compra acumulaste:</Text>
            <Text style={DetailsScreenStyle.points}>{route.params.product.points} puntos</Text>
            <Pressable
              style={DetailsScreenStyle.acceptButton}
              onPress={navigation.goBack}>
                <Text style={DetailsScreenStyle.acceptButtonText}>Aceptar</Text>
            </Pressable>
        </View>
    </View>
  );
};

export default DetailsScreen;
