import {View, Text, TouchableOpacity, Dimensions} from 'react-native'
import React from 'react'

const CustomButton = ({bg, title, onClick, color}) => {
  return (
    <TouchableOpacity
      style={{
        width: Dimensions.get('window').width - 40,
        height: 50,
        backgroundColor: bg,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 20,
        borderRadius: 20,
        marginBottom: 20,
      }}
      onPress={() => {
        onClick()
      }}>
      <Text style={{color: color, fontWeight: 'bold', fontSize: 20}}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}

export default CustomButton
