import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native'
import React from 'react'
import Header from '../../common/Header'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {useNavigation} from '@react-navigation/native'

const Profile = () => {
  const navigation = useNavigation()
  const logoutuser = async () => {
    try {
      const data = await AsyncStorage.removeItem('IS_USER_LOGGED_IN')
      console.log(data)
      navigation.navigate('main')
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <View style={{flex: 1}}>
      <Header title='User Profile' />
      <Image
        source={require('../../images/profile.png')}
        style={{width: 100, height: 100, alignSelf: 'center', marginTop: 40}}
      />
      <Text
        style={{
          alignSelf: 'center',
          marginTop: 20,
          fontSize: 20,
          color: 'black',
          fontWeight: 'bold',
        }}>
        Reshma Ghimire
      </Text>
      <Text
        style={{
          alignSelf: 'center',
          marginTop: 10,
          fontSize: 20,
          color: 'black',
          fontWeight: 'bold',
        }}>
        reshmaghimire@gmail.com
      </Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.txt}>Edit Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.txt}>Orders</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.txt}>Address</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.txt}>Payment Method</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={logoutuser}>
        <Text style={styles.txt}>Logout</Text>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  button: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 10,
    borderBottomWidth: 1,
    paddingLeft: 20,
    height: 50,
    justifyContent: 'center',
  },
  txt: {
    color: 'black',
  },
})

export default Profile
