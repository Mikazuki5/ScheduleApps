import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import useTheme from '@/Hooks/useTheme'

const HomeScreenContainer = () => {
  const {Colors} = useTheme()
  return (
    <View>
      <StatusBar backgroundColor={Colors.baseColor} barStyle='dark-content' />
      <Text>HomeScreenContainer</Text>
    </View>
  )
}

export default HomeScreenContainer