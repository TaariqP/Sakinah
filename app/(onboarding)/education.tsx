import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { OnboardingScreen } from '@/components/ui/OnboardingScreen';
import { router } from 'expo-router';

export default function EducationScreen() {
  const [education, setEducation] = useState('');

  const handleNext = async () => {
    if (education) {
      // Save to your user profile state/context/storage
      await saveUserProfile({ education });
      router.push('/(onboarding)/height'); // Assuming height is the next step
    }
  };

  return (
    <OnboardingScreen
      title="What's your education level?"
      subtitle="Select your highest level of education"
      onNext={handleNext}
    >
      <View style={styles.pickerContainer}>
        <RNPickerSelect
          onValueChange={(value) => setEducation(value)}
          items={[
            { label: "High School", value: "High School" },
            { label: "Some College", value: "Some College" },
            { label: "Bachelor's Degree", value: "Bachelor's Degree" },
            { label: "Master's Degree or Higher", value: "Master's Degree or Higher" },
            { label: "Trade/Technical School", value: "Trade/Technical School" },
          ]}
          placeholder={{ label: "Select your education level", value: null }}
          style={pickerSelectStyles}
        />
      </View>
    </OnboardingScreen>
  );
}

const styles = StyleSheet.create({
  pickerContainer: {
    marginVertical: 16,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
}); 