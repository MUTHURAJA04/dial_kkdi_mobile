import { View, Text } from 'react-native'
import React from 'react'
import "./global.css"
import LayoutNavigator from './components/LayoutNavigator'
import { NavigationContainer } from '@react-navigation/native';
import Layout from './components/Layout';

const App = () => {
  return (
     <NavigationContainer>
      <Layout>
 <LayoutNavigator />
      </Layout>
     
    </NavigationContainer>
  )
}

export default App