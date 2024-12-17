import React, { useState } from 'react';
import { TextInput } from 'react-native-paper';
import { router } from 'expo-router';
import { OnboardingScreen } from '@/components/ui/OnboardingScreen';

export default function NameScreen() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleNext = async () => {
    if (firstName.trim() && lastName.trim()) {
      // Save to your user profile state/context/storage
      await saveUserProfile({ firstName, lastName });
      router.push('/(onboarding)/age');
    }
  };

  return (
    <OnboardingScreen
      title="What's your name?"
      subtitle="Let others know what to call you"
      onNext={handleNext}
    >
      <TextInput
        label="First Name"
        value={firstName}
        onChangeText={setFirstName}
        mode="outlined"
        style={{ marginBottom: 16 }}
      />
      <TextInput
        label="Last Name"
        value={lastName}
        onChangeText={setLastName}
        mode="outlined"
      />
    </OnboardingScreen>
  );
} 