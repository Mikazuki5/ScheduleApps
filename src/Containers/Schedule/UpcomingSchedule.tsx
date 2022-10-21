import { View, Text, SafeAreaView, StatusBar, TouchableOpacity } from 'react-native'
import React from 'react'
import useTheme from '@/Hooks/useTheme'
import { HeaderComponent, ListUpcomingSchedule } from '@/Components'
import LottieView from 'lottie-react-native'
import { ArrowLeftIcon } from 'react-native-heroicons/outline'

const UpcomingSchedule = ({navigation}: any) => {
  const { Layout, Colors, Gutters, Fonts, Animation, Common } = useTheme()
  return (
    <SafeAreaView style={[Layout.fill, Layout.backgroundWhite]}>
      <StatusBar backgroundColor={Colors.baseColor} barStyle='dark-content' />
      <View 
        style={[
          Gutters.smallBPadding,
          {backgroundColor: Colors.baseColor}
        ]}
      >
        <HeaderComponent 
          title='UPCOMING SCHEDULE'
          leftSide={
            <TouchableOpacity>
              <ArrowLeftIcon color={Colors.text} size={20} />
            </TouchableOpacity>
          }
          rightSide={
            <TouchableOpacity>
              <LottieView 
                source={Animation.refresh} 
                loop={false}
                autoPlay 
                resizeMode='contain'
                style={{width: '100%', height:30,}}
              />
            </TouchableOpacity>
          }
        />
      </View>
      
      <View style={[Layout.fill, Gutters.regularTMargin]}>
        <View style={[Gutters.regularHMargin]}>
          <Text style={[Fonts.textBold, Fonts.textSmall]}>APRIL 2022</Text>
        </View>

        <View style={[Layout.overFlow, Gutters.smallBPadding]}>
          <View
            style={Common.bottomShadow} 
          />
        </View>

        <ListUpcomingSchedule openDetailSchedule={(val:any) => navigation.navigate('detailSchedule', {data: val})} />
      </View>
    </SafeAreaView>
  )
}

export default UpcomingSchedule