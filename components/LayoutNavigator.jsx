import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Landing from '../screens/Landing';
import Layout from './Layout';
import BusinessRegister from '../screens/BusinessRegister';
import UserRegister from '../screens/UserRegister';
import Login from '../screens/Login';
import BusinessStep2 from '../screens/BusinessStep2';
import BusinessStep3 from '../screens/BusinessStep3';

const Stack = createNativeStackNavigator();

const withLayout =
  (Component, options = {}) =>
  props => (
    <Layout {...options}>
      <Component {...props} />
    </Layout>
  );

const LayoutNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* ❌ NO Layout for Landing */}
      <Stack.Screen name="Landing" component={Landing} />
      <Stack.Screen name="BusinessRegister" component={BusinessRegister} />
      <Stack.Screen name="BusinessStep2" component={BusinessStep2} />
      <Stack.Screen name="BusinessStep3" component={BusinessStep3} />



      <Stack.Screen name="UserRegister" component={UserRegister} />
      <Stack.Screen name="Login" component={Login} />

      

      {/* ✅ Layout applied here */}
      <Stack.Screen name="Home" component={withLayout(Home)} />
      <Stack.Screen name="Profile" component={withLayout(Profile)} />   
    </Stack.Navigator>
  );
};

export default LayoutNavigator;
