import React, { useState, useRef } from 'react';
import { View, StyleSheet, Dimensions, Image, Animated } from 'react-native';
import { IconButton } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import SwipeCard from '@/components/ui/SwipeCard';
import { profiles } from '@/utils/mockData'; // Import the profiles array

const { width, height } = Dimensions.get('window');

export default function HomeScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const translateX = useRef(new Animated.Value(0)).current; // Animated value for swipe effect
  const rotate = useRef(new Animated.Value(0)).current; // Animated value for rotation effect

  const handleSwipe = (direction: 'left' | 'right') => {
    const toValue = direction === 'left' ? -width : width; // Determine swipe direction
    const rotationValue = direction === 'left' ? -15 : 15; // Set rotation angle

    Animated.parallel([
      Animated.timing(translateX, {
        toValue,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(rotate, {
        toValue: rotationValue,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setCurrentIndex(prev => Math.min(prev + 1, profiles.length - 1));
      translateX.setValue(0); // Reset position for the next card
      rotate.setValue(0); // Reset rotation for the next card
    });
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
        {/* Header with Logo and Filter Button */}
        <View style={styles.headerContainer}>
          <Image
            source={require('../../assets/images/logo-only.png')} // Your transparent logo file
            style={styles.logo}
          />
          <IconButton
            icon="filter-variant"
            size={30}
            onPress={handleFilterPress}
            style={styles.filterButton}
          />
        </View>

        {/* Full Screen Swipe Card */}
        <View style={styles.cardContainer}>
          {currentIndex < profiles.length && (
            <Animated.View style={{ 
              transform: [
                { translateX },
                { rotate: rotate.interpolate({
                    inputRange: [-15, 15],
                    outputRange: ['-15deg', '15deg'],
                  }) 
                }
              ] 
            }}>
              <SwipeCard
                key={profiles[currentIndex].id}
                userProfile={profiles[currentIndex]}
                onSwipe={handleSwipe}
              />
            </Animated.View>
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
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16, // Padding for the header
  },
  logo: {
    width: 80, // Adjusted width if needed
    height: 30, // Adjusted height if needed
    resizeMode: 'contain', // Ensure the logo maintains its aspect ratio
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
