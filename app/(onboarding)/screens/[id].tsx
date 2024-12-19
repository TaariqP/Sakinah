import React from 'react';
import OnboardingScreenRenderer from '../../../components/ui/OnboardingScreenRenderer';
import { getScreenConfig } from '../constants/screenConfig';
import { useLocalSearchParams, usePathname } from 'expo-router';

export default function DynamicOnboardingScreen() {
  // Use useLocalSearchParams() to get the "screen" param
  const pathname = usePathname();
console.log('Current pathname:', pathname); // Logs the full current route
  const { id } = useLocalSearchParams();
  console.log('Screen param:', id);
  
  const config = getScreenConfig(id as string);
  if (!config) {
    console.log('No config found for screen:', screen);
    return null;
  }
  return <OnboardingScreenRenderer config={config} />;
}
