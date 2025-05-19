import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigator from './navigation/MainNavigator';
import SplashScreen from './components/SplashScreen';

const App = () => {
  return (
    <React.Suspense fallback={<SplashScreen />}>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </React.Suspense>
  );
};

export default App;
