import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Dimensions,
  FlatList,
  TouchableOpacity,
} from 'react-native'
import React, {useState} from 'react'
import {useSelector} from 'react-redux'
import Header from '../../common/Header'
import {useNavigation} from '@react-navigation/native'

const Search = () => {
  const navigation = useNavigation()
  const products = useSelector(state => state)
  const [value, setValue] = useState('')
  const [oldData, setOldData] = useState(products.product.data)
  const [select, setSelect] = useState([])
  const filterData = text => {
    let newData = oldData.filter(item => {
      return item.title.toLowerCase().match(text.toLowerCase())
    })
    setSelect(newData)
  }
  return (
    <View>
      <Header title='Search Items' />
      <View style={styles.border}>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginLeft: 15}}>
          <Image
            source={require('../../images/search.png')}
            style={{width: 24, height: 24, resizeMode: 'center'}}
          />
          <TextInput
            placeholder='search items here'
            style={{marginLeft: 10}}
            onChangeText={e => {
              setValue(e)
              filterData(e)
            }}
          />
        </View>
        {value != '' && (
          <Image
            source={require('../../images/close.png')}
            style={{width: 18, height: 18, marginRight: 20}}
          />
        )}
      </View>
      <FlatList
        data={select}
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
  border: {
    borderWidth: 1,
    marginTop: 30,
    width: '90%',
    alignSelf: 'center',
    height: 50,
    borderRadius: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
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

export default Search
