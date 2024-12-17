import React, { useState } from 'react';
import { SegmentedButtons, Button } from 'react-native-paper';
import { router } from 'expo-router';
import { OnboardingScreen } from '@/components/ui/OnboardingScreen';

export default function GenderScreen() {
  const [gender, setGender] = useState<'male' | 'female' | ''>('');

  const handleNext = async () => {
    if (gender) {
      // Save to your user profile state/context/storage
      await saveUserProfile({ gender });
      router.push('/(onboarding)/date-of-birth');
    }
  };

  return (
    <OnboardingScreen
      title="What's your gender?"
      subtitle="Select your gender"
      onNext={handleNext}
    >
      <SegmentedButtons
        value={gender}
        onValueChange={setGender}
        buttons={[
          { value: 'male', label: 'Male' },
          { value: 'female', label: 'Female' },
        ]}
      />
    </OnboardingScreen>
  );
} 