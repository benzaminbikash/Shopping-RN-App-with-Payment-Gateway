import {View, Text, TextInput, StyleSheet} from 'react-native'
import React, {useState} from 'react'
import CustomButton from '../common/CustomButton'
import {useNavigation} from '@react-navigation/native'
import firestore from '@react-native-firebase/firestore'
import AsyncStorage from '@react-native-async-storage/async-storage'

const LoginScreen = () => {
  const navigation = useNavigation()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const loginUser = async () => {
    firestore()
      .collection('Users')
      // Filter results
      .where('email', '==', email)
      .get()
      .then(querySnapshot => {
        console.log(querySnapshot)
      })
      .catch(error => {
        // Alert.alert('No user Found');
        console.log(error)
      })
  }
  const gotonext = async () => {
    await AsyncStorage.setItem('IS_USER_LOGGED_IN', 'yes')
    navigation.navigate('main')
  }
  return (
    <View style={{flex: 1}}>
      <Text
        style={{
          color: 'black',
          fontSize: 40,
          marginTop: 50,
          marginBottom: 50,
          marginLeft: 20,
          fontWeight: '700',
        }}>
        Login Page
      </Text>

      <TextInput
        placeholder='Enter Email'
        style={styles.textinput}
        onChangeText={t => setEmail(t)}
        value={email}
      />
      <TextInput
        placeholder='Enter Password'
        style={styles.textinput}
        onChangeText={t => setPassword(t)}
        value={password}
      />

      <CustomButton
        title='Login'
        bg='#ed4f9e'
        color='white'
        onClick={() => {
          loginUser()
          gotonext()
        }}
      />
      <Text
        onPress={() => navigation.navigate('Register')}
        style={{
          textAlign: 'center',
          color: 'black',
          fontSize: 20,
          fontWeight: '500',
        }}>
        Create an account?
      </Text>
    </View>
  )
}
const styles = StyleSheet.create({
  textinput: {
    color: 'black',
    borderWidth: 1.7,
    width: '90%',
    alignSelf: 'center',
    paddingLeft: 10,
    borderRadius: 10,
    height: 50,
    fontSize: 18,
    marginBottom: 20,
  },
})
export default LoginScreen
