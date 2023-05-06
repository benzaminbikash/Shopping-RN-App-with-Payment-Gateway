import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native'
import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Header from '../common/Header'
import {increamentCart, decreamentcart} from '../redux/slices/CartSlice'
import CheckOut from '../common/CheckOut'

const CartScreen = () => {
  const data = useSelector(state => state.cartlist.data)
  const [wishlist, setWIshlist] = useState([])
  const dispatch = useDispatch()
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
  return (
    <View style={{flex: 1}}>
      <Header title='My Carts' />
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
                    <Text style={{fontSize: 20, fontWeight: 'bold'}}>-</Text>
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
                    <Text style={{fontSize: 20, fontWeight: 'bold'}}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          )
        }}
      />
      {data.length < 1 && (
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100%',
          }}>
          <Text>No Items in Cart</Text>
        </View>
      )}
      {data.length > 0 && <CheckOut item={data.length} total={getTotal()} />}
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
export default CartScreen
