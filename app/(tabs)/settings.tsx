import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { Text } from 'react-native-paper';
import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function SettingsScreen() {
  const router = useRouter();

  const handleDeleteAccount = () => {
    console.log('Delete Account');
    // Add your delete account logic here
  };

  const MenuItem = ({ icon, title, onPress, IconComponent = Feather, color = "#000" }) => (
    <TouchableOpacity style={styles.menuItem} onPress={onPress}>
      <View style={styles.menuItemContent}>
        <Text style={styles.menuItemText}>{title}</Text>
        <IconComponent name={icon} size={24} color={color} />
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Settings</Text>
      </View>

      {/* Profile Section */}
      <View style={styles.profileSection}>
        <View style={styles.profileImageContainer}>
          <Image
            source={{ uri: 'https://picsum.photos/seed/settings/200' }}
            style={styles.profileImage}
          />
        </View>
        <Text style={styles.profileName}>Tariq</Text>
        <Text style={styles.profileHandle}>@t__r1q</Text>
        <TouchableOpacity>
          <Text style={styles.viewProfile}>View profile</Text>
        </TouchableOpacity>
      </View>

      {/* Menu Items */}
      <View style={styles.menuContainer}>
        <MenuItem 
          title="Edit Profile" 
          icon="edit-2"
          onPress={() => console.log('Edit Profile')}
        />
        <MenuItem 
          title="Contact Us" 
          icon="mail"
          onPress={() => console.log('Contact Us')}
        />
        <MenuItem 
          title="Delete Account" 
          icon="trash-2"
          color="#d9534f"
          onPress={handleDeleteAccount}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  profileSection: {
    alignItems: 'center',
    paddingVertical: 30,
  },
  profileImageContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#00e5bf',
    padding: 3,
  },
  profileImage: {
    width: '100%',
    height: '100%',
    borderRadius: 57,
  },
  profileName: {
    fontSize: 24,
    fontWeight: '600',
    marginTop: 15,
  },
  profileHandle: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
  viewProfile: {
    fontSize: 16,
    color: '#666',
    marginTop: 10,
  },
  menuContainer: {
    paddingHorizontal: 20,
  },
  menuItem: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  menuItemContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menuItemText: {
    fontSize: 16,
    fontWeight: '500',
  },
});