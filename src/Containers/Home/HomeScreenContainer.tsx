import { View, Text, StatusBar, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import useTheme from '@/Hooks/useTheme'
import { FutureSchedule, HeaderComponent, TodayScheduleComponent } from '@/Components'
import LottieView from 'lottie-react-native'
import moment from 'moment'

const HomeScreenContainer = ({navigation}: any) => {
  const {Colors, Layout, Animation, Images, Borders, Gutters, Fonts, Common} = useTheme();
  const [date, setDate] = useState(new Date())

  const refreshTime = () => {
    setDate(new Date);
  }
  
  useEffect(() => {
    const timerId = setInterval(refreshTime, 1000)
    return function cleanUp() {
      clearInterval(timerId);
    }
  }, [])
  

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
          <Text style={[Fonts.textExtraLarge, Fonts.textBold, Fonts.textCenter]}>{String(moment(date).locale('id').format('LT'))}</Text>
          <Text style={[Fonts.textExtraSmall, Fonts.textBold, {lineHeight:13}]}>{String(moment(date).format('dddd, D MMMM YYYY'))}</Text>
        </View>
      </View>

      <View style={[Layout.fill, Gutters.regularHMargin, Gutters.regularTMargin]}>
        <TodayScheduleComponent />
        <FutureSchedule openUpcomingSchedule={() => navigation.navigate('upcoming')} />
      </View>
      
      <View style={[Layout.row]}>
        <TouchableOpacity 
          style={[Layout.fill, Gutters.regularVPadding, Gutters.tinyBMargin, Gutters.regularHMargin, Borders.regularBRadius, Layout.alignItemsCenter,{backgroundColor: Colors.primary}]}>
          <Text style={[Fonts.textBold, Fonts.textSmall, { color: Colors.white}]}>Clock In</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[Layout.fill, Gutters.regularVPadding, Gutters.tinyBMargin, Gutters.regularHMargin, Borders.regularBRadius, Layout.alignItemsCenter, {backgroundColor: Colors.danger}]}>
          <Text style={[Fonts.textBold, Fonts.textSmall, { color: Colors.white}]}>Clock In</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreenContainer