import Variables from './Variables'
import { DefaultVariables, Fonts, Gutters, Layout, Animation, Borders } from './index'

export type ThemeVariables = {
  Colors: typeof Variables.Colors
  NavigationColors: typeof Variables.NavigationColors
  FontSize: typeof Variables.FontSize
  MetricsSizes: typeof Variables.MetricsSizes,
  PlatformConfig: typeof Variables.PlatformConfig
}

export type Theme<A, F, G, I, L, B, C> = ThemeVariables & {
  Animation: A,
  Fonts: F
  Gutters: G
  Images: I
  Layout: L
  Borders: B
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

const animation = Animation(DefaultVariables)
const fonts = Fonts(DefaultVariables)
const gutters = Gutters(DefaultVariables)
const images = Images(DefaultVariables)
const layout = Layout(DefaultVariables)
const borders = Borders(DefaultVariables)

export type CommonParams<C> = ThemeVariables &
  Pick<
    Theme<typeof animation, typeof fonts, typeof gutters, typeof images, typeof layout, typeof borders,  C>,
    'Animation' | 'Fonts' | 'Gutters' | 'Images' | 'Layout' | 'Borders'
  >