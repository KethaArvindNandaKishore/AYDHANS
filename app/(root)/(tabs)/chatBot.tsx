import { View, Text, TouchableOpacity, TextInput, KeyboardAvoidingView, ScrollView, FlatList, ActivityIndicator } from 'react-native';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from "axios";
import { speak, isSpeakingAsync, stop } from "expo-speech";
import { Ionicons } from '@expo/vector-icons';
import ChatBubble from '@/components/ChatBubble';

const ChatBot = () => {
  const [chat, setChat] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [inputFocused, setInputFocused] = useState(false);

  const API_KEY = process.env.EXPO_PUBLIC_GOOGLE_GEMINI_API_KEY;

  const handleUserInput = async () => {
    const updatedChat = [
      ...chat,
      {
        role: "user",
        parts: [{ text: userInput }],
      },
    ];

    setLoading(true);

    try {
      const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${API_KEY}`,
        { contents: updatedChat }
      );
      const modelResponse = response.data?.candidates?.[0]?.content?.parts?.[0]?.text || "";
      if (modelResponse) {
        const updatedChatWithModel = [
          ...updatedChat,
          {
            role: "model",
            parts: [{ text: modelResponse }],
          },
        ];
        setChat(updatedChatWithModel);
        setUserInput('');
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSpeech = async (text) => {
    if (isSpeaking) {
      stop();
      setIsSpeaking(false);
    } else {
      if (!(await isSpeakingAsync())) {
        speak(text);
        setIsSpeaking(true);
      }
    }
  };

  const renderChatItem = ({ item }) => (
    <ChatBubble
      role={item.role}
      text={item.parts[0].text}
      onSpeech={() => handleSpeech(item.parts[0].text)}
    />
  );

  return (
    <View className="flex-1 bg-violet-50 pt-10">
      <KeyboardAvoidingView className="flex-1" behavior="padding" keyboardVerticalOffset={100}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
          <FlatList
            data={chat}
            renderItem={renderChatItem}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle="flex-grow justify-end px-4"
          />
          <View className="flex-row items-center mt-4 mb-4 p-2 bg-white rounded-lg shadow-lg">
            <TextInput
              className="flex-1 h-12 p-4 border border-violet-300 rounded-full bg-gray-100 text-gray-800 shadow-inner focus:outline-none focus:ring-2 focus:ring-violet-500 transition-colors duration-200"
              placeholder="Type your message..."
              placeholderTextColor={"gray"}
              value={userInput}
              onChangeText={setUserInput}
              selectionColor={"violet"}
              onFocus={() => setInputFocused(true)}
              onBlur={() => setInputFocused(false)}
            />
            <TouchableOpacity
              className={`ml-2 p-3 rounded-full flex-row items-center justify-center transform transition-transform duration-200 ${userInput ? "bg-violet-600" : "bg-violet-200"}`}
              onPress={handleUserInput}
              activeOpacity={0.7}
              disabled={!userInput} // Disable when input is empty
            >
              <Ionicons name="send" size={20} color="#fff" />
            </TouchableOpacity>
          </View>
          {loading && <ActivityIndicator className="m-2" color={"#333"} />}
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default ChatBot;
