import axios from 'axios';
import { UserProfile } from '@/utils/types';
import { profiles } from './mockData';

const API_URL = 'https://your-api-url.com'; // Replace with your actual API URL

// Example function to fetch user profiles
export const fetchUserProfiles = async (): Promise<UserProfile[]> => {
    try {
        const response = await axios.get(`${API_URL}/profiles`);
        return response.data; // Assuming the API returns an array of UserProfile
    } catch (error) {
        console.error('Error fetching user profiles:', error);
        throw error; // Rethrow the error for further handling
    }
};

// Example function to fetch a user profile by ID
export const fetchUserProfileById = async (id: number): Promise<UserProfile> => {
    return profiles[1];
    // try {
    //     const response = await axios.get(`${API_URL}/profiles/${id}`);
    //     return response.data; // Assuming the API returns a UserProfile
    // } catch (error) {
    //     console.error(`Error fetching user profile with ID ${id}:`, error);
    //     throw error; // Rethrow the error for further handling
    // }
};

// Add more API functions as needed