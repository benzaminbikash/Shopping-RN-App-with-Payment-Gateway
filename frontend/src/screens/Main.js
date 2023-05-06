import {View, Text} from 'react-native'
import React from 'react'
import HomeScreen from './HomeScreen'
import {createDrawerNavigator} from '@react-navigation/drawer'

const Drawer = createDrawerNavigator()
const Main = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name='Home'
        component={HomeScreen}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  )
}

export default Main
