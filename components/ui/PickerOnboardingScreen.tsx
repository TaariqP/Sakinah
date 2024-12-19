import React, { useState } from 'react';
import { PickerSelect } from '@/components/ui/PickerSelect';
import BaseOnboardingScreen from './BaseOnboardingScreen';

interface PickerOnboardingScreenProps {
  name: string;
  title: string;
  options: Array<{ label: string; value: string }>;
}

export default function PickerOnboardingScreen({ name, title, options }: PickerOnboardingScreenProps) {
  const [value, setValue] = useState(options[0].value);

  return (
    <BaseOnboardingScreen
      name={name}
      title={title}
      value={value}
      onValueChange={setValue}
    >
      <PickerSelect
        value={value}
        onValueChange={setValue}
        items={options}
      />
    </BaseOnboardingScreen>
  );
} 