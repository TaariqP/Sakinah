import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Text, Button, Surface } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function SettingsScreen() {
  const router = useRouter();

  const handleDeleteAccount = () => {
    console.log('Delete Account');
    // Add your delete account logic here
  };

  const handleViewProfile = () => {
    // Navigate to the ViewProfile screen with the user ID
    router.push('/(settings)/viewprofile');
  };

  return (
    <View style={styles.container}>
      <Surface style={styles.settingsCard} elevation={4}>
        <Image
          source={{ uri: 'https://picsum.photos/seed/settings/200' }}
          style={styles.settingsImage}
        />
        <Text style={styles.name}>John Doe</Text>
        <Text style={styles.email}>john.doe@example.com</Text>
      </Surface>

      <View style={styles.buttonContainer}>
        <Button
          mode="contained"
          icon="account-edit"
          style={styles.button}
          contentStyle={styles.buttonContent}
          onPress={() => console.log('Edit Profile')}
        >
          Edit Profile
        </Button>

        <Button
          mode="contained"
          icon="delete"
          buttonColor="#d9534f"
          style={styles.button}
          contentStyle={styles.buttonContent}
          onPress={handleDeleteAccount}
        >
          Delete Account
        </Button>

        <Button
          mode="outlined"
          icon="account"
          style={styles.outlinedButton}
          contentStyle={styles.buttonContent}
          onPress={handleViewProfile}
        >
          View Profile
        </Button>

        <Button
          mode="outlined"
          icon="email"
          style={styles.outlinedButton}
          contentStyle={styles.buttonContent}
          onPress={() => console.log('Contact Us')}
        >
          Contact Us
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingTop: 40, // Increased padding from the top
    paddingHorizontal: 16,
  },
  settingsCard: {
    alignItems: 'center',
    padding: 24,
    marginBottom: 24,
    borderRadius: 16,
    backgroundColor: '#f9f9f9',
  },
  settingsImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  name: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  email: {
    fontSize: 14,
    color: '#777',
  },
  buttonContainer: {
    marginTop: 16,
  },
  button: {
    marginBottom: 12,
    borderRadius: 8,
  },
  outlinedButton: {
    marginBottom: 12,
    borderRadius: 8,
    borderColor: '#007bff',
  },
  buttonContent: {
    flexDirection: 'row-reverse',
    paddingVertical: 8,
  },
});
