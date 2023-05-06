import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Keyboard,
} from 'react-native'
import React, {useState, useEffect} from 'react'
import Home from './tabs/Home'
import Profile from './tabs/Profile'
import WishList from './tabs/Wishlist'
import Search from './tabs/Search'
import Notification from './tabs/Notification'

const HomeScreen = () => {
  const [selectData, setselectData] = useState(0)
  const [isKeyboardVisible, setKeyboardVisible] = useState(false)

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true)
      },
    )
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false)
      },
    )

    return () => {
      keyboardDidHideListener.remove()
      keyboardDidShowListener.remove()
    }
  }, [])

  return (
    <View style={styles.MainHome}>
      {selectData == 0 ? (
        <Home />
      ) : selectData == 1 ? (
        <Search />
      ) : selectData == 2 ? (
        <WishList />
      ) : selectData == 3 ? (
        <Notification />
      ) : (
        <Profile />
      )}
      {!isKeyboardVisible && (
        <View style={styles.border}>
          <TouchableOpacity
            style={styles.bottomTab}
            onPress={() => setselectData(0)}>
            <Image
              source={
                selectData == 0
                  ? require('../images/homefill.png')
                  : require('../images/home.png')
              }
              style={styles.image}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.bottomTab}
            onPress={() => setselectData(1)}>
            <Image
              source={require('../images/search.png')}
              style={styles.image}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.bottomTab}
            onPress={() => setselectData(2)}>
            <Image
              source={
                selectData == 2
                  ? require('../images/heartfill.png')
                  : require('../images/heart.png')
              }
              style={styles.image}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.bottomTab}
            onPress={() => setselectData(3)}>
            <Image
              source={
                selectData == 3
                  ? require('../images/bellfill.png')
                  : require('../images/bell.png')
              }
              style={styles.image}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.bottomTab}
            onPress={() => setselectData(4)}>
            <Image
              source={
                selectData == 4
                  ? require('../images/userfill.png')
                  : require('../images/user.png')
              }
              style={styles.image}
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  )
}
const styles = StyleSheet.create({
  MainHome: {
    flex: 1,
  },
  border: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  bottomTab: {
    width: '20%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 24,
    height: 24,
  },
})
export default HomeScreen
