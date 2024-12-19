import React, { useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { TextInput, Text, Button, Title, Surface, useTheme } from 'react-native-paper';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { getFirstScreen } from '../(onboarding)/constants/screenConfig';

export default function RegisterScreen() {
  const theme = useTheme();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async () => {
    const firstScreen = getFirstScreen();
    console.log('First screen:', firstScreen);
    router.push(`/(onboarding)/screens/${firstScreen}`);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Surface style={styles.surface} elevation={4}>
        <Image 
          source={require('../../assets/images/sakinah-logo.png')} 
          style={styles.logo}
        />
        <Title style={styles.title}>Create Account</Title>
        <Text style={styles.subtitle}>Sign up to get started</Text>

        {error ? (
          <Text style={styles.error}>{error}</Text>
        ) : null}

        <TextInput
          label="Email"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          keyboardType="email-address"
          autoCapitalize="none"
          mode="outlined"
          contentStyle={styles.inputContent}
          left={<TextInput.Icon icon="email" />}
        />

        <TextInput
          label="Password"
          value={password}
          onChangeText={setPassword}
          style={styles.input}
          secureTextEntry
          mode="outlined"
          contentStyle={styles.inputContent}
          left={<TextInput.Icon icon="lock" />}
          right={<TextInput.Icon icon="eye" />}
        />

        <TextInput
          label="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          style={styles.input}
          secureTextEntry
          mode="outlined"
          contentStyle={styles.inputContent}
          left={<TextInput.Icon icon="lock" />}
          right={<TextInput.Icon icon="eye" />}
        />

        <Button 
          mode="contained" 
          onPress={handleRegister} 
          style={styles.button}
          contentStyle={styles.buttonContent}
        >
          Sign Up
        </Button>

        <Button 
          mode="text"
          onPress={() => router.push('/(auth)/login')}
          style={styles.loginButton}
        >
          Already have an account? Sign In
        </Button>
      </Surface>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  surface: {
    width: '100%',
    maxWidth: 400,
    padding: 30,
    borderRadius: 15,
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
    borderRadius: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 24,
  },
  input: {
    width: '100%',
    marginBottom: 16,
    backgroundColor: 'transparent',
  },
  inputContent: {
    backgroundColor: 'transparent',
  },
  button: {
    width: '100%',
    marginTop: 8,
    borderRadius: 8,
  },
  buttonContent: {
    paddingVertical: 8,
  },
  error: {
    color: '#ef5350',
    marginBottom: 16,
    textAlign: 'center',
  },
  loginButton: {
    marginTop: 16,
  },
}); 