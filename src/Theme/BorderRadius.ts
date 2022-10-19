import { StyleSheet } from "react-native"
import { ThemeVariables } from "./theme"

type BorderRadius = 
  | 'BRadius'
  | 'TRBorderR'
  | 'TLBorderR'
  | 'BRBorderR'
  | 'BLBorderR'

type BorderRadiusKeys = `${keyof ThemeVariables['MetricsSizes']}${BorderRadius}`

type Borders = {
  [key in BorderRadiusKeys]: {
    [ k in string ]: number
  }
}

export default function({ MetricsSizes }: ThemeVariables): Borders {
  return StyleSheet.create(
    Object.entries(MetricsSizes).reduce(
      (acc, [key, value]) => ({
        ...acc,
        [`${key}BRadius`]: {
          borderRadius: value,
        },
        [`${key}TRBorderR`]: {
          borderTopRightRadius: value,
        },
        [`${key}TLBorderR`]: {
          borderTopLeftRadius: value,
        },
        [`${key}BRBorderR`]: {
          borderBottomRightRadius: value,
        },
        [`${key}BLBorderR`]: {
          borderBottomLeftRadius: value,
        }
      }),
      {}
    ) as Borders,
  )
}