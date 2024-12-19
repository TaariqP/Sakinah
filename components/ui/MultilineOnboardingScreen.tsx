import React, { useState } from 'react';
import { TextInput } from 'react-native-paper';
import BaseOnboardingScreen from './BaseOnboardingScreen';

interface MultilineOnboardingScreenProps {
  name: string;
  title: string;
  label?: string;
  numberOfLines?: number;
}

export default function MultilineOnboardingScreen({ 
  name, 
  title, 
  label, 
  numberOfLines = 6 
}: MultilineOnboardingScreenProps) {
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
        multiline
        numberOfLines={numberOfLines}
        style={{ height: numberOfLines * 20 }}
      />
    </BaseOnboardingScreen>
  );
} 