import React from 'react';
import { StyleSheet } from 'react-native';
import { Surface, Text, useTheme } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface HeaderProps {
  title: string;
}

export function Header({ title }: HeaderProps) {
  const insets = useSafeAreaInsets();
  const theme = useTheme();

  return (
    <Surface 
      style={[
        styles.header, 
        { 
          paddingTop: insets.top,
          backgroundColor: theme.colors.surface,
        }
      ]} 
      elevation={2}
    >
      <Text 
        style={[
          styles.headerTitle,
          { color: theme.colors.primary }
        ]}
      >
        {title}
      </Text>
    </Surface>
  );
}

const styles = StyleSheet.create({
  header: {
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    paddingBottom: 15,
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 10,
  },
}); 