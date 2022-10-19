import { View, Text } from 'react-native'
import React from 'react'
import { HeaderInterfaces } from '@/Services/Types/InterfaceType'
import useTheme from '@/Hooks/useTheme'

const HeaderComponent:React.FC<HeaderInterfaces> = ({
  leftSide,
  title,
  rightSide,
  headerContainerStyle
}) => {
  const { Layout, Gutters, Fonts } = useTheme();
  return (
    <View 
      style={[
        Layout.row, 
        Layout.alignItemsCenter, 
        Gutters.regularMargin, 
        headerContainerStyle
      ]}
    >
      <View style={[{flex: 0.5}]}>
        {leftSide}
      </View>
      <View 
        style={[
          Layout.fill, 
          leftSide && rightSide
            ? Layout.alignItemsCenter 
            : Layout.alignItemsStart,
        ]}>
        <Text style={[Fonts.textSmall, Fonts.textBold]}>{title}</Text>
      </View>
      <View style={[Layout.alignItemsEnd, {flex: 0.5}]}>
        {rightSide}
      </View>
    </View>
  )
}

export default HeaderComponent