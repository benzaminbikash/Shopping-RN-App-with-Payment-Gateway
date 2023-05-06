import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native'
import React from 'react'
import {useSelector} from 'react-redux'
const {width, height} = Dimensions.get('window')

const Header = ({
  title,
  leftIcon,
  RightIcon,
  onClickleftIcon,
  OnClickightIcon,
  isCart,
}) => {
  const cartData = useSelector(state => state.cartlist.data)
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.btn} onPress={onClickleftIcon}>
        <Image source={leftIcon} style={styles.image} />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      {!isCart ? (
        <View></View>
      ) : (
        <TouchableOpacity style={styles.btn} onPress={OnClickightIcon}>
          <View
            style={{
              backgroundColor: 'white',
              width: 20,
              height: 20,
              position: 'absolute',
              top: 3,
              right: 0,
              borderRadius: 20,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{color: 'black', fontWeight: 'bold', fontSize: 15}}>
              {cartData.length}
            </Text>
          </View>
          <Image source={RightIcon} style={[styles.image, {width: 40}]} />
        </TouchableOpacity>
      )}
    </View>
  )
}
const styles = StyleSheet.create({
  header: {
    width: width,
    height: 60,
    backgroundColor: '#f711ab',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  btn: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 30,
    height: 30,
    tintColor: 'white',
  },
  title: {
    color: 'white',
    fontSize: 20,
  },
})

export default Header
