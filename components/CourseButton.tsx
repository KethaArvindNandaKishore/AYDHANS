import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { images } from '@/constants';
import { useRouter } from 'expo-router';  // Correct import for navigation

const CourseButton = ({ text, imgUrl, course }: { text: string, imgUrl: string, course: string }) => {
  const router = useRouter();  // Initialize router

  const courseSelection = (course: string) => {
    router.push(`/(subject)/${course}`);
   
  };

  return (
    <TouchableOpacity
      className="flex flex-row items-center w-[89%] h-[20%] justify-end bg-[#EAEAEA] px-4 py-2 rounded-full shadow-md border-4 border-blue-600 m-10"
      onPress={() => courseSelection(course)} // Use arrow function
    >
      <Image
        source={imgUrl}
        className="mt-10"
        resizeMode="contain"
      />
      <Text className="text-xl font-bold text-blue-800">{text}</Text>
    </TouchableOpacity>
  );
};

export default CourseButton;
