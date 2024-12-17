import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Surface, Text, Avatar, TouchableRipple, useTheme } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header } from '@/components/ui/Header';

interface Message {
  id: string;
  user: {
    name: string;
    avatar: string;
  };
  lastMessage: string;
  timestamp: string;
  unread: boolean;
}

const mockMessages: Message[] = [
  {
    id: '1',
    user: {
      name: 'Sarah',
      avatar: 'https://picsum.photos/seed/1/200',
    },
    lastMessage: "Hey, how's it going?",
    timestamp: '5m ago',
    unread: true,
  },
  {
    id: '2',
    user: {
      name: 'Michael',
      avatar: 'https://picsum.photos/seed/2/200',
    },
    lastMessage: 'Sure, that sounds great!',
    timestamp: '1h ago',
    unread: false,
  },
  {
    id: '3',
    user: {
      name: 'Emma',
      avatar: 'https://picsum.photos/seed/3/200',
    },
    lastMessage: 'Looking forward to meeting you!',
    timestamp: '2h ago',
    unread: true,
  },
];

export default function MessagesScreen() {
  const theme = useTheme();

  const renderItem = ({ item }: { item: Message }) => (
    <TouchableRipple
      onPress={() => console.log('Navigate to chat with:', item.user.name)}
      style={styles.messageItem}
    >
      <Surface style={styles.messageSurface} elevation={0}>
        <Avatar.Image size={50} source={{ uri: item.user.avatar }} />
        <View style={styles.messageContent}>
          <View style={styles.messageHeader}>
            <Text style={styles.userName}>{item.user.name}</Text>
            <Text style={styles.timestamp}>{item.timestamp}</Text>
          </View>
          <View style={styles.messagePreview}>
            <Text 
              numberOfLines={1} 
              style={[
                styles.lastMessage,
                item.unread && styles.unreadMessage
              ]}
            >
              {item.lastMessage}
            </Text>
            {item.unread && <View style={styles.unreadDot} />}
          </View>
        </View>
      </Surface>
    </TouchableRipple>
  );

  return (
    <View style={styles.container}>
      <Header title="Messages" />
      <FlatList
        data={mockMessages}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 20,
    backgroundColor: 'white',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  listContent: {
    padding: 10,
  },
  messageItem: {
    marginBottom: 10,
    borderRadius: 12,
    backgroundColor: 'white',
  },
  messageSurface: {
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
  },
  messageContent: {
    flex: 1,
    marginLeft: 15,
  },
  messageHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  messagePreview: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  timestamp: {
    fontSize: 12,
    color: '#666',
  },
  lastMessage: {
    fontSize: 14,
    color: '#666',
    flex: 1,
    marginRight: 10,
  },
  unreadMessage: {
    fontWeight: '600',
    color: '#333',
  },
  unreadDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#2196F3',
  },
}); 