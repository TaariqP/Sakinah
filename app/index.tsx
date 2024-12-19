import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Text, Button, Surface, useTheme } from 'react-native-paper';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const theme = useTheme();

  return (
    <SafeAreaView style={styles.container}>
      <Surface style={styles.content} elevation={0}>
        <View style={styles.logoContainer}>
          <Image 
            source={require('../assets/images/sakinah-logo.png')} 
            style={styles.logo}
          />
          <Text style={[styles.title, { color: theme.colors.primary }]}>
            Sakinah
          </Text>
          <Text style={styles.subtitle}>
            Find your perfect match
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          <Button
            mode="contained"
            onPress={() => router.push('/(auth)/login')}
            style={styles.button}
            contentStyle={styles.buttonContent}
          >
            Sign In
          </Button>

          <Button
            mode="outlined"
            onPress={() => router.push('/(auth)/register')}
            style={[styles.button, styles.registerButton]}
            contentStyle={styles.buttonContent}
          >
            Create Account
          </Button>

          <Button
            mode="text"
            onPress={() => router.push('/(tabs)/discover')}
            style={styles.button}
            contentStyle={styles.buttonContent}
          >
            Go to Discover
          </Button>
        </View>
      </Surface>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: 'transparent',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 16,
    borderRadius: 60,
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 16,
  },
  button: {
    marginBottom: 12,
    borderRadius: 8,
  },
  registerButton: {
    borderWidth: 2,
  },
  buttonContent: {
    paddingVertical: 8,
  },
}); 