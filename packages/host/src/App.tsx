import React from 'react';
import RNBootSplash from 'react-native-bootsplash';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigator from './navigation/MainNavigator';
import SplashScreen from './components/SplashScreen';

const App = () => {
  return (
    <React.Suspense fallback={<SplashScreen />}>
      <NavigationContainer onReady={() => RNBootSplash.hide({fade: true})}>
        <MainNavigator />
      </NavigationContainer>
    </React.Suspense>
  );
};

export default App;
