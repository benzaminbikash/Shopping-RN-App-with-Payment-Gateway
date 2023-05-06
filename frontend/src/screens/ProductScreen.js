import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native'
import React, {useState} from 'react'
import Header from '../common/Header'
import {useNavigation, useRoute} from '@react-navigation/native'
import CustomButton from '../common/CustomButton'
import {addWishlist} from '../redux/slices/WishlistSlice'
import {useDispatch} from 'react-redux'
import {
  cartAdd,
  increamentCart,
  decreamentCart,
} from '../redux/slices/CartSlice'
import AsyncStorage from '@react-native-async-storage/async-storage'
import ModalScreen from '../common/ModalScreenforLogin'

const ProductScreen = () => {
  const navigation = useNavigation()
  const route = useRoute()
  const dispatch = useDispatch()
  const [qty, setqty] = useState(1)
  const [visible, setVisible] = useState(false)

  const checkAuthUser = async () => {
    let loggedUser = false
    const status = await AsyncStorage.getItem('IS_USER_LOGGED_IN')
    console.log(status)
    if (status == null) {
      loggedUser = false
    } else {
      loggedUser = true
    }
    console.log(loggedUser)
    return loggedUser
  }

  return (
    <View style={styles.container}>
      <Header
        leftIcon={require('../images/back.png')}
        RightIcon={require('../images/cart.png')}
        title='Product Detail'
        onClickleftIcon={() => {
          navigation.goBack()
        }}
        OnClickightIcon={() => {
          navigation.navigate('CartScreen')
        }}
        isCart={true}
      />
      <ScrollView>
        <Image source={{uri: route.params.data.image}} style={styles.image} />
        <Text style={styles.title}>{route.params.data.title}</Text>
        <Text style={styles.des}>{route.params.data.description}</Text>
        <View style={{flexDirection: 'row', marginTop: 30}}>
          <Text style={styles.pricetitle}>Price:</Text>
          <Text style={styles.price}> ${route.params.data.price}</Text>
          <TouchableOpacity
            // onPress={() => dispatch(decreamentcart(item.id))}
            onPress={() => setqty(qty - 1)}
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
          <Text style={{alignSelf: 'center'}}>{qty}</Text>
          <TouchableOpacity
            onPress={() => setqty(qty + 1)}
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
            <Text style={{fontSize: 24, fontWeight: 'bold'}}>+</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.wishlist}
          onPress={() => {
            if (checkAuthUser()) {
              dispatch(addWishlist(route.params.data))
            } else {
              setVisible(true)
            }
          }}>
          <Image
            source={require('../images/heart.png')}
            style={{width: 24, height: 24}}
          />
        </TouchableOpacity>

        <CustomButton
          bg='red'
          title='Add to Cart'
          color='white'
          onClick={() => {
            if (checkAuthUser()) {
              dispatch(
                cartAdd({
                  category: route.params.data.category,
                  description: route.params.data.description,
                  id: route.params.data.id,
                  image: route.params.data.image,
                  price: route.params.data.price,
                  qty: qty,
                  rating: {
                    count: route.params.data.count,
                    rate: route.params.data.rate,
                  },
                  title: route.params.data.title,
                }),
              )
            } else {
              setVisible(true)
            }
          }}
        />
      </ScrollView>
      <ModalScreen
        isVisible={visible}
        onClose={() => setVisible(false)}
        onLoginClicked={() => {
          navigation.navigate('Login')
          setVisible(false)
        }}
        onRegisterClicked={() => {
          navigation.navigate('Register')
          setVisible(false)
        }}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'center',
  },
  title: {
    fontSize: 22,
    color: 'black',
    fontWeight: '600',
    marginTop: 20,
    marginLeft: 20,
  },
  des: {
    fontSize: 16,
    marginTop: 10,
    marginHorizontal: 20,
    fontWeight: '600',
  },
  pricetitle: {
    marginLeft: 20,
    // marginTop: 30,
    fontSize: 20,
    color: 'black',
    fontWeight: '800',
  },
  price: {
    // marginTop: 30,
    marginLeft: 10,
    fontSize: 20,
    color: 'green',
    fontWeight: '800',
  },
  wishlist: {
    backgroundColor: '#c9c3c7',
    width: 50,
    height: 50,
    position: 'absolute',
    right: 20,
    top: 100,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default ProductScreen
