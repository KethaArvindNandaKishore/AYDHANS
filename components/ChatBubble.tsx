import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { ChatBubbleType } from '@/types/type';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const ChatBubble = ({ role, text, onSpeech }: ChatBubbleType) => {
  return (
    <View className={`relative mb-2 max-w-[70%] ${role === 'user' ? 'self-end' : 'self-start'}`}>
      <LinearGradient
        colors={role === 'user' ? ['#6e7fdf', '#8e93f7'] : ['#4a4f7d', '#6a6e99']}
        style={{
          borderRadius: 20,
          padding: 15,
          paddingBottom: 40, // To create space for the icon
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.3,
          shadowRadius: 4,
          elevation: 2,
        }}
      >
        <Text className="text-white text-lg font-semibold">{text}</Text>
        {role === 'model' && (
          <TouchableOpacity onPress={onSpeech} className="absolute bottom-2 right-2 bg-white p-2 rounded-full shadow">
            <Ionicons name="volume-high-outline" size={24} color="#4a4f7d" />
          </TouchableOpacity>
        )}
      </LinearGradient>
    </View>
  );
};

export default ChatBubble;
