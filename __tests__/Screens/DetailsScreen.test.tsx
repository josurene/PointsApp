import React from 'react';
import PointsComponent from '@Presentation/Components/PointsComponent/PointsComponent';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {render, screen, fireEvent, within} from '@testing-library/react-native';
import DetailsScreen from '@Presentation/Screens/DetailsScreen/DetailsScreen';

const navigation = {
  goBack: () => {},
};

const route = {
  params: {
    product: {
      createdAt: '2022-12-09T06:34:25.607Z',
      product: 'Handmade Metal Shoes',
      points: 100,
      image: 'https://loremflickr.com/640/480/transport',
      is_redemption: false,
      id: '1',
    },
  },
};

describe('<DetailsScreen/> components', () => {
  it('should render DetailsScreen', () => {
    render(<DetailsScreen navigation={navigation} route={route} />);
    const {getByText} = screen;

    const text = getByText(/ puntos/i);

    expect(text.props.children).toEqual([100, " puntos"]);
  });
});
