import { DefaultTheme } from "@react-navigation/native";
import { Theme, ThemeNavigationColors, ThemeNavigationTheme, ThemeVariables } from "@/Theme/theme";
import { Animation, Borders, Common, DefaultVariables, Fonts, Gutters, Images, Layout } from "@/Theme";

export default function() {
  let variables = {}
  let partialTheme = {}

  const themeVariables = mergeVariables(variables);

  const fonts = Fonts(themeVariables)
  const gutters = Gutters(themeVariables)
  const images = Images(themeVariables)
  const layout = Layout(themeVariables)
  const animation = Animation(themeVariables)
  const borders = Borders(themeVariables)
  const common = Common({
    ...themeVariables,
    Layout: Layout(themeVariables),
    Gutters: Gutters(themeVariables),
    Images: Images(themeVariables),
    Fonts: Fonts(themeVariables),
    Animation: Animation(themeVariables),
    Borders: Borders(themeVariables)
  })

  const baseTheme: Theme<
    typeof animation,
    typeof fonts,
    typeof gutters,
    typeof images,
    typeof layout,
    typeof borders,
    typeof common
  > = {
    Animation: animation,
    Fonts: fonts,
    Gutters: gutters,
    Images: images,
    Layout: layout,
    Borders: borders,
    Common: common,
    ...themeVariables,
  }
  return buildTheme(
    baseTheme,
    formatTheme(themeVariables, partialTheme || {}),
  )
}

const formatTheme = <A, F, G, I, L, B, C>(
  variables: ThemeVariables,
  theme: Partial<Theme<A, F, G, I, L, B, C>>,
) => {
  return Object.entries(theme).reduce((acc, [name, generate]) => {
    return {
      ...acc,
      [name]: (generate as any)(variables),
    }
  }, theme)
}

const mergeVariables = (
  themeConfig: Partial<ThemeVariables>
) => {
  return Object.entries(DefaultVariables).reduce((acc, [group, vars]) => {
    const theme:
      | Record<keyof typeof DefaultVariables, typeof vars>
      | undefined = (themeConfig as any)[group]

    return {
      ...acc,
      [group]: {
        ...vars,
        ...(theme || {})
      },
    }
  }, DefaultVariables)
}

const buildTheme = <A, F, G, I, L, B, C>(
  baseTheme: Theme<A, F, G, I, L, B, C>,
  themeConfig: Partial<Theme<A, F, G, I, L, B, C>>,
) => {
  return {
    ...mergeTheme(baseTheme, themeConfig),
    NavigationTheme: mergeNavigationTheme(
      DefaultTheme,
      baseTheme.NavigationColors,
    ),
  }
}

const mergeTheme = <A, F, G, I, L, B, C>(
  baseTheme: Theme<A, F, G, I, L, B, C>,
  theme: Partial<Theme<A, F, G, I, L, B, C>>,
) =>
  Object.entries(baseTheme).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [key]: {
        ...((value as any) || {}),
        ...((theme as any)[key] || {}),
      },
    }),
    baseTheme,
  ) as typeof baseTheme

const mergeNavigationTheme = (
  reactNavigationTheme: ThemeNavigationTheme,
  overrideColors: Partial<ThemeNavigationColors>,
) => ({
  ...reactNavigationTheme,
  colors: {
    ...reactNavigationTheme.colors,
    ...overrideColors,
  },
})
