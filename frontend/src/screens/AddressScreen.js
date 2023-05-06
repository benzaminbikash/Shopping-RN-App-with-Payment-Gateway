import {View, Text, TouchableOpacity, FlatList, Image} from 'react-native'
import React from 'react'
import Header from '../common/Header'
import {useNavigation} from '@react-navigation/native'
import {useDispatch, useSelector} from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {deleteAdd} from '../redux/slices/AddressSLice'

const AddressScreen = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const AddressValue = useSelector(state => state.address.data)
  const defaultAddress = async item => {
    await AsyncStorage.setItem(
      'MY_ADDRESS',
      item.city + ' , ' + item.state + ' , ' + item.code + ' ,' + item.type,
    )
    navigation.goBack()
  }
  return (
    <View style={{flex: 1}}>
      <Header
        title='My Addresses'
        leftIcon={require('../images/back.png')}
        onClickleftIcon={() => {
          navigation.goBack()
        }}
      />
      <FlatList
        data={AddressValue}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              onPress={() => defaultAddress(item)}
              style={{
                backgroundColor: '#fff',
                width: '90%',
                margin: 10,
                alignSelf: 'center',
                paddingLeft: 20,
                justifyContent: 'center',
                paddingTop: 10,
                paddingBottom: 10,
              }}>
              <Text style={{color: 'black', fontSize: 16}}>
                State: {item.state}
              </Text>
              <Text style={{color: 'black', fontSize: 16}}>
                City: {item.city}
              </Text>
              <Text style={{color: 'black', fontSize: 16}}>
                Pincode: {item.code}
              </Text>
              <Text
                style={{
                  color: 'white',
                  fontSize: 12,
                  position: 'absolute',
                  right: 10,
                  backgroundColor: 'blue',
                  padding: 4,
                  borderRadius: 10,
                  top: 10,
                }}>
                {item.type}
              </Text>
              <View
                style={{
                  position: 'absolute',
                  bottom: 10,
                  right: 10,
                  flexDirection: 'row',
                }}>
                <TouchableOpacity
                  style={{marginRight: 10}}
                  onPress={() =>
                    navigation.navigate('addaddress', {
                      type: 'edit',
                      data: {item},
                    })
                  }>
                  <Image
                    source={require('../images/editing.png')}
                    style={{width: 27, height: 27}}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => dispatch(deleteAdd(item.id))}>
                  <Image
                    source={require('../images/delete.png')}
                    style={{width: 27, height: 27}}
                  />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          )
        }}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate('addaddress', {type: 'new'})}
        style={{
          width: 60,
          height: 60,
          backgroundColor: 'orange',
          borderRadius: 50,
          position: 'absolute',
          bottom: 40,
          right: 20,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{fontSize: 40, color: 'white'}}>+</Text>
      </TouchableOpacity>
    </View>
  )
}

export default AddressScreen
