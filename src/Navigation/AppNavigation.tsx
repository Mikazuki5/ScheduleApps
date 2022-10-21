import React from 'react'
import useTheme from '@/Hooks/useTheme'
import { NavigationContainer } from '@react-navigation/native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { DetailSchedule, HomeScreenContainer, SplashScreenContainer, UpcomingSchedule } from '@/Containers'

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
          <Stack.Screen 
            name="upcoming" 
            component={UpcomingSchedule} 
            options={{headerShown: false}} 
          />
          <Stack.Screen 
            name="detailSchedule" 
            component={DetailSchedule} 
            options={{headerShown: false}} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  )
}

export default AppNavigation