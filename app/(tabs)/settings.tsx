import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Text, Button, Surface } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function SettingsScreen() {
  const handleDeleteAccount = () => {
    console.log('Delete Account');
    // Add your delete account logic here
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Surface style={styles.settingsCard} elevation={2}>
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
            icon={({ size, color }) => (
              <MaterialCommunityIcons name="account-edit" size={size} color={color} />
            )}
            style={styles.button}
            contentStyle={styles.buttonContent}
            onPress={() => console.log('Edit Profile')}
          >
            Edit Profile
          </Button>

          <Button
            mode="contained"
            icon={({ size, color }) => (
              <MaterialCommunityIcons name="delete" size={size} color={color} />
            )}
            style={styles.button}
            contentStyle={styles.buttonContent}
            onPress={handleDeleteAccount}
          >
            Delete Account
          </Button>

          <Button
            mode="contained"
            icon={({ size, color }) => (
              <MaterialCommunityIcons name="account" size={size} color={color} />
            )}
            style={styles.button}
            contentStyle={styles.buttonContent}
            onPress={() => console.log('View Profile')}
          >
            View Profile
          </Button>

          <Button
            mode="contained"
            icon={({ size, color }) => (
              <MaterialCommunityIcons name="email" size={size} color={color} />
            )}
            style={styles.button}
            contentStyle={styles.buttonContent}
            onPress={() => console.log('Contact Us')}
          >
            Contact Us
          </Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 20,
  },
  content: {
    padding: 16,
  },
  settingsCard: {
    alignItems: 'center',
    padding: 16,
    marginBottom: 16,
  },
  settingsImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 14,
    color: 'gray',
  },
  buttonContainer: {
    marginTop: 16,
  },
  button: {
    marginBottom: 8,
  },
  buttonContent: {
    flexDirection: 'row-reverse',
  },
}); 