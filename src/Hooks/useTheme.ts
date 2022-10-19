import { Animation, Common, DefaultVariables, Fonts, Gutters, Layout } from "@/Theme";
import { Theme, ThemeNavigationColors, ThemeNavigationTheme, ThemeVariables } from "@/Theme/theme";
import { DefaultTheme } from "@react-navigation/native";

export default function() {
  let variables = {}
  let partialTheme = {}

  const themeVariables = mergeVariables(variables);

  const fonts = Fonts(themeVariables)
  const gutters = Gutters(themeVariables)
  const layout = Layout(themeVariables)
  const animation = Animation(themeVariables)
  const common = Common({
    ...themeVariables,
    Layout: Layout(themeVariables),
    Gutters: Gutters(themeVariables),
    Fonts: Fonts(themeVariables),
    Animation: Animation(themeVariables)
  })

  const baseTheme: Theme<
    typeof fonts,
    typeof gutters,
    typeof layout,
    typeof common,
    typeof animation
  > = {
    Fonts: fonts,
    Gutters: gutters,
    Layout: layout,
    Common: common,
    Animation: animation,
    ...themeVariables,
  }
  return buildTheme(
    baseTheme,
    formatTheme(themeVariables, partialTheme || {}),
  )
}

const formatTheme = <F, G, L, C, A>(
  variables: ThemeVariables,
  theme: Partial<Theme<F, G, L, C, A>>,
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

const buildTheme = <F, G, L, C, A>(
  baseTheme: Theme<F, G, L, C, A>,
  themeConfig: Partial<Theme<F, G, L, C, A>>,
) => {
  return {
    ...mergeTheme(baseTheme, themeConfig),
    NavigationTheme: mergeNavigationTheme(
      DefaultTheme,
      baseTheme.NavigationColors,
    ),
  }
}

const mergeTheme = <F, G, L, C, A>(
  baseTheme: Theme<F, G, L, C, A>,
  theme: Partial<Theme<F, G, L, C, A>>,
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
