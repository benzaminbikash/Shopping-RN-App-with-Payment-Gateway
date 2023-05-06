import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Main from './screens/Main'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import Signup from './screens/Signup'
import LoginScreen from './screens/LoginScreen'
import CheckOutScreen from './screens/CheckOutScreen'
import AddressScreen from './screens/AddressScreen'
import AddAddress from './screens/AddAddress'
import OrderSuccess from './screens/OrderSuccess'

const Stack = createNativeStackNavigator()
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          animation: 'none',
        }}>
        <Stack.Screen
          name='main'
          component={Main}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name='ProductDetail'
          component={ProductScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name='CartScreen'
          component={CartScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name='Login'
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name='Register'
          component={Signup}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name='checkout'
          component={CheckOutScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name='address'
          component={AddressScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name='addaddress'
          component={AddAddress}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name='order'
          component={OrderSuccess}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator
