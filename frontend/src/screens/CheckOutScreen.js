import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native'
import React, {useState, useEffect} from 'react'
import Header from '../common/Header'
import {useIsFocused, useNavigation} from '@react-navigation/native'
import {useSelector, useDispatch} from 'react-redux'
import {increamentCart, decreamentcart} from '../redux/slices/CartSlice'
import CustomButton from '../common/CustomButton'
import AsyncStorage from '@react-native-async-storage/async-storage'
import RazorpayCheckout from 'react-native-razorpay'
import {orderProduct} from '../redux/slices/OrderSlice'

const CheckOutScreen = () => {
  const focused = useIsFocused()
  const navigation = useNavigation()
  const data = useSelector(state => state.cartlist.data)
  const [wishlist, setWIshlist] = useState([])
  const dispatch = useDispatch()
  const [select, setSelect] = useState(null)
  const [address, setAddress] = useState('Please add an address')
  const GetAddress = async () => {
    const data = await AsyncStorage.getItem('MY_ADDRESS')
    console.log(data)
    setAddress(data)
  }
  useEffect(() => {
    GetAddress()
  }, [focused])
  console.log('getAddress', GetAddress())
  useEffect(() => {
    setWIshlist(data)
  }, [data])
  const getTotal = () => {
    let total = 0
    data.map(item => {
      total = total + item.qty * item.price
    })
    return total.toFixed(0)
  }
  const orderPlace = id => {
    const data = {
      items: wishlist,
      amount: getTotal,
      address: address,
      paymentId: id,
      paymentMethod: select == 3 ? 'Pending' : 'Success',
    }
    dispatch(orderProduct(data))
    navigation.navigate('order')
  }
  return (
    <View style={{flex: 1, marginBottom: 50}}>
      <Header
        title='Check Out'
        leftIcon={require('../images/back.png')}
        onClickleftIcon={() => {
          navigation.goBack()
        }}
      />
      <View>
        <ScrollView>
          <Text
            style={{
              fontSize: 20,
              color: 'black',
              fontWeight: '900',
              marginTop: 30,
              marginLeft: 20,
            }}>
            Added Items
          </Text>
          <FlatList
            data={wishlist}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity style={styles.product} activeOpacity={1}>
                  <Image
                    source={{uri: item.image}}
                    style={{width: 100, height: 100}}
                  />
                  <View>
                    <Text style={styles.title}>
                      {item.title.length > 30
                        ? item.title.substring(0, 30) + '...'
                        : item.title}
                    </Text>
                    <Text style={styles.desc}>
                      {item.description.length > 30
                        ? item.description.substring(0, 30) + '...'
                        : item.description}
                    </Text>
                    <View style={{flexDirection: 'row', marginTop: 10}}>
                      <Text style={styles.price}>$ {item.price}</Text>
                      <TouchableOpacity
                        onPress={() => dispatch(decreamentcart(item.id))}
                        style={{
                          width: 25,
                          //   height: 25,
                          marginHorizontal: 10,
                          borderWidth: 1.5,
                          borderColor: 'grey',
                          alignItems: 'center',
                          justifyContent: 'center',
                          borderRadius: 10,
                        }}>
                        <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                          -
                        </Text>
                      </TouchableOpacity>
                      <Text style={{alignSelf: 'center'}}>{item.qty}</Text>
                      <TouchableOpacity
                        onPress={() => dispatch(increamentCart(item.id))}
                        style={{
                          width: 25,
                          //   height: 25,
                          marginHorizontal: 10,
                          borderWidth: 1.5,
                          borderColor: 'grey',
                          alignItems: 'center',
                          justifyContent: 'center',
                          borderRadius: 10,
                        }}>
                        <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                          +
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </TouchableOpacity>
              )
            }}
          />
          <View
            style={{
              marginTop: 40,
              justifyContent: 'space-between',
              flexDirection: 'row',
              borderBottomWidth: 1,
              width: '90%',
              alignSelf: 'center',
            }}>
            <Text style={{marginLeft: 20, fontSize: 20, fontWeight: 'bold'}}>
              Total:{' '}
            </Text>
            <Text style={{marginRight: 20, fontSize: 20, fontWeight: 'bold'}}>
              ${getTotal()}
            </Text>
          </View>
          <Text
            style={{
              marginLeft: 20,
              marginTop: 10,
              fontWeight: 'bold',
              fontSize: 20,
            }}>
            Select Payment Mode
          </Text>
          <TouchableOpacity
            onPress={() => setSelect(0)}
            style={{
              marginLeft: 20,
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 5,
            }}>
            <Image
              source={
                select === 0
                  ? require('../images/radio-fill.png')
                  : require('../images/radio.png')
              }
              style={{width: 30, height: 30}}
            />
            <Text style={{marginLeft: 10}}>Credit Card</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setSelect(1)}
            style={{
              marginLeft: 20,
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 5,
            }}>
            <Image
              source={
                select === 1
                  ? require('../images/radio-fill.png')
                  : require('../images/radio.png')
              }
              style={{width: 30, height: 30}}
            />
            <Text style={{marginLeft: 10}}>Debit Card</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setSelect(2)}
            style={{
              marginLeft: 20,
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 5,
            }}>
            <Image
              source={
                select === 2
                  ? require('../images/radio-fill.png')
                  : require('../images/radio.png')
              }
              style={{width: 30, height: 30}}
            />
            <Text style={{marginLeft: 10}}>UPI</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setSelect(3)}
            style={{
              marginLeft: 20,
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 5,
            }}>
            <Image
              source={
                select === 3
                  ? require('../images/radio-fill.png')
                  : require('../images/radio.png')
              }
              style={{width: 30, height: 30}}
            />
            <Text style={{marginLeft: 10}}>Cash on Delivery</Text>
          </TouchableOpacity>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text
              style={{
                marginLeft: 20,
                marginTop: 10,
                color: 'black',
                fontSize: 20,
                fontWeight: 'bold',
              }}>
              Address
            </Text>
            <Text
              onPress={() => navigation.navigate('address')}
              style={{
                marginRight: 20,
                marginTop: 10,
                color: 'blue',
                fontSize: 20,
                fontWeight: 'bold',
                textDecorationColor: 'blue',
                textDecorationLine: 'underline',
              }}>
              Edit Address
            </Text>
          </View>
          <Text style={{marginLeft: 20, marginTop: 5, fontSize: 17}}>
            {address}
          </Text>

          <CustomButton
            bg='orange'
            title='Pay & Order'
            onClick={() => {
              var options = {
                description: 'Credits towards consultation',
                image: 'https://i.imgur.com/3g7nmJC.png',
                currency: 'INR',
                key: 'rzp_test_9VfSdgnunwOqJA', // Your api key
                amount: getTotal() * 1000,
                name: 'foo',
                prefill: {
                  email: 'void@razorpay.com',
                  contact: '9191919191',
                  name: 'Razorpay Software',
                },
                theme: {color: '#e633ad'},
              }
              RazorpayCheckout.open(options)
                .then(data => {
                  // handle success
                  // alert(`Success: ${data.razorpay_payment_id}`)
                  orderPlace(data.razorpay_payment_id)
                })
                .catch(error => {
                  // handle failure
                  alert(`Error: ${error.code} | ${error.description}`)
                })
            }}
          />
        </ScrollView>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  product: {
    width: Dimensions.get('window').width,
    height: 100,
    backgroundColor: '#fff',
    marginTop: 10,
    flexDirection: 'row',
  },
  title: {
    marginLeft: 20,
    fontSize: 18,
    fontWeight: '600',
  },
  desc: {
    marginLeft: 20,
  },
  price: {
    color: 'green',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 20,
  },
})
export default CheckOutScreen
