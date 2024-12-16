import React, { useState } from 'react';
import { View, StyleSheet, Dimensions, SafeAreaView } from 'react-native';
import { Surface } from 'react-native-paper';
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

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cardContainer}>
        {currentIndex < profiles.length && (
          <SwipeCard
            key={profiles[currentIndex].id}
            card={profiles[currentIndex]}
            onSwipe={handleSwipe}
          />
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  cardContainer: {
    flex: 1,
    justifyContent: 'center', // Centers card vertically
    alignItems: 'center', // Centers card horizontally
  },
});
