import React, { useRef } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { UserProfile } from '@/utils/types';
import { Divider } from 'react-native-paper';

const { width, height } = Dimensions.get('window');

interface SwipeCardProps {
  userProfile: UserProfile;
  onSwipe: (direction: 'left' | 'right') => void;
  isNext?: boolean;
}

// Define a type for the section keys
type SectionKey = "Basic Info" | "Physical Attributes" | "Education & Career" | "Religiousness" | "Marriage Details" | "Lifestyle";

const SwipeCard: React.FC<SwipeCardProps> = React.memo(({ userProfile, onSwipe }) => {
  const scrollViewRef = useRef<ScrollView>(null);

  const {
    name,
    age,
    gender,
    dateOfBirth,
    ethnicity,
    currentLocation,
    legalStatus,
    languages,
    height,
    build,
    complexion,
    religiousAppearance,
    disabilities,
    education,
    occupation,
    bornMuslim,
    religiousPractice,
    religiousManhaj,
    sect,
    maritalStatus,
    hasChildren,
    wantChildren,
    willingToRelocate,
    maritalTiming,
    desiredLivingArrangements,
    drinking,
    smoking,
    halal,
    id,
    biography,
  } = userProfile;

  const sections: Record<SectionKey, Record<string, string>> = {
    "Basic Info": {
      Ethnicity: ethnicity,
      "Current Location": currentLocation,
      "Legal Status": legalStatus,
      Languages: languages,
    },
    "Physical Attributes": {
      Build: build,
      Height: height,
      Complexion: complexion,
      Disabilities: disabilities,
    },
    "Education & Career": {
      Education: education,
      Occupation: occupation,
    },
    "Religiousness": {
      "Born Muslim": bornMuslim,
      "Religious Practice": religiousPractice,
      "Religious Appearance": religiousAppearance,
      "Religious Manhaj": religiousManhaj,
      "Sect": sect,
    },
    "Marriage Details": {
      "Marital Status": maritalStatus,
      "Has Children": hasChildren,
      "Want Children": wantChildren,
      "Willing to Relocate": willingToRelocate,
      "Marital Timing": maritalTiming,
      "Desired Living Arrangements": desiredLivingArrangements,
    },
    "Lifestyle": {
      Drinking: drinking,
      Smoking: smoking,
      Halal: halal,
    }
  };

  const sectionIcons = {
    "Basic Info": "account-details",
    "Physical Attributes": "human",
    "Education & Career": "school",
    "Religiousness": "mosque",
    "Marriage Details": "ring",
    "Lifestyle": "coffee"
  };

  return (
    <View style={styles.card}>
      <ScrollView
        ref={scrollViewRef}
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png' }}
            style={styles.profileImage}
          />
          <View style={styles.imageOverlay}>
            <Text style={styles.nameAge}>{name}, {age}</Text>
            <View style={styles.locationContainer}>
              <MaterialCommunityIcons name="map-marker" size={16} color="#FFF" />
              <Text style={styles.locationText}>{currentLocation}</Text>
            </View>
          </View>
        </View>

        <View style={styles.contentContainer}>
          <View style={styles.tagsContainer}>
            <View style={[styles.tag, { backgroundColor: '#E3F2FD' }]}>
              <MaterialCommunityIcons name="moon-waning-crescent" size={14} color="#1976D2" />
              <Text style={[styles.tagText, { color: '#1976D2' }]}>{sect}</Text>
            </View>
            <View style={[styles.tag, { backgroundColor: '#E8F5E9' }]}>
              <MaterialCommunityIcons name="school" size={14} color="#388E3C" />
              <Text style={[styles.tagText, { color: '#388E3C' }]}>{education}</Text>
            </View>
            <View style={[styles.tag, { backgroundColor: '#FFF3E0' }]}>
              <MaterialCommunityIcons name="briefcase" size={14} color="#F57C00" />
              <Text style={[styles.tagText, { color: '#F57C00' }]}>{occupation}</Text>
            </View>
            <View style={[styles.tag, { backgroundColor: '#FCE4EC' }]}>
              <Image 
                source={{ uri: `https://flagcdn.com/w20/${ethnicity.toLowerCase()}.png` }}
                style={styles.flagIcon}
              />
              <Text style={[styles.tagText, { color: '#C2185B' }]}>{ethnicity}</Text>
            </View>
          </View>

          <View style={styles.aboutContainer}>
            <Text style={styles.aboutTitle}>About Me</Text>
            <Text style={styles.aboutText}>{biography}</Text>
          </View>

          {Object.entries(sections).map(([sectionTitle, sectionData], index) => (
            <React.Fragment key={sectionTitle}>
              <Divider style={styles.divider} />
              <View style={styles.sectionContainer}>
                <View style={styles.sectionHeader}>
                  <MaterialCommunityIcons
                    name={sectionIcons[sectionTitle]}
                    size={24}
                    color="#6B4EFF"
                    style={styles.sectionIcon}
                  />
                  <Text style={styles.sectionTitle}>{sectionTitle}</Text>
                </View>
                {Object.entries(sectionData).map(([key, value]) => (
                  <View key={key} style={styles.attributeRow}>
                    <Text style={styles.attributeKey}>{key}</Text>
                    <Text style={styles.attributeValue}>{value}</Text>
                  </View>
                ))}
              </View>
            </React.Fragment>
          ))}
        </View>
      </ScrollView>

      <View style={styles.actions}>
        <TouchableOpacity
          style={[styles.actionButton, styles.dislikeButton]}
          onPress={() => onSwipe('left')}
        >
          <MaterialCommunityIcons name="close" size={24} color="#FF5252" />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.actionButton, styles.likeButton]}
          onPress={() => onSwipe('right')}
        >
          <MaterialCommunityIcons name="heart" size={24} color="#4CAF50" />
        </TouchableOpacity>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  card: {
    width: width * 0.92,
    height: height * 0.8,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    overflow: 'hidden',
    position: 'relative',
    marginBottom: 20,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  imageContainer: {
    height: height * 0.45,
    position: 'relative',
  },
  profileImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  imageOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  nameAge: {
    fontSize: 28,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    fontSize: 16,
    color: '#FFFFFF',
    marginLeft: 4,
  },
  contentContainer: {
    padding: 20,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 20,
  },
  tag: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
    gap: 6,
  },
  tagText: {
    fontSize: 14,
    fontWeight: '600',
  },
  aboutContainer: {
    marginTop: 10,
    backgroundColor: '#F5F5F5',
    padding: 15,
    borderRadius: 10,
  },
  aboutTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 10,
    color: '#333333',
  },
  aboutText: {
    fontSize: 16,
    color: '#555555',
    lineHeight: 24,
  },
  divider: {
    marginVertical: 20,
    height: 1,
    backgroundColor: '#E0E0E0',
  },
  sectionContainer: {
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#333333',
    marginBottom: 15,
    textTransform: 'uppercase',
  },
  attributeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  attributeKey: {
    fontSize: 16,
    color: '#666666',
    flex: 1,
  },
  attributeValue: {
    fontSize: 16,
    color: '#333333',
    flex: 1,
    textAlign: 'right',
    fontWeight: '500',
  },
  actions: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  actionButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  dislikeButton: {
    borderWidth: 2,
    borderColor: '#FF5252',
  },
  likeButton: {
    borderWidth: 2,
    borderColor: '#4CAF50',
  },
  flagIcon: {
    width: 20,
    height: 14,
    marginRight: 4,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionIcon: {
    marginRight: 8,
    marginBottom: 12
  },
});

export default SwipeCard;

