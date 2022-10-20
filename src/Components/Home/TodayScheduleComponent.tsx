import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import useTheme from '@/Hooks/useTheme';
import { ClockIcon } from 'react-native-heroicons/outline'
import { CardWithTouchable } from '../Common/CardComponent';

const TodayScheduleComponent = () => {
  const {Colors, Layout, Borders, Gutters, Fonts, Common} = useTheme();
  return (
    <>
      <View style={[Layout.rowHCenter]}>
        <View style={[Layout.fill]}>
          <Text style={[Fonts.textBold, Fonts.textSmall]}>
            TODAY'S SCHEDULE
          </Text>
        </View>
        <TouchableOpacity style={[Layout.fill, Layout.alignItemsEnd]}>
          <Text style={[Fonts.textSmall,{color: Colors.danger, fontWeight: '600'}]}>Refresh</Text>
        </TouchableOpacity>
      </View>
      
      <CardWithTouchable>
        <Text style={[Fonts.textBold, {color: Colors.text}]}>
          Mediterania Garden Residence
        </Text>
        <View style={[Layout.rowHCenter]}>
          <ClockIcon color={Colors.text} size={20} />
          <View style={[Gutters.tinyLMargin]}>
            <Text style={[Fonts.textExtraSmall, {color: Colors.text, fontWeight: '600'}]}>{'08:00 - 17:10'}</Text>
          </View>
        </View>

        <View style={[Layout.rowHCenter, Layout.justifyContentBetween]}>
          <View
            style={[
              Gutters.smallVPadding,
              Gutters.regularHPadding,
              Borders.smallBRadius,
              Gutters.regularTMargin,
              {backgroundColor: Colors.primary}
            ]}
          >
            <Text style={[Fonts.textBold, {color:Colors.white}]}>CLOCK IN</Text>
          </View>
          <View
            style={[
              Gutters.smallVPadding,
              Gutters.regularHPadding,
              Borders.smallBRadius,
              Gutters.regularTMargin,
              {backgroundColor: Colors.danger}
            ]}
          >
            <Text style={[Fonts.textBold, {color:Colors.white}]}>CLOCK OUT</Text>
          </View>
        </View>

        <View style={[Layout.rowHCenter, Gutters.smallBMargin]}>
          <View style={[Layout.fill, Layout.alignItemsCenter]}>
            <Text style={[Fonts.textBold, Fonts.textRegular]}>-- : --</Text>
          </View>
          <View style={[Layout.fill ,Common.dash]} />
          <View style={[Layout.fill, Layout.alignItemsCenter]}>
            <Text style={[Fonts.textBold, Fonts.textRegular]}>-- : --</Text>
          </View>
        </View>
      </CardWithTouchable>
    </>
  )
}

export default TodayScheduleComponent