import { View, Text, SafeAreaView, StatusBar } from 'react-native'
import React, { useEffect } from 'react'
import useTheme from '@/Hooks/useTheme'
import LottieView from 'lottie-react-native';

const SplashScreenContainer = ({navigation}: any) => {
  const { Layout, Animation, Colors } = useTheme();

  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home')
    }, 5000);
  }, [])
  
  return (
    <SafeAreaView 
      style={[
        Layout.fill, 
        Layout.backgroundWhite,
        Layout.alignItemsCenter,
        Layout.justifyContentCenter,
      ]}>
      <StatusBar backgroundColor={Colors.white} barStyle='dark-content' />
      <LottieView 
        source={Animation.splash_animation} 
        loop 
        autoPlay 
        resizeMode='contain'
        style={{width: '100%', height:200,}}
      />
      <View style={[Layout.positionAbsolute, {bottom: 30}]}>
        <Text style={{color: Colors.text, fontSize: 16}}>
          by <Text style={{color: Colors.text, fontSize: 18}}>Schedule</Text>
        </Text>
      </View>
    </SafeAreaView>
  )
}

export default SplashScreenContainer