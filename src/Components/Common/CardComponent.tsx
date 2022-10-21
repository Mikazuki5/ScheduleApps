import useTheme from "@/Hooks/useTheme"
import { CardInterfaces } from "@/Services/Types/InterfaceType"
import React from "react"
import { TouchableOpacity, Text, View } from "react-native"

export const CardWithTouchable:React.FC<CardInterfaces> = ({
  children,
  cardCustomStyle,
  onSubmit
}) => {
  const { Colors, Gutters, Borders } = useTheme()
  return (
    <TouchableOpacity 
      disabled={!onSubmit}
      onPress={onSubmit}
      style={
        cardCustomStyle 
          ? cardCustomStyle 
          : [
              Borders.regularBRadius,
              Gutters.regularHPadding,
              Gutters.smallVPadding,
              Gutters.smallVMargin,
              {
                backgroundColor: Colors.gray1
              }
            ]
          }
        >
      {children}
    </TouchableOpacity>
  )
}

export const CardWithEmptyState:React.FC<CardInterfaces> = ({
  children,
}) => {
  const { Layout, Colors, Gutters, Borders } = useTheme()
  return (
    <View 
      style={
        [
          Layout.alignItemsCenter,
          Borders.regularBRadius,
          Gutters.regularHPadding,
          Gutters.largeVPadding,
          Gutters.smallVMargin,
          {
            backgroundColor: Colors.white,
            borderWidth: 2,
            borderColor: Colors.gray2,
            borderStyle:'dashed'
          }
        ]
      }
    >
      {children}
    </View>
  )
}