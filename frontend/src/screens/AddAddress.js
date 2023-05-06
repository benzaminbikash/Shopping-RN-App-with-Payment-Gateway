import {View, Text, TouchableOpacity, TextInput, Image} from 'react-native'
import React, {useState} from 'react'
import Header from '../common/Header'
import {useNavigation, useRoute} from '@react-navigation/native'
import CustomButton from '../common/CustomButton'
import {useDispatch} from 'react-redux'
import {addressAdd} from '../redux/slices/AddressSLice'
import uuid from 'react-native-uuid'
const AddAddress = () => {
  const route = useRoute()
  const dispatch = useDispatch()
  const [type, setType] = useState(
    route.params.type == 'edit'
      ? route.params.data.type == 'Home'
        ? 0
        : 1
      : 0,
  )
  const navigation = useNavigation()
  const [state, setState] = useState(
    route.params.type == 'edit' ? route.params.data.state : '',
  )
  const [city, setCity] = useState(
    route.params.type == 'edit' ? route.params.data.city : '',
  )
  const [code, setCode] = useState(
    route.params.type == 'edit' ? route.params.data.code : '',
  )

  return (
    <View style={{flex: 1}}>
      <Header
        title={
          route.params.type === 'edit' ? 'Edit Addresses' : 'Add New Addresses'
        }
        leftIcon={require('../images/back.png')}
        onClickleftIcon={() => {
          navigation.goBack()
        }}
      />
      <View style={{marginTop: 30}}>
        <TextInput
          placeholder='Enter State'
          value={state}
          onChangeText={t => setState(t)}
          style={{
            borderWidth: 1,
            marginTop: 20,
            width: '90%',
            alignSelf: 'center',
            borderRadius: 10,
            paddingLeft: 20,
          }}
        />
        <TextInput
          value={city}
          onChangeText={t => setCity(t)}
          placeholder='Enter City'
          style={{
            borderWidth: 1,
            marginTop: 20,
            width: '90%',
            alignSelf: 'center',
            borderRadius: 10,
            paddingLeft: 20,
          }}
        />
        <TextInput
          value={code}
          onChangeText={t => setCode(t)}
          placeholder='Enter Pincode'
          keyboardType='number-pad'
          style={{
            borderWidth: 1,
            marginTop: 20,
            width: '90%',
            alignSelf: 'center',
            borderRadius: 10,
            paddingLeft: 20,
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            marginTop: 20,
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => {
              setType(0)
            }}
            style={{
              width: '40%',
              borderWidth: 1,
              padding: 5,
              borderRadius: 10,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              source={
                type === 0
                  ? require('../images/radio-fill.png')
                  : require('../images/radio.png')
              }
              style={{width: 40, height: 40}}
            />
            <Text style={{marginLeft: 10, fontSize: 20, color: 'black'}}>
              Home
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => {
              setType(1)
            }}
            style={{
              width: '40%',
              borderWidth: 1,
              marginLeft: 20,
              padding: 5,
              borderRadius: 10,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              source={
                type === 1
                  ? require('../images/radio-fill.png')
                  : require('../images/radio.png')
              }
              style={{width: 40, height: 40}}
            />
            <Text style={{marginLeft: 10, fontSize: 20, color: 'black'}}>
              Office
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <CustomButton
        bg='orange'
        title='Save Address'
        color='white'
        onClick={() => {
          dispatch(
            addressAdd({
              state: state,
              city: city,
              code: code,
              type: type == 0 ? 'Home' : 'Office',
              id: uuid.v4(),
            }),
          )
          navigation.goBack()
        }}
      />
    </View>
  )
}

export default AddAddress
