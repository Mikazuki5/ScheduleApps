import Variables from './Variables'
import { DefaultVariables, Fonts, Gutters, Layout, Animation } from './index'

export type ThemeVariables = {
  Colors: typeof Variables.Colors
  NavigationColors: typeof Variables.NavigationColors
  FontSize: typeof Variables.FontSize
  MetricsSizes: typeof Variables.MetricsSizes,
  PlatformConfig: typeof Variables.PlatformConfig
}

export type Theme<F, G, L, C, A> = ThemeVariables & {
  Animation: A,
  Fonts: F
  Gutters: G
  // Images: I
  Layout: L
  Common: C
  Variables?: Partial<ThemeVariables>
}

export type ThemeNavigationColors = {
  primary: string
  background: string
  card: string
  text: string
  border: string
  notification: string
}

export type ThemeNavigationTheme = {
  colors: ThemeNavigationColors
}

const fonts = Fonts(DefaultVariables)
const gutters = Gutters(DefaultVariables)
const images = Images(DefaultVariables)
const layout = Layout(DefaultVariables)
const animation = Animation(DefaultVariables)

export type CommonParams<C> = ThemeVariables &
  Pick<
    Theme<typeof fonts, typeof gutters, typeof layout, typeof animation,  C>,
    'Layout' | 'Gutters' | 'Fonts' | 'Animation' 
  >