import {View, Text, Dimensions, TouchableOpacity} from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native'

const CheckOut = ({total, item}) => {
  const navigation = useNavigation()
  return (
    <View
      style={{
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#fff',
        height: 70,
        width: Dimensions.get('window').width,
        flexDirection: 'row',
      }}>
      <View
        style={{width: '50%', justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{color: 'black', fontSize: 16}}>
          {'(items)'} {item}
        </Text>
        <Text style={{color: 'black', fontSize: 16, fontWeight: '800'}}>
          {'Total: $'}
          {total}
        </Text>
      </View>
      <View
        style={{width: '50%', justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity
          onPress={() => navigation.navigate('checkout')}
          activeOpacity={0.8}
          style={{
            backgroundColor: 'orange',
            width: '80%',
            height: '60%',
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>
            Checkout
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default CheckOut
