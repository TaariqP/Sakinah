import React, { useState } from 'react';
import { TextInput } from 'react-native-paper';
import BaseOnboardingScreen from './BaseOnboardingScreen';

interface TextOnboardingScreenProps {
  name: string;
  title: string;
  label?: string;
  autoFocus?: boolean;
}

export default function TextOnboardingScreen({ 
  name, 
  title, 
  label, 
  autoFocus 
}: TextOnboardingScreenProps) {
  const [value, setValue] = useState('');

  return (
    <BaseOnboardingScreen
      name={name}
      title={title}
      value={value}
      onValueChange={setValue}
    >
      <TextInput
        label={label || title}
        value={value}
        onChangeText={setValue}
        mode="outlined"
        autoFocus={autoFocus}
      />
    </BaseOnboardingScreen>
  );
} 