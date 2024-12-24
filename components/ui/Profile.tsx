import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { Text, Avatar, Card, Divider, useTheme, Button } from 'react-native-paper';
import { UserProfile } from '@/utils/types';

interface ProfileProps {
    userProfile: UserProfile;
}

const Profile: React.FC<ProfileProps> = ({ userProfile }) => {
    const theme = useTheme();

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Card style={styles.card}>
                <Card.Content>
                    {/* <View style={styles.avatarContainer}>
                        <Avatar.Image
                            size={120}
                            source={{ uri: userProfile.avatarUrl || undefined }}
                            style={styles.avatar}
                        />
                    </View> */}
                    <Text style={[styles.name, { color: theme.colors.primary }]}>
                        {userProfile.name || 'Missing Information'}
                    </Text>
                    <Divider style={styles.divider} />

                    <View style={styles.section}>
                        <Text style={styles.sectionHeader}>Biography</Text>
                        <Text style={styles.text} numberOfLines={4}>
                            {userProfile.biography || 'Missing Information'}
                        </Text>
                    </View>

                    <Divider style={styles.divider} />

                    <View style={styles.section}>
                        <Text style={styles.sectionHeader}>Personal Details</Text>
                        {renderDetail('Gender', userProfile.gender)}
                        {renderDetail('Date of Birth', userProfile.dateOfBirth)}
                        {renderDetail('Height', userProfile.height)}
                        {renderDetail('Build', userProfile.build)}
                    </View>

                    <Divider style={styles.divider} />

                    <View style={styles.section}>
                        <Text style={styles.sectionHeader}>Education & Occupation</Text>
                        {renderDetail('Education', userProfile.education)}
                        {renderDetail('Occupation', userProfile.occupation)}
                    </View>

                    <Divider style={styles.divider} />

                    <View style={styles.section}>
                        <Text style={styles.sectionHeader}>Lifestyle</Text>
                        {renderDetail('Appearance', userProfile.appearance)}
                        {renderDetail('Living Arrangements', userProfile.livingArrangements)}
                        {renderDetail('Religious Practice', userProfile.religiousPractice)}
                        {renderDetail('Religious Manhaj', userProfile.religiousManhaj)}
                        {renderDetail(
                            'Willing to Relocate',
                            userProfile.willingToRelocate ? 'Yes' : 'No'
                        )}
                    </View>

                    <Button mode="contained" onPress={() => console.log('Action pressed')} style={styles.button}>
                        Contact User
                    </Button>
                </Card.Content>
            </Card>
        </ScrollView>
    );
};

const renderDetail = (label: string, value?: string) => (
    <View style={styles.detailRow}>
        <Text style={styles.detailLabel}>{label}:</Text>
        <Text style={styles.text}>{value || 'Missing Information'}</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#f0f4f8',
        padding: 16,
    },
    card: {
        width: '100%',
        padding: 20,
        borderRadius: 16,
        backgroundColor: '#ffffff',
        elevation: 6,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
    },
    avatarContainer: {
        alignItems: 'center',
        marginBottom: 16,
    },
    avatar: {
        borderWidth: 2,
        borderColor: '#f0f4f8',
        backgroundColor: '#ffffff',
    },
    name: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 16,
    },
    section: {
        marginTop: 24,
    },
    sectionHeader: {
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 8,
        color: '#444',
    },
    text: {
        fontSize: 16,
        color: '#333',
        marginBottom: 8,
        lineHeight: 24,
    },
    detailRow: {
        flexDirection: 'row',
        marginBottom: 10,
        alignItems: 'center',
        flexWrap: 'wrap', // Allow text to wrap
    },
    detailLabel: {
        fontWeight: '600',
        fontSize: 16,
        marginRight: 8,
        color: '#555',
    },
    divider: {
        marginVertical: 16,
    },
    button: {
        marginTop: 24,
        borderRadius: 24,
        backgroundColor: '#5e72e4', // Adjust button color
    },
});

export default Profile;
