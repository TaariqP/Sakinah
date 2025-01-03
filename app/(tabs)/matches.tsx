import React from 'react';
import { View, FlatList, StyleSheet, Image } from 'react-native';
import { Text, Surface, TouchableRipple } from 'react-native-paper';
import { useRouter } from 'expo-router';
import { profiles } from '@/utils/mockData'; // Import the profiles array
import { UserProfile } from '@/utils/types';

export default function MatchesScreen() {
  const router = useRouter();

  const renderItem = ({ item }: { item: UserProfile }) => (
    <TouchableRipple
      onPress={() => router.push(`/(matches)/matchprofile?id=${item.id.toString()}`)}
      style={styles.profileItem}
    >
      <Surface style={styles.profileSurface} elevation={0}>
        <View style={styles.profileContent}>
          <Image 
            source={{ uri: item.profileImage }} // Assuming profileImage is a property in UserProfile
            style={styles.profileImage} 
          />
          <View style={styles.profileDetails}>
            <Text style={styles.profileName}>{item.name}</Text>
            <Text style={styles.profileAge}>{item.age}</Text>
            <Text style={styles.profileLocation}>{item.location}</Text>
          </View>
        </View>
      </Surface>
    </TouchableRipple>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={profiles}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 20,
  },
  listContent: {
    padding: 16,
  },
  profileItem: {
    marginBottom: 8,
  },
  profileSurface: {
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 8,
  },
  profileContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 50, // Set the width of the profile image
    height: 50, // Set the height of the profile image
    borderRadius: 25, // Make it circular
  },
  profileDetails: {
    marginLeft: 16,
  },
  profileName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  profileAge: {
    fontSize: 14,
    color: '#666',
  },
  profileLocation: {
    fontSize: 14,
    color: '#666',
  },
}); 