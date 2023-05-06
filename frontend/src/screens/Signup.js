import {View, Text, TextInput, StyleSheet} from 'react-native'
import React, {useState} from 'react'
import CustomButton from '../common/CustomButton'
import {useNavigation} from '@react-navigation/native'
import firestore from '@react-native-firebase/firestore'

const Signup = () => {
  const navigation = useNavigation()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [confirmpass, setConfirmPass] = useState('')
  const AddUser = () => {
    firestore()
      .collection('Users')
      .add({
        name: name,
        email: email,
        phone: phone,
        password: password,
      })
      .then(() => {
        console.log('User added!')
      })
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
        Signup
      </Text>

      <TextInput
        placeholder='Enter Name'
        style={styles.textinput}
        onChangeText={t => setName(t)}
        value={name}
      />
      <TextInput
        placeholder='Enter Email'
        style={styles.textinput}
        onChangeText={t => setEmail(t)}
        value={email}
      />
      <TextInput
        placeholder='Enter Phone'
        style={styles.textinput}
        onChangeText={t => setPhone(t)}
        value={phone}
      />
      <TextInput
        placeholder='Enter Password'
        style={styles.textinput}
        onChangeText={t => setPassword(t)}
        value={password}
      />
      <TextInput
        placeholder='Enter Password Confirmation'
        style={styles.textinput}
        onChangeText={t => setConfirmPass(t)}
        value={confirmpass}
      />
      <CustomButton
        title='Sign Up'
        bg='#ed4f9e'
        color='white'
        onClick={() => {
          AddUser()
          navigation.navigate('Login')
        }}
      />
      <Text
        onPress={() => navigation.navigate('Login')}
        style={{
          textAlign: 'center',
          color: 'black',
          fontSize: 20,
          fontWeight: '500',
        }}>
        Login
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
export default Signup
