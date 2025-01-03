import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, IconButton } from 'react-native-paper';
import { Heart, MessageCircle } from 'lucide-react-native';

interface ProfileCardProps {
  name: string;
  age: number;
  timeAgo: string;
  location: string;
  details: string;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  age,
  timeAgo,
  location,
  details,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <View style={styles.header}>
          <Text style={styles.nameAge}>{name}, {age}</Text>
          <Text style={styles.timeAgo}>{timeAgo}</Text>
        </View>
        <Text style={styles.details}>
          🇬🇧 {location}. {details}
        </Text>
      </View>
      <View style={styles.actions}>
        <IconButton
          icon={({ size }) => <Heart size={size} color="#FF934F" />}
          size={24}
          style={styles.actionButton}
          mode="contained"
          containerColor="#FFF0E6"
        />
        <IconButton
          icon={({ size }) => <MessageCircle size={size} color="#4DB6AC" />}
          size={24}
          style={styles.actionButton}
          mode="contained"
          containerColor="#E0F2F1"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  info: {
    flex: 1,
    paddingRight: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 8,
    marginBottom: 4,
  },
  nameAge: {
    fontSize: 18,
    fontWeight: '600',
  },
  timeAgo: {
    fontSize: 14,
    color: '#999999',
  },
  details: {
    fontSize: 14,
    color: '#666666',
    lineHeight: 20,
  },
  actions: {
    flexDirection: 'row',
    gap: 8,
  },
  actionButton: {
    margin: 0,
  },
});

