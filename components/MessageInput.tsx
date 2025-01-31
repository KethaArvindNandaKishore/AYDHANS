import { View, Text, Animated, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useSharedValue } from "react-native-reanimated";
import { BlurView } from "expo-blur";
import { Ionicons } from "@expo/vector-icons";
import InputField from "./InputField";
const ATouchabaleOpacity = Animated.createAnimatedComponent(TouchableOpacity)

const expandItems =()=>{

}










const MessageInput = () => {
  const [message, setMessage] = useState("");
  const { bottom } = useSafeAreaInsets();
  const expanded = useSharedValue(0);
  return (
    <BlurView intensity={10} style={{ paddingBottom: bottom, paddingTop:0 }}>
        <View className="flex flex-row items-center px-6 bg-white">
           <TouchableOpacity
           onPress={expandItems}
           className= " rounded-xl  bg-gray-300"
           >
            <Ionicons name="add" size={24} color="grey"/>
            <InputField/>

           </TouchableOpacity>

            

        </View>
    </BlurView>
  );
};

export default MessageInput;

export type MessageInputProps = {
  // TODO
  onShouldSendMessage: (message: string) => void;
};
