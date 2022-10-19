import { Platform } from "react-native"

export const Colors = {
  transparent: 'rgba(0,0,0,0)',
  white: '#FFFFFF',
  primary: '#5EC4BA',
  danger: '#F8265B',
  baseColor: '#FFDB38',
  gray1: '#F4F4F4',
  gray2: '#B1B1B1',
  text: '#212529',
}

export const NavigationColors = {
  primary: Colors.primary,
}

export const PlatformConfig = {
  android: Platform.OS == 'android',
  ios: Platform.OS == 'ios'
}

export const FontSize = {
  extraSmall: 12,
  small: 16,
  regular: 20,
  large: 40,
}

const tiny = 5 // 10
const small = tiny * 2 // 10
const regular = tiny * 3 // 15
const large = regular * 2 // 30

const tinyPercent = '5%'
const smallPercent = '10%'
const regularPercent = '15%'
const largePercent = '30%'

export const MetricsSizes = {
  tiny,
  small,
  regular,
  large,
  tinyPercent,
  smallPercent,
  regularPercent,
  largePercent
}

export default {
  Colors,
  NavigationColors,
  FontSize,
  MetricsSizes,
  PlatformConfig,
}