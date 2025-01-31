import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { images } from "@/constants";
import { Language } from "@/constants";
import SubjectButtons from "@/components/SubjectButtons";

const coding = () => {
  return (
    <LinearGradient
      className="pt-10 h-full flex items-center justify-center"
      end={{ x: 1, y: 1 }}
      colors={["#b6b5d4", "#736ed5", "#2118d7"]}
      start={{ x: 0, y: 0 }}
    >
      <View className="flex items-center justify-center h-[90%] w-[90%] bg-white rounded-3xl">
        <View className="flex-1 justify-center items-center bg-gray-100">
          <FlatList
            data={Language}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}           
            renderItem={({ item }) => <SubjectButtons item={item} />}
            contentContainerStyle={{ paddingBottom: 20 }}
           
            
          />
        </View>
      </View>
    </LinearGradient>
  );
};

export default coding;
