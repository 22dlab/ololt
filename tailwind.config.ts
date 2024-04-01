/** @type {import('tailwindcss').Config} */
const {
  Setup,
  RatioBox,
  Layout,
  GridLine,
  PseudoElements,
  DevTools,
  GridGap,
  Container,
  Keyline,
  Spacing,
  Typography,
  ColorTokens,
  ApplyColorVariables,
  Underline,
  Components,
  CssInJs,
  GridLayout,
  SpacingTokens,
  BackgroundFill
} = require('@area17/a17-tailwind-plugins')
const styleConfig = require('./style.config.json')

module.exports = {
  mode: 'jit',
  plugins: [
    Setup,
    RatioBox,
    Layout,
    GridLine,
    PseudoElements,
    DevTools,
    GridGap,
    Container,
    Keyline,
    Spacing,
    Typography,
    ColorTokens,
    ApplyColorVariables,
    Underline,
    Components,
    CssInJs,
    GridLayout,
    SpacingTokens,
    BackgroundFill
  ],
  corePlugins: {
    container: false
  },
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: styleConfig.structure.breakpoints,
    mainColWidths: styleConfig.structure.container,
    innerGutters: styleConfig.structure.gutters.inner,
    outerGutters: styleConfig.structure.gutters.outer,
    columnCount: styleConfig.structure.columns,
    spacing: SpacingTokens(styleConfig.spacing.tokens),
    spacingGroups: styleConfig.spacing.groups,
    fontFamilies: styleConfig.typography.families,
    typesets: styleConfig.typography.typesets,
    colors: styleConfig.color.tokens,
    extend: {
      textColor: ApplyColorVariables(
        styleConfig.color.tokens,
        styleConfig.color.text
      ),
      backgroundColor: ApplyColorVariables(
        styleConfig.color.tokens,
        styleConfig.color.background
      ),
      borderColor: ApplyColorVariables(
        styleConfig.color.tokens,
        styleConfig.color.border
      )
    }
  }
}
