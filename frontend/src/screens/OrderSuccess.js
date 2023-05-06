import {View, Text, Image} from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native'

const OrderSuccess = () => {
  const navigation = useNavigation()
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
        source={require('../images/checked.png')}
        style={{width: 100, height: 100}}
      />
      <Text
        style={{
          marginTop: 30,
          color: '#00ff00',
          fontSize: 20,
          fontWeight: '800',
        }}>
        Order Successfully
      </Text>
      <Button
        title='Go to Home Page'
        onPress={() => {
          navigation.navigate('main')
        }}
      />
    </View>
  )
}

export default OrderSuccess
