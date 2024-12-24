import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import { OnboardingScreen } from '@/components/ui/OnboardingScreen';
import { router } from 'expo-router';
import { submitMyUserProfile } from '@/utils/myProfile';

export default function WelcomeScreen() {
  const handleNext = async () => {
    await submitMyUserProfile();
    router.push('/(tabs)/discover');
  };

  return (
    <OnboardingScreen
      title="Welcome to Sakinah!"
      onNext={handleNext}
      nextLabel="Get Started"
      isLastStep={true}
    >
      <View style={styles.content}>
        <Text style={styles.text}>
          Thank you for completing your profile. We're excited to help you find your perfect match!
        </Text>
      </View>
    </OnboardingScreen>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 24,
  },
}); 