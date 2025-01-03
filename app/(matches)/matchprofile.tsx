import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { Text } from 'react-native-paper';
import Profile from '@/components/ui/Profile';
import { fetchUserProfileById } from '@/utils/api';
import { UserProfile } from '@/utils/types';

const MatchProfileScreen = () => {
    const { id } = useLocalSearchParams();
    const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getUserProfile = async () => {
            try {
                const profile = await fetchUserProfileById(Number(id));
                setUserProfile(profile);
            } catch (error) {
                console.error('Error fetching user profile:', error);
            } finally {
                setLoading(false);
            }
        };

        getUserProfile();
    }, [id]);

    if (loading) {
        return (
            <View style={styles.container}>
                <Text>Loading...</Text>
            </View>
        );
    }

    if (!userProfile) {
        return (
            <View style={styles.container}>
                <Text>No user profile found</Text>
            </View>
        );
    }

    console.log('User Profile:', userProfile);

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

export default MatchProfileScreen; 