type UserProfile = {
  [key: string]: string;
};

let userProfile: UserProfile = {};

export const saveUserProfile = async (profileData: Record<string, string>) => {
  userProfile = {
    ...userProfile,
    ...profileData,
  };
  console.log('Current profile state:', userProfile);
};

export const getUserProfile = (): UserProfile => {
  return { ...userProfile };
};

export const clearUserProfile = () => {
  userProfile = {};
};

// This will be implemented later to send the profile to an API
export const submitUserProfile = async (): Promise<void> => {
  // TODO: Implement API call
  console.log('Profile ready for submission:', userProfile);
}; 