import { View, Text } from 'react-native'
import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { HomeScreenContainer, SplashScreenContainer } from '@/Containers'
import useTheme from '@/Hooks/useTheme'

const Stack = createNativeStackNavigator()

const AppNavigation = () => {
  const { Layout } = useTheme()
  return (
    <GestureHandlerRootView style={[Layout.fill]}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='SplashScreen'>
          <Stack.Screen 
            name="SplashScreen" 
            component={SplashScreenContainer} 
            options={{headerShown: false}} 
          />
          <Stack.Screen 
            name="Home" 
            component={HomeScreenContainer} 
            options={{headerShown: false}} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  )
}

export default AppNavigation