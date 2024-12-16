import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  runOnJS,
  interpolate,
  Extrapolate,
} from 'react-native-reanimated';
import { Surface } from 'react-native-paper';

const { width, height } = Dimensions.get('window');

interface Profile {
  id: number;
  name: string;
  age: number;
}

interface SwipeCardProps {
  card: Profile;
  onSwipe: (direction: 'left' | 'right') => void;
}

const SwipeCard = ({ card, onSwipe }: SwipeCardProps) => {
  const translateX = useSharedValue(0);
  const opacity = useSharedValue(1);

  // Animation for the card position
  const cardStyle = useAnimatedStyle(() => {
    const rotation = interpolate(
      translateX.value,
      [-width / 2, 0, width / 2],
      [-30, 0, 30],
      Extrapolate.CLAMP
    );

    return {
      transform: [
        { translateX: translateX.value },
        { rotate: `${rotation}deg` },
      ],
      opacity: opacity.value,
    };
  });

  // Swipe card left
  const swipeLeft = () => {
    translateX.value = withTiming(-width, { duration: 300 }, () => {
      opacity.value = withTiming(0, { duration: 200 }, () => runOnJS(onSwipe)('left'));
    });
  };

  // Swipe card right
  const swipeRight = () => {
    translateX.value = withTiming(width, { duration: 300 }, () => {
      opacity.value = withTiming(0, { duration: 200 }, () => runOnJS(onSwipe)('right'));
    });
  };

  return (
    <Animated.View style={[styles.card, cardStyle]}>
      <Surface style={styles.cardSurface} elevation={4}>
        <View style={styles.cardInner}>
          <Image
            source={{ uri: `https://picsum.photos/seed/${card.id}/400/600` }}
            style={styles.image}
          />
          <View style={styles.infoContainer}>
            <View style={styles.textContainer}>
              <Text style={styles.name}>{card.name}</Text>
              <Text style={styles.age}>{card.age} years old</Text>
            </View>
            <Text style={styles.id}>#{card.id}</Text>
          </View>
        </View>
      </Surface>

      {/* Buttons */}
      <View style={styles.buttonsContainer}>
        {/* X Button */}
        <TouchableOpacity style={[styles.button, styles.buttonLeft]} onPress={swipeLeft}>
          <Text style={styles.buttonText}>X</Text>
        </TouchableOpacity>

        {/* Tick Button */}
        <TouchableOpacity style={[styles.button, styles.buttonRight]} onPress={swipeRight}>
          <Text style={styles.buttonText}>✔</Text>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  card: {
    position: 'absolute',
    width: width * 0.9,
    height: height * 0.7,
  },
  cardSurface: {
    flex: 1,
    borderRadius: 20,
  },
  cardInner: {
    flex: 1,
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: 'white',
  },
  image: {
    width: '100%',
    height: '80%',
  },
  infoContainer: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  age: {
    fontSize: 20,
    color: '#666',
    marginTop: 5,
  },
  id: {
    fontSize: 16,
    color: '#999',
    fontWeight: '500',
  },
  buttonsContainer: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
  },
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonLeft: {
    backgroundColor: '#ff6b6b',
  },
  buttonRight: {
    backgroundColor: '#4caf50',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default SwipeCard;
