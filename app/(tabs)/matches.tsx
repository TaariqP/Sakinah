import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Avatar, Text, Surface, TouchableRipple } from 'react-native-paper';
// import { Header } from '@/components/ui/Header';
import { useNavigation } from '@react-navigation/native';

interface Profile {
  id: number;
  name: string;
  age: number;
  avatar: string;
  location: string;
}

const profiles: Profile[] = [
  { id: 1, name: 'Sarah', age: 25, avatar: 'https://picsum.photos/seed/p1/200', location: 'New York' },
  { id: 2, name: 'Michael', age: 28, avatar: 'https://picsum.photos/seed/p2/200', location: 'Los Angeles' },
  { id: 3, name: 'Emma', age: 24, avatar: 'https://picsum.photos/seed/p3/200', location: 'Chicago' },
  { id: 4, name: 'James', age: 27, avatar: 'https://picsum.photos/seed/p4/200', location: 'Houston' },
  { id: 5, name: 'Olivia', age: 26, avatar: 'https://picsum.photos/seed/p5/200', location: 'Miami' },
];

export default function MatchesScreen() {
  const navigation = useNavigation();

  const renderItem = ({ item }: { item: Profile }) => (
    <TouchableRipple
      onPress={() => console.log('Matched with ', item.name)}
      style={styles.profileItem}
    >
      <Surface style={styles.profileSurface} elevation={0}>
        <Avatar.Image size={50} source={{ uri: item.avatar }} />
        <View style={styles.profileContent}>
          <Text style={styles.profileName}>{item.name}, {item.age}</Text>
          <Text style={styles.profileLocation}>{item.location}</Text>
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
}); 