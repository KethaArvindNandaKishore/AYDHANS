// CodingConsole.js
import React, { useState } from 'react';
import { View, TextInput, Button, Text, ScrollView, TouchableOpacity, Modal, FlatList, SafeAreaView, Keyboard, TouchableWithoutFeedback, Image } from 'react-native';
import { Feather } from '@expo/vector-icons'; // For theme toggle icons
import { Ionicons } from '@expo/vector-icons';

const CodingConsole = () => {
  const [language, setLanguage] = useState('Python');
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('Output will be displayed here.');
  const [modalVisible, setModalVisible] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const javaIcon = require('@/assets/icons/java.png');
  const cIcon = require("@/assets/icons/c-.png")
  const Cpp = require("@/assets/icons/letter-c.png") // Correctly require Java icon

  const colors = {
    light: {
      background: 'bg-white',
      text: 'text-gray-800',
      border: 'border-gray-300',
      button: 'bg-green-500',
      buttonText: 'text-white',
      modalBackground: 'bg-gray-200',
      card: 'bg-white',
      cardBorder: 'border-gray-300',
    },
    dark: {
      background: 'bg-gray-900',
      text: 'text-white',
      border: 'border-gray-600',
      button: 'bg-green-600',
      buttonText: 'text-white',
      modalBackground: 'bg-gray-800',
      card: 'bg-gray-800',
      cardBorder: 'border-gray-600',
    }
  };

  const currentColors = darkMode ? colors.dark : colors.light;
  const languages = [
    { name: 'Python', icon: "logo-python" },
    { name: 'Java', icon: javaIcon }, // Use the correctly required icon
    { name: 'C', icon:Cpp   },
    { name: 'C++', icon: cIcon },
  ];

  const runCode = async () => {
    const payload = {
      language,
      code,
    };

    console.log('Sending API request with payload:', JSON.stringify(payload));

    try {
      const response = await fetch('https://your-api-endpoint.com/run-code', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      setOutput(`Output from API:\n${JSON.stringify(data)}`);
    } catch (error) {
      console.error('Error sending request:', error);
      setOutput('Error sending request');
    }

    Keyboard.dismiss();
  };

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const selectLanguage = (lang) => {
    setLanguage(lang);
    toggleModal();
  };

  const toggleTheme = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <SafeAreaView className={`flex-1 p-4 ${currentColors.background}`}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View className="flex-1">
          <View className="flex-row justify-between mb-4">
            <TouchableOpacity 
              onPress={toggleModal} 
              className={`rounded-lg shadow-md p-3 flex-row items-center flex-1 ${currentColors.card} ${currentColors.cardBorder}`}
            >
              {typeof languages.find(lang => lang.name === language).icon === 'string' ? (
                <Ionicons name={languages.find(lang => lang.name === language).icon} size={24} color={currentColors.text} />
              ) : (
                <Image source={languages.find(lang => lang.name === language).icon} style={{ width: 24, height: 24 }} />
              )}
              <Text className={`text-center text-2xl ml-2 ${currentColors.text}`}>{language}</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={toggleTheme} className={`rounded-lg shadow-md p-3 flex-2 m-2 ${currentColors.card} ${currentColors.cardBorder}`}>
              <Feather name={darkMode ? "sun" : "moon"} size={24} color={currentColors.text} />
            </TouchableOpacity>
          </View>

          <Modal
            transparent={true}
            animationType="slide"
            visible={modalVisible}
            onRequestClose={toggleModal}
          >
            <View className={`flex-1 justify-center items-center ${currentColors.modalBackground}`}>
              <View className={`w-4/5 rounded-lg p-4 shadow-lg ${currentColors.card} ${currentColors.cardBorder}`}>
                <FlatList
                  data={languages}
                  keyExtractor={(item) => item.name}
                  renderItem={({ item }) => (
                    <TouchableOpacity 
                      onPress={() => selectLanguage(item.name)} 
                      className={`p-3 flex-row items-center ${currentColors.border} ${language === item.name ? 'bg-green-100' : ''}`}
                    >
                      {typeof item.icon === 'string' ? (
                        <Ionicons name={item.icon} size={24} color={currentColors.text} />
                      ) : (
                        <Image source={item.icon} style={{ width: 24, height: 24 }} />
                      )}
                      <Text className={`ml-2 ${currentColors.text}`}>{item.name}</Text>
                    </TouchableOpacity>
                  )}
                />
                <Button title="Close" onPress={toggleModal} />
              </View>
            </View>
          </Modal>

          <View className={`rounded-lg shadow-md mb-4 ${currentColors.card} ${currentColors.cardBorder}`}>
            <TextInput
              value={code}
              onChangeText={setCode}
              placeholder="Write your code here..."
              multiline
              className={`border ${currentColors.border} rounded-lg p-4 h-80 ${currentColors.card} ${currentColors.text} text-lg`}
            />
          </View>
          
          <TouchableOpacity 
            onPress={runCode} 
            className={`rounded-lg shadow-md p-4 mb-4 ${currentColors.button}`}
          >
            <Text className={`text-center ${currentColors.buttonText} font-bold text-lg`}>Run Code</Text>
          </TouchableOpacity>
          
          <ScrollView className={`border rounded-lg p-3 h-1/4 ${currentColors.card}`}>
            <Text className={`font-bold ${currentColors.text}`}>Output:</Text>
            <Text className={`${currentColors.text}`}>{output}</Text>
          </ScrollView>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default CodingConsole;
