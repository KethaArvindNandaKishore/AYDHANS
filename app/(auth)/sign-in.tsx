
import { SafeAreaView } from 'react-native-safe-area-context'
import { View, Text, ScrollView, Image, Alert } from "react-native";

import { useSignIn } from "@clerk/clerk-expo";
import { Link, router } from "expo-router";
import { LinearGradient } from 'expo-linear-gradient';


import { icons, images } from "@/constants";
import InputField from "@/components/InputField";
import { useState, useCallback } from "react";
import CustomButton from "@/components/CustomButton";
import OAuth from "@/components/OAuth";



const signIn = () => {
  const { signIn, setActive, isLoaded } = useSignIn();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const onSignInPress = useCallback(async () => {
    if (!isLoaded) return;

    try {
      const signInAttempt = await signIn.create({
        identifier: form.email,
        password: form.password,
      });

      if (signInAttempt.status === "complete") {
        await setActive({ session: signInAttempt.createdSessionId });
        router.replace("/(root)/(tabs)/home");
      } else {
        // See https://clerk.com/docs/custom-flows/error-handling for more info on error handling
        console.log(JSON.stringify(signInAttempt, null, 2));
        Alert.alert("Error", "Log in failed. Please try again.");
      }
    } catch (err: any) {
      console.log(JSON.stringify(err, null, 2));
      Alert.alert("Error", err.errors[0].longMessage);
    }
  }, [isLoaded, form]);
  return (
    
    
    
    <LinearGradient
    className='h-full pt-10'
    
     end={{ x: 1, y: 1 }}       
     colors={['#b6b5d4', '#736ed5', '#2118d7']}
     start={{ x: 0, y: 0 }}>
    
    <ScrollView className="flex w-full h-full ">
         
          <Text className="text-2xl text-white font-bold  left-5 mt-14 ">
            Welcome 👋
          </Text>
          <View className="p-2">
           
            <InputField
              label="Email"
              labelStyle="text-white"
              placeholder="Enter your Email"
              icon={icons.email}
              value={form.name}
              onChangeText={(value) => setForm({ ...form, email: value })}
            />

            <InputField
              label="Password"
              labelStyle="text-white"
              placeholder="Enter your Password"
              className=""
              icon={icons.lock}
              value={form.password}
              onChangeText={(value) => setForm({ ...form, password: value })}
              secureTextEntry={true}
            />
            <View className="m-2"></View>
            <CustomButton
            title = "Submit"
            onPress={onSignInPress}
            bgVariant={"secondary"}
            />
          </View>
          <View className="p-3">

          <OAuth/>
          <View className="">

            <Link
            href="/sign-up"
            className="text-lg text-center text-white mt-10 "><Text>
              Don't have an account? <Text className="text-primary-500">SignUp</Text>
            </Text>
            </Link>

          </View>
          </View>
        </ScrollView>
    </LinearGradient>
     
  )
}

export default signIn