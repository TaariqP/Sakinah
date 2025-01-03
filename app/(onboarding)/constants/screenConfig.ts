type BaseOnboardingScreen = {
  name: string;
  title: string;
  nextScreen: string | '/(tabs)/discover';
  type: 'picker' | 'text' | 'multiline';
};

type PickerScreen = BaseOnboardingScreen & {
  type: 'picker';
  options: Array<{ label: string; value: string }>;
};

type TextScreen = BaseOnboardingScreen & {
  type: 'text';
  inputProps?: {
    label?: string;
    autoFocus?: boolean;
  };
};

type MultilineScreen = BaseOnboardingScreen & {
  type: 'multiline';
  inputProps?: {
    label?: string;
    numberOfLines?: number;
  };
};

export type OnboardingScreen = PickerScreen | TextScreen | MultilineScreen;

export const onboardingScreens: OnboardingScreen[] = [
  // Candidate's Personal Information
  {
    name: 'full-name',
    title: "What is your full name?",
    nextScreen: 'gender',
    type: 'text',
    inputProps: {
      label: 'Full Name',
    }
  },
  {
    name: 'gender',
    title: "What is your gender?",
    nextScreen: 'ethnicity',
    type: 'picker',
    options: [
      { label: "Male", value: "Male" },
      { label: "Female", value: "Female" },
    ]
  },
  {
    name: 'ethnicity',
    title: "What is your ethnicity?",
    nextScreen: 'date-of-birth',
    type: 'picker',
    options: [
      { label: "Pakistani", value: "Pakistani" },
      { label: "Indian", value: "Indian" },
      { label: "Arab", value: "Arab" },
      { label: "Somalian", value: "Somalian" },
      { label: "Bangladeshi", value: "Bangladeshi" },
      { label: "Other", value: "Other" },
    ]
  },
  {
    name: 'date-of-birth',
    title: "What is your date of birth (DOB)?",
    nextScreen: 'current-location',
    type: 'text',
    inputProps: {
      label: 'YYYY-MM-DD',
    }
  },
  {
    name: 'current-location',
    title: "What is your current location?",
    nextScreen: 'willing-to-relocate',
    type: 'picker',
    options: [
      { label: "England", value: "England" },
      { label: "Scotland", value: "Scotland" },
      { label: "Wales", value: "Wales" },
      { label: "Northern Ireland", value: "Northern Ireland" },
      { label: "Other UK region", value: "Other UK region" },
    ]
  },
  {
    name: 'willing-to-relocate',
    title: "Are you willing to relocate?",
    nextScreen: 'legal-status',
    type: 'picker',
    options: [
      { label: "Yes", value: "Yes" },
      { label: "No", value: "No" },
      { label: "Maybe", value: "Maybe" },
    ]
  },
  {
    name: 'legal-status',
    title: "What is your legal status?",
    nextScreen: 'height',
    type: 'picker',
    options: [
      { label: "British Citizen", value: "British Citizen" },
      { label: "Permanent Resident", value: "Permanent Resident" },
      { label: "Student Visa", value: "Student Visa" },
      { label: "Work Visa", value: "Work Visa" },
      { label: "Asylum Seeker", value: "Asylum Seeker" },
      { label: "Other", value: "Other" },
    ]
  },

  // Physical Attributes
  {
    name: 'height',
    title: "What is your height?",
    nextScreen: 'build',
    type: 'text',
    inputProps: {
      label: 'Height (e.g., 5\'5, 6\'0)',
    }
  },
  {
    name: 'build',
    title: "What is your build?",
    nextScreen: 'complexion',
    type: 'picker',
    options: [
      { label: "Slim", value: "Slim" },
      { label: "Athletic", value: "Athletic" },
      { label: "Average", value: "Average" },
      { label: "Large", value: "Large" },
    ]
  },
  {
    name: 'complexion',
    title: "What is your complexion?",
    nextScreen: 'appearance',
    type: 'picker',
    options: [
      { label: "Fair", value: "Fair" },
      { label: "Wheatish", value: "Wheatish" },
      { label: "Medium", value: "Medium" },
      { label: "Dark", value: "Dark" },
    ]
  },
  {
    name: 'appearance',
    title: "What is your appearance?",
    nextScreen: 'disabilities',
    type: 'picker',
    options: [
      { label: "Modest", value: "Modest" },
      { label: "Modern", value: "Modern" },
      { label: "Traditional", value: "Traditional" },
    ]
  },
  {
    name: 'disabilities',
    title: "Do you have any disabilities?",
    nextScreen: 'education-level',
    type: 'picker',
    options: [
      { label: "Yes", value: "Yes" },
      { label: "No", value: "No" },
    ]
  },

  // Educational and Occupational Details
  {
    name: 'education-level',
    title: "What is your education level?",
    nextScreen: 'occupation',
    type: 'picker',
    options: [
      { label: "High School / GCSE", value: "High School / GCSE" },
      { label: "Bachelor’s Degree", value: "Bachelor’s Degree" },
      { label: "Master’s Degree", value: "Master’s Degree" },
      { label: "PhD or Higher", value: "PhD or Higher" },
    ]
  },
  {
    name: 'occupation',
    title: "What is your occupation?",
    nextScreen: 'sect',
    type: 'picker',
    options: [
      { label: "Student", value: "Student" },
      { label: "Engineer", value: "Engineer" },
      { label: "Doctor", value: "Doctor" },
      { label: "Teacher", value: "Teacher" },
      { label: "Business Owner", value: "Business Owner" },
      { label: "IT Professional", value: "IT Professional" },
      { label: "Homemaker", value: "Homemaker" },
      { label: "Other", value: "Other" },
    ]
  },

  // Religious Details
  {
    name: 'sect',
    title: "What is your sect?",
    nextScreen: 'religious-manhaj',
    type: 'picker',
    options: [
      { label: "Sunni", value: "Sunni" },
      { label: "Shia", value: "Shia" },
      { label: "Other", value: "Other" },
    ]
  },
  {
    name: 'religious-manhaj',
    title: "What is your religious manhaj?",
    nextScreen: 'prayer-level',
    type: 'picker',
    options: [
      { label: "Hanafi", value: "Hanafi" },
      { label: "Shafi", value: "Shafi" },
      { label: "Maliki", value: "Maliki" },
      { label: "Hanbali", value: "Hanbali" },
      { label: "Other", value: "Other" },
    ]
  },
  {
    name: 'prayer-level',
    title: "What is your prayer level?",
    nextScreen: 'marital-status',
    type: 'picker',
    options: [
      { label: "Always Prays", value: "Always Prays" },
      { label: "Usually Prays", value: "Usually Prays" },
      { label: "Sometimes Prays", value: "Sometimes Prays" },
      { label: "Never Prays", value: "Never Prays" }
    ]
  },

  // Marital Status
  {
    name: 'marital-status',
    title: "What is your marital status?",
    nextScreen: 'born-muslim',
    type: 'picker',
    options: [
      { label: "Single", value: "Single" },
      { label: "Divorced", value: "Divorced" },
      { label: "Widowed", value: "Widowed" },
      { label: "Separated", value: "Separated" },
    ]
  },
  {
    name: 'born-muslim',
    title: "Are you a born Muslim or a revert?",
    nextScreen: 'living-arrangements',
    type: 'picker',
    options: [
      { label: "Born Muslim", value: "Born Muslim" },
      { label: "Revert", value: "Revert" },
    ]
  },

  // Living Arrangements
  {
    name: 'living-arrangements',
    title: "What do you expect your living arrangements to be after marriage?",
    nextScreen: 'welcome',
    type: 'picker',
    options: [
      { label: "With family", value: "With family" },
      { label: "Independent", value: "Independent" },
    ]
  },
  {
    name: 'welcome',
    title: "Welcome to Sakinah!",
    nextScreen: '/(tabs)/discover',
    type: 'text'
  }
];

export const getNextScreen = (currentScreen: string): string => {
  const screen = onboardingScreens.find(s => s.name === currentScreen);
  return screen?.nextScreen || '/(tabs)/discover';
};

export const getScreenConfig = (screenName: string): OnboardingScreen | undefined => {
  return onboardingScreens.find(s => s.name === screenName);
};

export const getFirstScreen = (): string => {
  console.log('First screen:', onboardingScreens[0].name);
  return onboardingScreens[0].name;
};