import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, ScrollView, NativeSyntheticEvent, NativeScrollEvent } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
  runOnJS,
  interpolate,
  Extrapolate,
} from 'react-native-reanimated';
import { Surface, useTheme } from 'react-native-paper';
import { UserProfile } from '@/utils/types';

const { width, height } = Dimensions.get('window');

interface SwipeCardProps {
  card: UserProfile;
  onSwipe: (direction: 'left' | 'right') => void;
}

const SwipeCard = ({ card, onSwipe, isNext = false }: SwipeCardProps & { isNext?: boolean }) => {
  const theme = useTheme();
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const scale = useSharedValue(isNext ? 0.95 : 1);
  const opacity = useSharedValue(1);
  const [scrollViewHeight, setScrollViewHeight] = useState(0);
  const [contentHeight, setContentHeight] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);

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
        { translateY: translateY.value },
        { scale: scale.value },
        { rotate: `${rotation}deg` },
      ],
      opacity: opacity.value,
      zIndex: isNext ? 0 : 1,
    };
  });

  // Reset animations when card changes
  React.useEffect(() => {
    if (!isNext) {
      translateX.value = 0;
      translateY.value = 0;
      scale.value = withSpring(1);
      opacity.value = 1;
    } else {
      scale.value = 0.95;
    }
  }, [card.id, isNext]);

  // Swipe card left
  const swipeLeft = () => {
    translateX.value = withSpring(-width * 1.5, {
      damping: 15,
      stiffness: 100,
    });
    translateY.value = withSpring(50, {
      damping: 15,
      stiffness: 100,
    });
    opacity.value = withTiming(0, { duration: 300 }, () => {
      runOnJS(onSwipe)('left');
    });
  };

  // Swipe card right
  const swipeRight = () => {
    translateX.value = withSpring(width * 1.5, {
      damping: 15,
      stiffness: 100,
    });
    translateY.value = withSpring(50, {
      damping: 15,
      stiffness: 100,
    });
    opacity.value = withTiming(0, { duration: 300 }, () => {
      runOnJS(onSwipe)('right');
    });
  };

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const { contentOffset, contentSize, layoutMeasurement } = event.nativeEvent;
    setScrollPosition(contentOffset.y);
    setScrollViewHeight(layoutMeasurement.height);
    setContentHeight(contentSize.height);
  };

  const scrollIndicatorHeight = scrollViewHeight > 0 
    ? (scrollViewHeight / contentHeight) * scrollViewHeight 
    : 0;
  
  const scrollIndicatorPosition = scrollViewHeight > 0 
    ? (scrollPosition / (contentHeight - scrollViewHeight)) * (scrollViewHeight - scrollIndicatorHeight)
    : 0;

  console.log(card);

  return (
    <Animated.View style={[styles.card, cardStyle]}>
      <View style={styles.cardInner}>
        <ScrollView 
          bounces={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
          onScroll={handleScroll}
          scrollEventThrottle={16}
        >
          <Image
            source={{ uri: `https://picsum.photos/seed/${card.id}/400/600` }}
            style={styles.image}
          />
          <View style={styles.infoSection}>
            <View style={styles.infoContainer}>
              <View style={styles.textContainer}>
                <Text style={styles.name}>{card.name}</Text>
                <Text style={styles.age}>{card.age} years old</Text>
              </View>
              <Text style={styles.id}>#{card.id}</Text>
            </View>
            
            {/* Additional content */}
            <View style={styles.additionalInfo}>
              <Text style={styles.sectionTitle}>About</Text>
              <Text style={styles.description}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Text>
              
              <Text style={styles.sectionTitle}>Interests</Text>
              <View style={styles.interestsContainer}>
                {['Travel', 'Music', 'Food', 'Sports', 'Art'].map((interest, index) => (
                  <View key={index} style={styles.interestTag}>
                    <Text style={styles.interestText}>{interest}</Text>
                  </View>
                ))}
              </View>
            </View>
          </View>
        </ScrollView>
        
        {/* Custom Scroll Indicator */}
        {contentHeight > scrollViewHeight && (
          <View style={styles.scrollIndicatorContainer}>
            <View 
              style={[
                styles.scrollIndicator, 
                { 
                  height: scrollIndicatorHeight,
                  transform: [{ translateY: scrollIndicatorPosition }],
                  backgroundColor: theme.colors.primary,
                }
              ]} 
            />
          </View>
        )}
      </View>

      {/* Buttons */}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={[styles.button, styles.buttonLeft]} onPress={swipeLeft}>
          <Text style={styles.buttonText}>X</Text>
        </TouchableOpacity>

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
    height: height * 0.75,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
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
    height: height * 0.5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  infoSection: {
    backgroundColor: 'white',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  infoContainer: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
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
    marginLeft: 10,
  },
  buttonsContainer: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 40,
  },
  button: {
    width: 42,
    height: 42,
    borderRadius: 21,
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
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  scrollContent: {
    flexGrow: 1,
  },
  additionalInfo: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginTop: 15,
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
  },
  interestsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 5,
  },
  interestTag: {
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    marginRight: 8,
    marginBottom: 8,
  },
  interestText: {
    fontSize: 14,
    color: '#666',
  },
  scrollIndicatorContainer: {
    position: 'absolute',
    right: 4,
    top: 0,
    bottom: 0,
    width: 4,
    borderRadius: 2,
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
  scrollIndicator: {
    width: 4,
    borderRadius: 2,
    position: 'absolute',
    top: 0,
    right: 0,
  },
});

export default SwipeCard;
