import { View, Text } from 'react-native'
import React from 'react'

const Layout = ({ children }) => {
  return (
    <View style={{ flex: 1 }}>
      <Text className='bg-blue-500'>Header</Text>
      <View className='flex-1 bg-red-500'>
        {children}
      </View>
      <Text className='bg-yellow-500'>Footer</Text>
    </View>
  )
}

export default Layout
