import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import MiniAppScreen from '../screens/MiniAppScreen';

export type MainStackParamList = {
  Welcome: undefined;
  MiniApp: undefined;
};

const Main = createNativeStackNavigator<MainStackParamList>();

const MainNavigator = () => {
  return (
    <Main.Navigator screenOptions={{headerShown: false}}>
      <Main.Screen name="Welcome" component={WelcomeScreen} />
      <Main.Screen name="MiniApp" component={MiniAppScreen} />
    </Main.Navigator>
  );
};

export default MainNavigator;
