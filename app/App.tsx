import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import romanticTheme from './theme';
import TabsLayout from './(tabs)/_layout';

export default function App() {
  return (
    <PaperProvider theme={romanticTheme}>
      <NavigationContainer>
        <TabsLayout />
      </NavigationContainer>
    </PaperProvider>
  );
} 