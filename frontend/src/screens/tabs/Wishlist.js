import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native'
import React, {useState} from 'react'
import {useSelector} from 'react-redux'
import Header from '../../common/Header'

const Wishlist = () => {
  const data = useSelector(state => state.wishlist.data)
  const [wishlist, setWIshlist] = useState(data)
  return (
    <View>
      <Header title='My Wishlists' />
      <FlatList
        data={wishlist}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              style={styles.product}
              activeOpacity={1}
              // onPress={() =>
              // navigation.navigate('ProductDetail', {data: item})
              // }
            >
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
export default Wishlist
