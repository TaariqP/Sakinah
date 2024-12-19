import React from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { Text, Button, useTheme } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';

interface OnboardingScreenProps {
  title: string;
  children: React.ReactNode;
  onNext: () => void | Promise<void>;
  nextLabel?: string;
  isLastStep?: boolean;
}

export function OnboardingScreen({ 
  title, 
  children, 
  onNext, 
  nextLabel = "Continue",
  isLastStep = false 
}: OnboardingScreenProps) {
  const theme = useTheme();
  const [loading, setLoading] = React.useState(false);

  const handleNext = async () => {
    setLoading(true);
    try {
      await onNext();
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={[styles.title, { color: theme.colors.primary }]}>
              {title}
            </Text>
          </View>

          <View style={styles.inputContainer}>
            {children}
          </View>

          <View style={styles.footer}>
            <Button
              mode="contained"
              onPress={handleNext}
              style={styles.button}
              loading={loading}
            >
              {isLastStep ? "Finish" : nextLabel}
            </Button>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
  },
  header: {
    marginBottom: 30,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  inputContainer: {
    flex: 1,
  },
  footer: {
    marginTop: 20,
  },
  button: {
    borderRadius: 8,
  },
}); 