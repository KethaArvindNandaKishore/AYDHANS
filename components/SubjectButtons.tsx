import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { router, useNavigation } from "expo-router";
import RenderingData from "./RenderingData";
import Data_Subject from "@/Hooks";

// Define the type for the item prop
interface SubjectButtonProps {
  item: {
    programming_Languages: string;
    bg_colour: string;
    image: any; // Adjust the type based on your image source
    title: string;
  };
}

const SubjectButtons: React.FC<SubjectButtonProps> = ({ item }) => {
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate('ImportantTopics', { language: item.title });
  };
 
  return (
    <View>
      <TouchableOpacity
       onPress={handlePress} // Trigger navigation on press
       accessible={true}
       accessibilityLabel={`Go to ${item.title} topics`}
        
       
        accessible={true}
        accessibilityLabel={`Go to ${item.title} topics`}
      >
        <View
          className="flex flex-row items-center justify-evenly w-80 h-32 rounded-xl shadow-lg my-4"
          style={{ backgroundColor: item.bg_colour }}
        >
          <Image source={item.image} className="w-24 h-24 p-8" />
          <Text className="text-3xl font-bold ml-2 text-white p-10">
            {item.title}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SubjectButtons;
