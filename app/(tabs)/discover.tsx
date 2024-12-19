import React, { useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Surface, IconButton } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import SwipeCard from '@/components/ui/SwipeCard';

const { width, height } = Dimensions.get('window');

interface Profile {
  id: number;
  name: string;
  age: number;
}
const profiles: Profile[] = [
  { id: 1, name: 'Sarah', age: 25 },
  { id: 2, name: 'Michael', age: 28 },
  { id: 3, name: 'Emma', age: 24 },
  { id: 4, name: 'James', age: 27 },
  { id: 5, name: 'Olivia', age: 26 },
];

export default function HomeScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSwipe = (direction: 'left' | 'right') => {
    console.log(`Swiped ${direction} on ${profiles[currentIndex].name}`);
    setCurrentIndex(prev => Math.min(prev + 1, profiles.length - 1));
  };

  const handleFilterPress = () => {
    console.log('Filter button pressed');
    // Add your filter logic here
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <IconButton
          icon="filter-variant"
          size={24}
          onPress={handleFilterPress}
        />
      </View>
      <View style={styles.cardContainer}>
        {currentIndex < profiles.length - 1 && (
          <SwipeCard
            key={profiles[currentIndex + 1].id}
            card={profiles[currentIndex + 1]}
            onSwipe={handleSwipe}
            isNext
          />
        )}
        {currentIndex < profiles.length && (
          <SwipeCard
            key={profiles[currentIndex].id}
            card={profiles[currentIndex]}
            onSwipe={handleSwipe}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  cardContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

