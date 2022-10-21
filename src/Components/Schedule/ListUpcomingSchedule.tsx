import React from 'react'
import { ClockIcon } from 'react-native-heroicons/outline'
import { View, Text, FlatList } from 'react-native'

import useTheme from '@/Hooks/useTheme'
import { DummySchedule } from '@/Services/Dummy/Dummy'
import { CardWithEmptyState, CardWithTouchable } from '../Common/CardComponent'

const ListUpcomingSchedule = ({openDetailSchedule}: any) => {
  const { Layout, Gutters, Colors, Fonts, Borders } = useTheme();

  const _renderItems = ({item, index}: any) => {
    return(
      <View key={index} style={[Layout.rowHCenter]}>
        <View style={[Layout.alignItemsCenter, {flex: 0.1}]}>
          <Text>{String(item?.day).substring(0, 3)}</Text>
          <Text style={[Fonts.textBold, Fonts.textSmall, {color: 'black'}]}>{String(item?.date).substring(0, 2)}</Text>
        </View>
        <View style={[Layout.fill, Gutters.regularLMargin]}>
          {item?.schedule 
            ? <CardWithTouchable onSubmit={() => openDetailSchedule(item)}>
                <Text style={[Fonts.textBold, {color: Colors.text}]}>{item?.schedule?.place}</Text>
                <View style={[Layout.rowHCenter, Gutters.tinyVMargin]}>
                  <ClockIcon color={Colors.text} size={20} />
                  <View style={[Gutters.tinyLMargin]}>
                    <Text style={[Fonts.textExtraSmall, {color: Colors.text, fontWeight: '600'}]}>{'08:00 - 17:10'}</Text>
                  </View>
                  {item?.isToday && (
                    <View style={[Gutters.tinyVPadding, Gutters.smallHPadding, Gutters.smallLMargin,Borders.tinyBRadius,{backgroundColor: Colors.danger}]}>
                      <Text style={[Fonts.textExtraSmall, {color: Colors.white}]}>TODAY</Text>
                    </View>
                  )}
                </View>
              </CardWithTouchable>
            : <CardWithEmptyState>
                <Text style={[Fonts.textBold, Fonts.textExtraSmall]}>NO SCHEDULE</Text>
              </CardWithEmptyState>  
        }
        </View>
      </View>
    )
  }
  return (
    <FlatList
      data={DummySchedule}
      keyExtractor={(item, index) => index.toString()}
      renderItem={_renderItems}
      style={[Layout.fill, Gutters.regularHMargin]}
    />
  )
}

export default ListUpcomingSchedule