import React, { useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { IconButton } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import SwipeCard from '@/components/ui/SwipeCard';
import { profiles } from '@/utils/mockData'; // Import the profiles array

const { width, height } = Dimensions.get('window');

interface Profile {
  id: number;
  name: string;
  age: number;
}

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
    <LinearGradient
      colors={['#ffffff', '#f5f5f5']}
      style={styles.container}
    >
      <SafeAreaView style={styles.safeArea}>
        {/* Filter Button */}
        <View style={styles.filterContainer}>
          <IconButton
            icon="filter-variant"
            size={30}
            onPress={handleFilterPress}
            style={styles.filterButton}
          />
        </View>

        {/* Full Screen Swipe Card */}
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
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  filterContainer: {
    position: 'absolute',
    top: 16, // Padding from top
    left: 16, // Padding from left
    zIndex: 1, // Ensure the button is always on top
  },
  filterButton: {
    backgroundColor: 'white',
    borderRadius: 50,
    padding: 8,
    elevation: 4, // Subtle shadow for the button
  },
  cardContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',  // Ensures the card container takes up the full screen
  },
});
