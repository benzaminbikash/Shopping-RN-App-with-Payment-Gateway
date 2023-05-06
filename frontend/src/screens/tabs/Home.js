import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native'
import React, {useEffect, useState} from 'react'
import Header from '../../common/Header'
import {useNavigation} from '@react-navigation/native'
import {useDispatch} from 'react-redux'
import {addProduct} from '../../redux/slices/ProductSlice'

const Home = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const [products, setProducts] = useState([])
  useEffect(() => {
    getData()
    console.log(getData())
  }, [])
  const getData = () => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => {
        setProducts(json)
        json.map(item => {
          item.qty = 1
        })
        dispatch(addProduct(json))
      })
  }
  return (
    <View style={{flex: 1}}>
      <Header
        leftIcon={require('../../images/me.png')}
        RightIcon={require('../../images/cart.png')}
        title='Grocery App'
        onClickleftIcon={() => navigation.openDrawer()}
        OnClickightIcon={() => {
          navigation.navigate('CartScreen')
        }}
        isCart={true}
      />

      <FlatList
        data={products}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              style={styles.product}
              activeOpacity={1}
              onPress={() =>
                navigation.navigate('ProductDetail', {data: item})
              }>
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
                <Text style={styles.price}>$ {item.price}</Text>
              </View>
            </TouchableOpacity>
          )
        }}
      />
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

export default Home
