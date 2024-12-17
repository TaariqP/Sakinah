/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const palette = {
  // Primary colors
  primary: '#FF6B6B', // Coral pink - main action color
  primaryLight: '#FF8787',
  primaryDark: '#FF5252',

  // Secondary colors
  secondary: '#4ECDC4', // Turquoise - accent color
  secondaryLight: '#6ED4CD',
  secondaryDark: '#45B7B0',

  // Neutral colors
  white: '#FFFFFF',
  background: '#F8F9FA',
  surfaceLight: '#FFFFFF',
  surfaceDark: '#1A1A1A',
  
  // Text colors
  textPrimary: '#2D3436',
  textSecondary: '#636E72',
  textLight: '#B2BEC3',

  // Status colors
  success: '#00B894',
  error: '#FF7675',
  warning: '#FDCB6E',
  info: '#74B9FF',
};

export const Colors = {
  light: {
    text: palette.textPrimary,
    textSecondary: palette.textSecondary,
    background: palette.background,
    surface: palette.surfaceLight,
    primary: palette.primary,
    secondary: palette.secondary,
    tint: palette.primary,
    tabIconDefault: palette.textLight,
    tabIconSelected: palette.primary,
    card: palette.white,
    border: palette.textLight,
    notification: palette.error,
  },
  dark: {
    text: palette.white,
    textSecondary: palette.textLight,
    background: palette.surfaceDark,
    surface: '#2D3436',
    primary: palette.primaryLight,
    secondary: palette.secondaryLight,
    tint: palette.primaryLight,
    tabIconDefault: palette.textLight,
    tabIconSelected: palette.primaryLight,
    card: '#2D3436',
    border: '#636E72',
    notification: palette.error,
  },
};
