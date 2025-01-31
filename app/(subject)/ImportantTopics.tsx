import { View, Text, TouchableOpacity, FlatList, ListRenderItem } from 'react-native';
import React, { useState } from 'react';
import { python, javaProgramming, cppProgramming, javascriptProgramming, cProgramming } from '@/constants/index'; // Import necessary data
import Modal from 'react-native-modal';
import { LinearGradient } from 'expo-linear-gradient';
import { useRoute } from '@react-navigation/native'; // Import useRoute to access params

interface Topic {
  key: number;
  topic: string;
  sample_code: string;
  description: {
    points: string[];
  };
}

const ImportantTopics: React.FC = () => {
  const [isModalVisible, setModalVisible] = useState<boolean>(false);
  const [selectedSampleCode, setSelectedSampleCode] = useState<string>('');
  
  // Get the selected programming language from route params
  const route = useRoute();
  const {language } = route.params;

  // Choose the data based on the selected language
  // let dataToDisplay = [];
  // if (language === 'Python') {
  //   dataToDisplay = python;
  // } else if (language === 'Java') {
  //   dataToDisplay = javaProgramming;
  // } else if (language === 'C++') {
  //   dataToDisplay = cppProgramming;
  // } else if (language === 'JavaScript') {
  //   dataToDisplay = javascriptProgramming;
  // }
  // else if (language === 'C') {
  //   dataToDisplay = cProgramming;
  // }

  let dataToDisplay = [];

switch (language) {
  case 'Python':
    dataToDisplay = python;
    break;
  case 'Java':
    dataToDisplay = javaProgramming;
    break;
  case 'C++':
    dataToDisplay = cppProgramming;
    break;
  case 'JavaScript':
    dataToDisplay = javascriptProgramming;
    break;
  case 'C':
    dataToDisplay = cProgramming;
    break;
  default:
    dataToDisplay = [];
    break;
}


  const toggleModal = (sampleCode: string) => {
    setSelectedSampleCode(sampleCode);
    setModalVisible(!isModalVisible);
  };

  const renderItem: ListRenderItem<Topic> = ({ item }) => (
    <View className='mb-4 p-4 bg-white rounded shadow'>
      <Text className='text-lg font-bold'>{item.topic}</Text>
      <TouchableOpacity onPress={() => toggleModal(item.sample_code)}>
        <Text className='text-blue-500 mt-2'>Show Sample Code</Text>
      </TouchableOpacity>
      <View className='mt-3'>
        {item.description.points.map((point, index) => (
          <Text key={index} className='text-base'>
            ▶ {point}
          </Text>
        ))}
      </View>
    </View>
  );

  return (
    <LinearGradient
      className="pt-10 h-full flex items-center justify-center"
      end={{ x: 1, y: 1 }}
      colors={["#b6b5d4", "#736ed5", "#2118d7"]}
      start={{ x: 0, y: 0 }}
    >
      <View className='flex-1 p-5'>
        <FlatList
          data={dataToDisplay} // Use data based on selected language
          renderItem={renderItem}
          keyExtractor={(item) => item.key.toString()}
        />

        {/* Modal for showing sample code */}
        <Modal isVisible={isModalVisible} onBackdropPress={() => setModalVisible(false)}>
          <View className='bg-white p-5 rounded'>
            <Text className='text-lg font-bold mb-4'>Sample Code</Text>
            <Text>{selectedSampleCode}</Text>
            <TouchableOpacity onPress={() => setModalVisible(false)} className='mt-4'>
              <Text className='text-blue-500'>Close</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    </LinearGradient>
  );
};

export default ImportantTopics;
