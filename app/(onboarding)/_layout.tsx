import { Stack } from 'expo-router';

export default function OnboardingLayout() {
  return (
    <Stack 
      screenOptions={{ 
        headerShown: false,
        animation: 'slide_from_right',
        gestureEnabled: false // Prevent back swipe
      }}
    >
      <Stack.Screen name="name" />
      <Stack.Screen name="gender" />
      <Stack.Screen name="date-of-birth" />
      <Stack.Screen name="education" />
      <Stack.Screen name="age" />
      <Stack.Screen name="height" />
      <Stack.Screen name="photos" />
      <Stack.Screen name="bio" />
      <Stack.Screen name="interests" />
    </Stack>
  );
} 