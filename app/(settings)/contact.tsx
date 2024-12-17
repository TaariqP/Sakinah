import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { TextInput, Button, Text, Surface, useTheme, SegmentedButtons } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { Header } from '@/components/ui/Header';

type FeedbackType = 'bug' | 'feature' | 'other';

export default function ContactScreen() {
  const theme = useTheme();
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [feedbackType, setFeedbackType] = useState<FeedbackType>('other');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async () => {
    if (!subject.trim() || !message.trim()) {
      setError('Please fill in all fields');
      return;
    }

    setLoading(true);
    setError('');

    try {
      // Here you would implement your feedback submission logic
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulated API call
      setSuccess(true);
      
      // Automatically go back after showing success message
      setTimeout(() => {
        router.back();
      }, 2000);
    } catch (err) {
      setError('Failed to submit feedback. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Header title="Contact Us" />
      
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.content}
      >
        <Surface style={styles.card} elevation={2}>
          <Text style={styles.subtitle}>
            We value your feedback! Let us know how we can improve your experience.
          </Text>

          {error ? (
            <Text style={[styles.message, styles.error]}>{error}</Text>
          ) : null}

          {success ? (
            <Text style={[styles.message, styles.success]}>
              Thank you for your feedback! We'll review it shortly.
            </Text>
          ) : null}

          <SegmentedButtons
            value={feedbackType}
            onValueChange={setFeedbackType as (value: string) => void}
            style={styles.segmentedButtons}
            buttons={[
              { value: 'bug', label: 'Bug' },
              { value: 'feature', label: 'Feature' },
              { value: 'other', label: 'Other' },
            ]}
          />

          <TextInput
            label="Subject"
            value={subject}
            onChangeText={setSubject}
            mode="outlined"
            style={styles.input}
          />

          <TextInput
            label="Message"
            value={message}
            onChangeText={setMessage}
            mode="outlined"
            multiline
            numberOfLines={6}
            style={styles.input}
          />

          <Button
            mode="contained"
            onPress={handleSubmit}
            style={styles.button}
            loading={loading}
            disabled={loading || success}
          >
            Submit Feedback
          </Button>
        </Surface>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollView: {
    flex: 1,
  },
  content: {
    padding: 20,
  },
  card: {
    padding: 20,
    borderRadius: 15,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
    textAlign: 'center',
  },
  segmentedButtons: {
    marginBottom: 20,
  },
  input: {
    marginBottom: 16,
    backgroundColor: 'transparent',
  },
  button: {
    marginTop: 8,
    borderRadius: 8,
  },
  message: {
    marginBottom: 20,
    padding: 10,
    borderRadius: 8,
    textAlign: 'center',
  },
  error: {
    backgroundColor: '#ffebee',
    color: '#c62828',
  },
  success: {
    backgroundColor: '#e8f5e9',
    color: '#2e7d32',
  },
}); 