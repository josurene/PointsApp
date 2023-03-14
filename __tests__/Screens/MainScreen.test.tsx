import React from 'react';
import PointsComponent from '@Presentation/Components/PointsComponent/PointsComponent';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { render, screen, fireEvent, within } from '@testing-library/react-native';

const mockCall = [
  {
    "createdAt": "2022-12-09T06:34:25.607Z",
    "product": "Handmade Metal Shoes",
    "points": 100,
    "image": "https://loremflickr.com/640/480/transport",
    "is_redemption": false,
    "id": "1"
  },
  {
    "createdAt": "2022-12-09T06:34:25.607Z",
    "product": "Handmade Metal Shoes 2",
    "points": 300,
    "image": "https://loremflickr.com/640/480/transport",
    "is_redemption": false,
    "id": "1"
  },
  {
    "createdAt": "2022-12-09T06:34:25.607Z",
    "product": "Handmade Metal Shoes 3",
    "points": 300,
    "image": "https://loremflickr.com/640/480/transport",
    "is_redemption": true,
    "id": "3"
  },
];

const middlewares = [];
const mockStore = configureStore(middlewares);

const initialState = {
  products: {
    products: mockCall,
  },
};
const store = mockStore(initialState);

describe('<MainScreen/> components', () => {
  it('should render PointsComponent', () => {
    render(<Provider store={store}>{<PointsComponent />}</Provider>);
    const {getByText} = screen;

    const text = getByText(/ pts/i);

    expect(text.props.children).toEqual('100 pts');
  });
});
