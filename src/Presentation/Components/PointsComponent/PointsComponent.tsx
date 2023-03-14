import React, {useMemo} from 'react';
import {Text, View} from 'react-native';
import PointsComponentStyle from '@Presentation/Components/PointsComponent/PointsComponentStyle';
import {useSelector} from 'react-redux';
import {RootState} from '@StateRedux/Store/store';
import moment from 'moment';

const PointsComponent: React.FC = () => {
  const products = useSelector((state: RootState) => state.products.products);

  const totalPoints = useMemo(() => {
    let points = 0;
    products.forEach(product => {
      if (!product.is_redemption) {
        points += product.points;
      }
    });
    return points;
  }, [products]);

  const currentDate = useMemo(() => {
    return moment().format('MMMM');
  }, []);

  return (
    <View style={PointsComponentStyle.mainContainer}>
      <Text style={PointsComponentStyle.month}>{currentDate}</Text>
      <Text style={PointsComponentStyle.points}>{`${totalPoints} pts`}</Text>
    </View>
  );
};

export default PointsComponent;
