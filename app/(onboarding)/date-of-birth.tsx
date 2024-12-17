import React, { useState } from 'react';
import { TextInput } from 'react-native-paper';
import { router } from 'expo-router';
import { OnboardingScreen } from '@/components/ui/OnboardingScreen';

export default function DateOfBirthScreen() {
  const [dateOfBirth, setDateOfBirth] = useState('');

  const handleNext = async () => {
    if (dateOfBirth.trim()) {
      // Save to your user profile state/context/storage
      await saveUserProfile({ dateOfBirth });
      router.push('/(onboarding)/height'); // Assuming height is the next step
    }
  };

  return (
    <OnboardingScreen
      title="When's your birthday?"
      subtitle="Enter your date of birth"
      onNext={handleNext}
    >
      <TextInput
        label="Date of Birth"
        value={dateOfBirth}
        onChangeText={setDateOfBirth}
        mode="outlined"
        placeholder="YYYY-MM-DD"
        keyboardType="numeric"
      />
    </OnboardingScreen>
  );
} 