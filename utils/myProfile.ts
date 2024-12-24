import { UserProfile } from './types'; // Import the UserProfile interface
import { profiles } from './mockData'; // Import the profiles array

let myUserProfile: UserProfile; // Renamed to reflect it's the current user's profile

export const saveMyUserProfile = async (profileData: Partial<UserProfile>) => {
    myUserProfile = {
        ...myUserProfile,
        ...profileData,
    };
    console.log('Current user profile state:', myUserProfile);
};

export const getMyUserProfile = (): UserProfile | undefined => {
    return { ...myUserProfile };
};

export const deleteMyUserProfile = () => {
    console.log("Delete current user profile invoked");
};

// This will be implemented later to send the profile to an API
export const submitMyUserProfile = async (): Promise<void> => {
    // TODO: Implement API call
    console.log('Current user profile ready for submission:', myUserProfile);
}; 