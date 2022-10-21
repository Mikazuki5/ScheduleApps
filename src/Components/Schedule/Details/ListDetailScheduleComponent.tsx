import { View, Text } from 'react-native'
import React from 'react'
import { DetailsScheduleIntefaces } from '@/Services/Types/InterfaceType'
import { CardWithTouchable } from '@/Components/Common/CardComponent'
import useTheme from '@/Hooks/useTheme'

const ListDetailScheduleComponent: React.FC<DetailsScheduleIntefaces> = ({
  title,
  type,
  leftContent,
  rightContent
}) => {
  const { Layout, Colors, Gutters, Borders, Fonts } = useTheme();
  return (
    <View style={Gutters.regularBMargin} key={type}>
      <Text style={[Fonts.textBold, Fonts.textSmall]}>{title}</Text>
      <CardWithTouchable
        cardCustomStyle={[
          Layout.row,
          Borders.regularBRadius,
          Gutters.regularHPadding,
          Gutters.smallVPadding,
          Gutters.smallVMargin,
          {
            backgroundColor: Colors.gray1
          }
        ]}
      >
        {leftContent}
        {rightContent}
      </CardWithTouchable>
    </View>
  )
}

export default ListDetailScheduleComponent