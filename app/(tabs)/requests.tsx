import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text } from 'react-native-paper';
// import { BoostButton } from '../components/BoostButton';
// import { TabBar } from '../components/TabBar';
// import { FilterBar } from '../components/FilterBar';
import { ProfileCard } from '../../components/ui/ProfileCard';
// import { BottomNav } from '../components/BottomNav';

const MOCK_PROFILES = [
  {
    id: 1,
    name: 'Kaynaat',
    age: 25,
    timeAgo: 'a day ago',
    location: 'BIRMINGHAM',
    details: 'ADMIN. PRACTICING. SUNNI',
  },
  {
    id: 2,
    name: 'Aysh',
    age: 23,
    timeAgo: '2 days ago',
    location: 'BIRMINGHAM',
    details: 'VERY RELIGIOUS. SUNNI. 5\' 1"',
  },
  {
    id: 3,
    name: 'Maria',
    age: 23,
    timeAgo: '2 days ago',
    location: 'COVENTRY',
    details: 'DENTISTRY EMPLOYEE. VERY RELIGIOUS. SUNNI',
  },
  {
    id: 4,
    name: 'Tee',
    age: 25,
    timeAgo: 'a month ago',
    location: 'NOTTINGHAM',
    details: 'BACHELORS. SUNNI',
  },
  {
    id: 5,
    name: 'L',
    age: 25,
    timeAgo: 'a month ago',
    location: 'BIRMINGHAM',
    details: 'VERY RELIGIOUS. SUNNI. 5\' 4"',
  },
];

export default function RequestsScreen() {
  const [activeTab, setActiveTab] = useState('liked-me');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text variant="headlineLarge" style={styles.title}>Requests</Text>
        {/* <BoostButton /> */}
      </View>
      {/* <TabBar value={activeTab} onChange={setActiveTab} /> */}
      {/* <FilterBar /> */}
      <ScrollView style={styles.content}>
        {MOCK_PROFILES.map((profile) => (
          <ProfileCard key={profile.id} {...profile} />
        ))}
      </ScrollView>
      {/* <BottomNav /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    paddingTop: 48,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
  },
});

