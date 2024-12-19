import React from 'react';
import TextOnboardingScreen from './TextOnboardingScreen';
import PickerOnboardingScreen from './PickerOnboardingScreen';
import MultilineOnboardingScreen from './MultilineOnboardingScreen';
import { OnboardingScreen } from '../../app/(onboarding)/constants/screenConfig';

interface OnboardingScreenRendererProps {
  config: OnboardingScreen;
}

export default function OnboardingScreenRenderer({ config }: OnboardingScreenRendererProps) {
  switch (config.type) {
    case 'picker':
      return (
        <PickerOnboardingScreen
          name={config.name}
          title={config.title}
          options={config.options}
        />
      );
    case 'multiline':
      return (
        <MultilineOnboardingScreen
          name={config.name}
          title={config.title}
          {...config.inputProps}
        />
      );
    case 'text':
      return (
        <TextOnboardingScreen
          name={config.name}
          title={config.title}
          {...config.inputProps}
        />
      );
    default:
      return null;
  }
} 