import 'react-native-gesture-handler';
import React from 'react'
import { SafeAreaView } from 'react-native'
import AppNavigation from './Navigation/AppNavigation';
import useTheme from '@/Hooks/useTheme';

const App = () => {
  const { Layout } = useTheme()
  return (
    <SafeAreaView style={Layout.fill}>
      <AppNavigation />
    </SafeAreaView>
  )
}

export default App