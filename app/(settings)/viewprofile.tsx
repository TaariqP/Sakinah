import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import Profile from '@/components/ui/Profile';
import { getMyUserProfile } from '@/utils/myProfile';
import { Text } from 'react-native-paper';

const ViewProfileScreen = () => {    

    const userProfile = getMyUserProfile();

    if (!userProfile) {
        return (
            <View style={styles.container}>
                <Text>No user profile found</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Profile userProfile={userProfile} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        padding: 16,
    },
});

export default ViewProfileScreen; 