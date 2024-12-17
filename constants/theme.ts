import { MD3LightTheme as DefaultTheme } from 'react-native-paper';

const customTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#FF6B6B', // Coral pink
    secondary: '#4ECDC4', // Turquoise
    background: '#F5F5F5',
    surface: '#FFFFFF',
    text: '#333333',
    error: '#FF7675',
    // Add more custom colors as needed
  },
  roundness: 8, // Consistent border radius
  fonts: {
    regular: {
      fontFamily: 'SpaceMono',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'SpaceMono',
      fontWeight: '500',
    },
    light: {
      fontFamily: 'SpaceMono',
      fontWeight: '300',
    },
    thin: {
      fontFamily: 'SpaceMono',
      fontWeight: '100',
    },
  },
};

export default customTheme; 