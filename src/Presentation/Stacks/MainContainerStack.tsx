import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainScreen from '@Presentation/Screens/MainScreen/MainScreen';
import DetailsScreen from '@Presentation/Screens/DetailsScreen/DetailsScreen';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {SingletonHooksContainer} from 'react-singleton-hook';
import InjectionService from '../../Services/InjectionService';
import {Provider} from 'react-redux';
import store from '@StateRedux/Store/store';
import Screens from '@Constants/Screens';

const Stack = createNativeStackNavigator();

function App() {
  InjectionService.init();

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <SingletonHooksContainer />
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name={Screens.MAIN_SCREEN} component={MainScreen} />
            <Stack.Screen
              name={Screens.DETAILS_SCREEN}
              component={DetailsScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}

export default App;
