export interface UserProfile 
    extends CandidatePersonalInfo, 
            PhysicalAttributes, 
            EducationalOccupationalDetails, 
            ReligiousDetails, 
            MarriageDetails,
            LifestyleDetails {
    id: number; // Unique identifier
    biography?: string; // Optional, user-provided description
}

export interface CandidatePersonalInfo {
    name?: string; // Candidate's full name
    gender?: string; // Male/Female
    dateOfBirth?: string; // Replaces 'age'
    age?: number;
    ethnicity?: string; // E.g., "Pakistani", "Indian", etc.
    currentLocation?: string; // Current city/state
    legalStatus?: string; // E.g., "British Citizen", "Permanent Resident"
    languages?: string[];
}

export interface PhysicalAttributes {
    height?: string; // Open text for height
    build?: string; // E.g., Slim, Athletic
    complexion?: string; // E.g., Fair, Wheatish
    religiousAppearance?: string; // E.g., Modest, Modern
    disabilities?: string; // "Yes" or "No"
}

export interface EducationalOccupationalDetails {
    education?: string; // E.g., Bachelor's, Master's
    occupation?: string; // E.g., Engineer, Doctor
}

export interface ReligiousDetails {
    bornMuslim: string;
    religiousPractice?: string; // E.g., "Prays 5x Salah"
    religiousManhaj?: string; // Sect or Mazhab, e.g., Hanafi, Shafi
    sect?: string; // E.g., Sunni, Shia
}
export interface MarriageDetails {
    maritalStatus?: string; // E.g., "Single", "Divorced"
    hasChildren?: string; // Optional, e.g., "Yes", "No"
    wantChildren?: string; // Optional, e.g., "Yes", "No"
    willingToRelocate?: string; // "Yes", "No", or "Maybe"
    maritalTiming?: string; // E.g., "Single", "Divorced"
    desiredLivingArrangements?: string;
}

export interface LifestyleDetails {
    drinking?: string; 
    smoking?: string; 
    halal?: string
}

