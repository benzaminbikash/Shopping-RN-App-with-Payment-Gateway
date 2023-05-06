import {
  View,
  Text,
  Modal,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native'
import React from 'react'

const ModalScreen = ({
  isVisible,
  onLoginClicked,
  onRegisterClicked,
  onClose,
}) => {
  return (
    <Modal visible={isVisible} transparent animationType='fade'>
      <View
        style={{
          flex: 1,
          backgroundColor: 'rgba(0, 0 ,0, 0.7)',
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height,
          position: 'absolute',
          top: 0,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            backgroundColor: '#fff',
            width: '90%',
            // height: 200,
            borderRadius: 10,
          }}>
          <TouchableOpacity
            onPress={() => onLoginClicked()}
            activeOpacity={0.7}
            style={{
              marginTop: 40,
              backgroundColor: '#fc21ea',
              padding: 10,
              marginHorizontal: 20,
              alignItems: 'center',
              borderRadius: 10,
              height: 50,
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>
              Login
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => onRegisterClicked()}
            activeOpacity={0.7}
            style={{
              marginVertical: 20,
              backgroundColor: '#fc21ea',
              padding: 10,
              marginHorizontal: 20,
              alignItems: 'center',
              borderRadius: 10,
              height: 50,
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>
              Create an account
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => onClose()}
            style={{
              position: 'absolute',
              top: 10,
              right: 20,
              // marginBottom: 10,
            }}>
            <Image
              source={require('../images/close.png')}
              style={{width: 17, height: 17, marginBottom: 20}}
            />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
}

export default ModalScreen
