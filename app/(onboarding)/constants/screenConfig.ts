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
  {
    name: 'name',
    title: "What's your name?",
    nextScreen: 'gender',
    type: 'text',
    inputProps: {
      label: 'Name',
      autoFocus: true
    }
  },
  {
    name: 'gender',
    title: "What's your gender?",
    nextScreen: 'date-of-birth',
    type: 'picker',
    options: [
      { label: "Male", value: "male" },
      { label: "Female", value: "female" },
    ]
  },
  {
    name: 'date-of-birth',
    title: "When's your birthday?",
    nextScreen: 'height',
    type: 'text',
    inputProps: {
      label: 'YYYY-MM-DD'
    }
  },
  {
    name: 'height',
    title: "What's your height?",
    nextScreen: 'build',
    type: 'picker',
    options: Array.from({ length: 5 }, (_, i) => ({
      label: `${120 + i} cm`,
      value: `${120 + i}`,
    }))
  },
  {
    name: 'build',
    title: "What's your build?",
    nextScreen: 'appearance',
    type: 'picker',
    options: [
      { label: "Slim", value: "slim" },
      { label: "Athletic", value: "athletic" },
      { label: "Average", value: "average" },
      { label: "Heavy", value: "heavy" },
    ]
  },
  {
    name: 'appearance',
    title: "What's your religious appearance?",
    nextScreen: 'education',
    type: 'picker',
    options: [
      { label: "Always wear hijab/thobe", value: "always-religious" },
      { label: "Sometimes wear hijab/thobe", value: "sometimes-religious" },
      { label: "Rarely wear hijab/thobe", value: "rarely-religious" },
      { label: "Modern/Western clothing", value: "modern" },
    ]
  },
  {
    name: 'education',
    title: "What's your education level?",
    nextScreen: 'occupation',
    type: 'picker',
    options: [
      { label: "High School", value: "high-school" },
      { label: "Some College", value: "some-college" },
      { label: "Bachelor's Degree", value: "bachelors-degree" },
      { label: "Master's Degree or Higher", value: "masters-degree" },
      { label: "Trade/Technical School", value: "trade-school" },
    ]
  },
  {
    name: 'occupation',
    title: "What's your occupation?",
    nextScreen: 'religious-practice',
    type: 'picker',
    options: [
      { label: "Engineer", value: "engineer" },
      { label: "Doctor", value: "doctor" },
      { label: "Teacher", value: "teacher" },
      { label: "Artist", value: "artist" },
      { label: "Other", value: "other" },
    ]
  },
  {
    name: 'religious-practice',
    title: "What's your religious practice?",
    nextScreen: 'religious-manhaj',
    type: 'picker',
    options: [
      { label: "Practicing", value: "practicing" },
      { label: "Non-Practicing", value: "non-practicing" },
      { label: "Occasionally Practicing", value: "occasionally-practicing" },
    ]
  },
  {
    name: 'religious-manhaj',
    title: "What's your religious manhaj?",
    nextScreen: 'biography',
    type: 'picker',
    options: [
      { label: "Sunni", value: "sunni" },
      { label: "Shia", value: "shia" },
      { label: "Sufi", value: "sufi" },
      { label: "Other", value: "other" },
    ]
  },
  {
    name: 'biography',
    title: "Tell us about yourself",
    nextScreen: 'living-arrangements',
    type: 'multiline',
    inputProps: {
      numberOfLines: 6
    }
  },
  {
    name: 'living-arrangements',
    title: "What's your living arrangement?",
    nextScreen: 'willing-to-relocate',
    type: 'picker',
    options: [
      { label: "Living with family", value: "family" },
      { label: "Living alone", value: "alone" },
      { label: "Shared accommodation", value: "shared" },
    ]
  },
  {
    name: 'willing-to-relocate',
    title: "Are you willing to relocate?",
    nextScreen: 'welcome',
    type: 'picker',
    options: [
      { label: "Yes", value: "yes" },
      { label: "No", value: "no" },
      { label: "Maybe", value: "maybe" },
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