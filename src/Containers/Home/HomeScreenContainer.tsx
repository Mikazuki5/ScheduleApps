import { View, Text, StatusBar, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import useTheme from '@/Hooks/useTheme'
import { HeaderComponent } from '@/Components'
import LottieView from 'lottie-react-native'
import moment from 'moment'

const HomeScreenContainer = () => {
  const {Colors, Layout, Animation, Images, Borders, Gutters, Fonts} = useTheme();
  const currentDate = moment().locale('id')
  return (
    <SafeAreaView style={[Layout.fill, Layout.backgroundWhite]}>
      <StatusBar backgroundColor={Colors.baseColor} barStyle='dark-content' />
      <View 
        style={[
          Borders.regularBRBorderR,
          Borders.regularBLBorderR,
          Gutters.largeBPadding,
          {backgroundColor: Colors.baseColor}
        ]}
      >
        <HeaderComponent 
          title='Live Attendance'
          leftSide={
            <TouchableOpacity>
              <Image 
                source={Images.user_icon} 
                style={{width: '55%', height: 45}} 
                resizeMode='cover'
              />
            </TouchableOpacity>
          }
          rightSide={
            <TouchableOpacity>
              <LottieView 
                source={Animation.notification} 
                loop={false}
                autoPlay 
                resizeMode='contain'
                style={{width: '100%', height:35,}}
              />
            </TouchableOpacity>
          }
        />
        <View 
          style={[
            Layout.alignItemsCenter,
            Gutters.largeBPadding,
          ]}
        >
          <Text style={[Fonts.textExtraLarge, Fonts.textBold, Fonts.textCenter]}>{(currentDate?.format('LT')).replace('PM' || 'AM', '')}</Text>
          <Text style={[Fonts.textExtraSmall, Fonts.textBold, {lineHeight:13}]}>{currentDate?.format('dddd, D MMM YYYY')}</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreenContainer