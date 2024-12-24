import React from 'react';
import { View, StyleSheet } from 'react-native';
import { OnboardingScreen } from '@/components/ui/OnboardingScreen';
import { router } from 'expo-router';
import { saveMyUserProfile } from '@/utils/myProfile';
import { getNextScreen } from '@/app/(onboarding)/constants/screenConfig';

interface BaseOnboardingScreenProps {
  name: string;
  title: string;
  value: string;
  onValueChange: (value: string) => void;
  children: React.ReactNode;
}

export default function BaseOnboardingScreen({ 
  name, 
  title, 
  value, 
  onValueChange,
  children 
}: BaseOnboardingScreenProps) {
  const handleNext = async () => {
    await saveMyUserProfile({ [name]: value });
    const nextScreen = getNextScreen(name);
    router.push(`/(onboarding)/screens/${nextScreen}`);
  };

  return (
    <OnboardingScreen
      title={title}
      onNext={handleNext}
    >
      <View style={styles.container}>
        {children}
      </View>
    </OnboardingScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
  },
}); 