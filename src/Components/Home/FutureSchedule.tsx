import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { DummySchedule } from '@/Services/Dummy/Dummy'
import useTheme from '@/Hooks/useTheme';
import { CardWithTouchable } from '../Common/CardComponent';
import { ClockIcon } from 'react-native-heroicons/outline'

const FutureSchedule = () => {
  const {Colors, Layout, Borders, Gutters, Fonts, Common} = useTheme();
  const _renderItem = ({item, index}: any) => {
    return(
      <>
        {item?.schedule ? (
          <CardWithTouchable 
            cardCustomStyle={[
              Borders.regularBRadius,
              Gutters.regularHPadding,
              Gutters.smallVPadding,
              Gutters.smallVMargin,
              Gutters.smallRMargin,
              {
                backgroundColor: Colors.gray1,
                width: 300,
              }
            ]}
          >
            <View>
              <Text>{item.day}</Text>
              <Text style={[Fonts.textBold, Fonts.textLarge, {lineHeight:42}]}>{item.date}</Text>
            </View>
            <View style={[Gutters.largeTMargin]}>
              <Text style={[Fonts.textBold, {color: Colors.text}]}>
                {item?.schedule?.place}
              </Text>
              <View style={[Layout.rowHCenter]}>
                <ClockIcon color={Colors.text} size={20} />
                <View style={[Gutters.tinyLMargin]}>
                  <Text style={[Fonts.textExtraSmall, {color: Colors.text, fontWeight: '600'}]}>{'08:00 - 17:10'}</Text>
                </View>
              </View>
            </View>
          </CardWithTouchable>
        ): null}
      </>
    )
  }

  return (
    <>
      <View style={[Layout.rowHCenter, Gutters.tinyTMargin]}>
        <View style={[Layout.fill]}>
          <Text style={[Fonts.textBold, Fonts.textSmall]}>
            NEXT SCHEDULE
          </Text>
        </View>
        <TouchableOpacity style={[Layout.fill, Layout.alignItemsEnd]}>
          <Text style={[Fonts.textSmall,{color: Colors.danger, fontWeight: '600'}]}>See All</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={DummySchedule}
        keyExtractor={(item, index) => index.toString()}
        renderItem={_renderItem}
        horizontal
        style={[{height: 50}]}
      />
    </>
  )
}

export default FutureSchedule