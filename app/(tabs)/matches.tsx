import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Avatar, Text, Surface, TouchableRipple } from 'react-native-paper';
// import { Header } from '@/components/ui/Header';
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
          <Text style={styles.profileName}>{item.name}</Text>
          {/* <Text style={styles.profileLocation}>{item.}</Text> */}
          {/* <Text style={styles.profileBiography}>{item.biography}</Text> */}
          {/* <Text style={styles.profileOccupation}>Occupation: {item.occupation}</Text> */}
          {/* <Text style={styles.profileEducation}>Education: {item.education}</Text> */}
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
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 8,
  },
  profileContent: {
    marginLeft: 16,
  },
  profileName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  profileLocation: {
    fontSize: 14,
    color: 'gray',
  },
  profileBiography: {
    fontSize: 14,
    color: 'gray',
  },
  profileOccupation: {
    fontSize: 14,
    color: 'gray',
  },
  profileEducation: {
    fontSize: 14,
    color: 'gray',
  },
}); 