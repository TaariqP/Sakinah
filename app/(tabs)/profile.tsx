import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Surface, Button, Text } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Header } from '@/components/ui/Header';
import { router } from 'expo-router';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Header title="Profile" />
      <View style={styles.content}>
        <Surface style={styles.profileCard} elevation={2}>
          <Image
            source={{ uri: 'https://picsum.photos/seed/profile/200' }}
            style={styles.profileImage}
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
              <MaterialCommunityIcons name="cog" size={size} color={color} />
            )}
            style={styles.button}
            contentStyle={styles.buttonContent}
            onPress={() => console.log('Settings')}
          >
            Settings
          </Button>

          <Button
            mode="contained"
            icon={({ size, color }) => (
              <MaterialCommunityIcons name="email" size={size} color={color} />
            )}
            style={styles.button}
            contentStyle={styles.buttonContent}
            onPress={() => router.push('/(settings)/contact')}
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
  },
  content: {
    flex: 1,
    padding: 20,
  },
  profileCard: {
    padding: 20,
    alignItems: 'center',
    borderRadius: 15,
    backgroundColor: 'white',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  email: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
  buttonContainer: {
    marginTop: 20,
  },
  button: {
    marginVertical: 8,
    borderRadius: 8,
  },
  buttonContent: {
    paddingVertical: 8,
  },
}); 