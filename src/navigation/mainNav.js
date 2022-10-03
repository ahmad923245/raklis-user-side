import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../screens/splash/splash';
import Signup from '../screens/auth/signup/signup';
import Verification from '../screens/auth/verification/verification';
import AccountDetail from '../screens/auth/accountDetail/accountDetail';
import Login from '../screens/auth/login/login';
import OtpScreen from '../screens/auth/otp/otp';
import MyDrawer from './drawer';
// import Front from './../screens/practice/1';

const MainNav = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Spalsh" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="OtpScreen" component={OtpScreen} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Verification" component={Verification} />
        <Stack.Screen name="AccountDetail" component={AccountDetail} />
        <Stack.Screen name="MyDrawer" component={MyDrawer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNav;
