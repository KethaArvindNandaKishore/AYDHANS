// App.js
import React, { useEffect, useRef } from 'react';
import { View, Text, Animated, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

const ComingSoon = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 1500,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 1500,
          useNativeDriver: true,
        }),
      ]),
      { iterations: -1 }
    ).start();
  }, [fadeAnim]);

  return (
    <LinearGradient
      className="flex-1 pt-10 px-6"
      end={{ x: 1, y: 1 }}
      colors={["#4c4fef", "#736ed5", "#2118d7"]}
      start={{ x: 0, y: 0 }}
    >
      <View className="flex-1 items-center justify-center">
        <Animated.View style={{ opacity: fadeAnim }} className="p-8 bg-white rounded-lg shadow-lg w-full max-w-md flex items-center">
          <Text className="text-3xl font-bold text-center text-gray-800">Coming Soon!</Text>
          <Ionicons name="hourglass" size={50} color="#736ed5" className="mt-4 mx-auto" />
        </Animated.View>

        <Text className="mt-6 text-lg text-center text-white max-w-md">
          We're working hard to bring you this feature. Stay tuned for updates!
        </Text>

        <TouchableOpacity
        onPress={()=>router.back()}
         className="mt-8 bg-white rounded-full px-6 py-3 shadow-md">
          <Text className="text-lg font-semibold text-gray-800">Explore Other Features</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default ComingSoon;
