import { View, Image, SafeAreaView, StatusBar, TouchableOpacity, ScrollView, Text } from 'react-native'
import React from 'react'
import useTheme from '@/Hooks/useTheme';
import { HeaderComponent, ListDetailScheduleComponent } from '@/Components';
import { ArrowLeftIcon, ClockIcon } from 'react-native-heroicons/outline';
import LottieView from 'lottie-react-native'

const DetailSchedule = (props: any) => {
  let data = props?.route?.params?.data;
  const { Layout, Colors, Gutters, Fonts, Animation, Common, Borders } = useTheme();

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
          title={data.date + ' ' + data.years}
          leftSide={
            <TouchableOpacity>
              <ArrowLeftIcon color={Colors.text} size={20} />
            </TouchableOpacity>
          }
          rightSide
        />
      </View>
      <ScrollView style={[Layout.fill, Gutters.regularHMargin, Gutters.regularTMargin]}>
        
        <ListDetailScheduleComponent
          type='store'
          title='STORE'
          leftContent={
            <Image 
              source={data?.schedule?.image} 
              style={[
                Borders.smallBRadius,
                {width: 70, height: 70}
              ]}
              resizeMode='cover'
            />
          }
          rightContent={
            <View style={[Layout.fill, Gutters.smallLMargin]}>
              <View style={[Gutters.smallBMargin]}>
                <Text style={[Fonts.textBold, Fonts.textSmall]}>{data?.schedule?.place}</Text>
                <Text style={[Fonts.textExtraSmall, {color: 'grey', lineHeight: 18}]}>{data?.schedule?.address}</Text>
              </View>
              <TouchableOpacity 
                style={[
                  Gutters.tinyPadding,
                  Layout.alignItemsCenter,
                  Borders.regularBRadius,
                  Gutters.smallBMargin,
                  {borderWidth: 1, width: '50%', borderColor: Colors.danger}
                ]}>
                <Text style={[Fonts.textExtraSmall, {fontWeight: '500', color: Colors.danger}]}>View Maps</Text>
              </TouchableOpacity>
            </View>
          }
        />

        <ListDetailScheduleComponent
          type='timeSchedule'
          title='TIME SHCEDULE'
          rightContent={
            <View style={[Layout.fill]}>
              <View style={[Layout.rowHCenter]}>
                <ClockIcon color={Colors.text} size={20} />
                <View style={[Gutters.tinyLMargin]}>
                  <Text style={[Fonts.textExtraSmall, Fonts.textBold, {color: Colors.text}]}>{'08:00 - 17:10'}</Text>
                </View>
              </View>
            </View>
          }
        />
        
        <ListDetailScheduleComponent
          type='clockIn'
          title='CLOCK IN'
          rightContent={
            <View style={[Layout.fill]}>
              <View style={[Layout.rowHCenter]}>
                <LottieView 
                  source={Animation.scanner} 
                  loop={false}
                  autoPlay 
                  style={{width: 35, height:35,}}
                />
                <View style={[Gutters.tinyLMargin]}>
                  <Text style={[Fonts.textExtraSmall, Fonts.textBold, {color: Colors.text}]}>{'-- : --'}</Text>
                </View>
              </View>
            </View>
          }
        />

        <ListDetailScheduleComponent
          type='clockOut'
          title='CLOCK OUT'
          rightContent={
            <View style={[Layout.fill]}>
              <View style={[Layout.rowHCenter]}>
                <LottieView 
                  source={Animation.scanner} 
                  loop={false}
                  autoPlay 
                  style={{width: 35, height:35,}}
                />
                <View style={[Gutters.tinyLMargin]}>
                  <Text style={[Fonts.textExtraSmall, Fonts.textBold, {color: Colors.text}]}>{'-- : --'}</Text>
                </View>
              </View>
            </View>
          }
        />
      </ScrollView>
    </SafeAreaView>
  )
}

export default DetailSchedule