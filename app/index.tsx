import React from 'react';
import { View, StyleSheet, Image, ImageBackground, Pressable } from 'react-native';
import { Text } from 'react-native-paper';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

export default function HomeScreen() {
  return (
    <ImageBackground 
      source={require('../assets/images/background.jpg')} // Replace with your background image
      style={styles.container}
    >
      <SafeAreaView style={styles.safeArea}>
        {/* Back Button */}
        <Pressable style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={24} color="white" />
        </Pressable>

        <View style={styles.content}>
          {/* Logo and Text */}
          <View style={styles.headerContainer}>
            <Text style={styles.logo}>Sakinah</Text>
            <Text style={styles.tagline}>
              The Muslim Marriage App
            </Text>
          </View>

          {/* Buttons Container */}
          <View style={styles.buttonContainer}>
            {/* Phone Number Button */}
            {/* <Pressable 
              style={[styles.button, styles.phoneButton]} 
              onPress={() => router.push('/(auth)/phone-login')}
            >
              <Ionicons name="call-outline" size={24} color="white" />
              <Text style={[styles.buttonText, styles.phoneButtonText]}>
                Continue with Phone Number
              </Text>
            </Pressable> */}

            {/* Email Button */}
            <Pressable 
              style={[styles.button, styles.emailButton]}
              onPress={() => router.push('/(auth)/login')}
            >
              <MaterialCommunityIcons name="login" size={24} color="white" />
              <Text style={[styles.buttonText, styles.emailButtonText]}>
                 Login
              </Text>
            </Pressable>

            <Pressable 
              style={[styles.button, styles.emailButton]}
              onPress={() => router.push('/(auth)/login')}
            >
              <Ionicons name="mail-outline" size={24} color="white" />
              <Text style={[styles.buttonText, styles.emailButtonText]}>
                Register
              </Text>
            </Pressable>
            <Pressable 
              style={[styles.button, styles.emailButton]}
              onPress={() => router.push('/(tabs)/discover')}
            >
              <Ionicons name="mail-outline" size={24} color="white" />
              <Text style={[styles.buttonText, styles.emailButtonText]}>
                Dev Only - Go to Discover
              </Text>
            </Pressable>
          </View>

        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  backButton: {
    padding: 16,
  },
  content: {
    flex: 1,
    padding: 24,
    justifyContent: 'space-between',
  },
  headerContainer: {
    alignItems: 'center',
    marginTop: '20%',
  },
  logo: {
    fontSize: 64,
    fontFamily: 'cursive', // You'll need to import a custom font
    color: 'white',
    marginBottom: 16,
  },
  tagline: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    lineHeight: 24,
  },
  buttonContainer: {
    width: '100%',
    gap: 12,
    marginBottom: 24,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 30,
    justifyContent: 'center',
    gap: 12,
  },
  phoneButton: {
    backgroundColor: '#FF4B7E',
  },
  googleButton: {
    backgroundColor: '#4285F4',
  },
  appleButton: {
    backgroundColor: 'white',
  },
  emailButton: {
    backgroundColor: '#1C2732',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: 'white',
  },
  appleButtonText: {
    color: 'black',
  },
  socialIcon: {
    width: 24,
    height: 24,
  },
  termsText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 12,
    marginBottom: 24,
  },
  termsLink: {
    textDecorationLine: 'underline',
  },
  languageSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    marginBottom: 8,
  },
  languageText: {
    color: 'white',
    fontSize: 14,
  },
  versionText: {
    color: 'rgba(255, 255, 255, 0.6)',
    textAlign: 'center',
    fontSize: 12,
  },
});

