import { Stack } from 'expo-router';

export default function SettingsLayout() {
  return (
    <Stack 
      screenOptions={{ 
        headerShown: false,
        animation: 'slide_from_right'
      }}
    >
      <Stack.Screen name="viewprofile" />
      <Stack.Screen name="contact" />

    </Stack>
  );
} 