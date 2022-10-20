import useTheme from "@/Hooks/useTheme"
import { CardWithTouchableInterfaces } from "@/Services/Types/InterfaceType"
import React from "react"
import { TouchableOpacity, Text } from "react-native"

export const CardWithTouchable:React.FC<CardWithTouchableInterfaces> = ({
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