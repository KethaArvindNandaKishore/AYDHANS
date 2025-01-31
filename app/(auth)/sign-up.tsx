import { View, Text, ScrollView, Image } from "react-native";
import { Link,router } from "expo-router";
import { useSignUp } from "@clerk/clerk-expo";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons, images } from "@/constants";
import InputField from "@/components/InputField";
import { useState } from "react";
import CustomButton from "@/components/CustomButton";
import OAuth from "@/components/OAuth";
import { Alert } from "react-native";

import ReactNativeModal from "react-native-modal";
import { fetchAPI } from "@/lib/fetch";
import { LinearGradient } from "expo-linear-gradient";
// SingUp function 

const SignUp = () => {

const [form, setForm] = useState({
  name: "",
  email: "",
  password: "",
});
const[showSuccessModal, setShowSuccessModel]=useState(false);
const { isLoaded, signUp, setActive } = useSignUp();
const [verification, setVerification] = useState({
  state: "default",
  error: "",
  code: "",
});
const onSignUppress = async()=>{
  if (!isLoaded) {
    return;
  }

  try {
    await signUp.create({
      emailAddress: form.email,
      password: form.password,
    });

    await signUp.prepareEmailAddressVerification({ strategy: "email_code" });

    setVerification({
      ...verification,
      state: "pending",
    });
  } catch (error:any){
    Alert.alert("Error", error.errors[0].longMessage)
  }
};

const onPressVerify = async () => {
  if (!isLoaded) {
    return;
  }

  try {
    const completeSignUp = await signUp.attemptEmailAddressVerification({
      code: verification.code,
    });

    if (completeSignUp.status === "complete") {
      await fetchAPI('/(api)/user', {
        method:"POST",
        body:JSON.stringify(
          {
            name:form.name,
            email:form.email,
            clerkId:completeSignUp.createdUserId
          }
        )
        })
      await setActive({ session: completeSignUp.createdSessionId });
      setVerification({
        ...verification,
        state: "success",
      });
    } else {
      setVerification({
        ...verification,
        error: "verification failed",
        state: "success",
      });
    }
  } catch (err: any) {
    setVerification({
      ...verification,
      error: err.errors[0].logMessage,
      state: "success",
    });
  }

}


  


  return (
    <LinearGradient
    className="pt-10 h-full"
     end={{ x: 1, y: 1 }}       
     colors={['#b6b5d4', '#736ed5', '#2118d7']}
     start={{ x: 0, y: 0 }}>
    
      
        

        <ScrollView className="flex w-full ">
         
          <Text className="text-2xl text-white font-bold  left-5 mt-14 ">
            Create Your Account 👋
          </Text>
          <View className="p-2">
            <InputField
              label="Name"
              labelStyle="text-white"
              placeholder="Enter your Name"
              icon={icons.person}
              value={form.name}
              onChangeText={(value) => setForm({ ...form, name: value })}
            />
            <InputField
              label="Email"
              labelStyle="text-white"
              placeholder="Enter your Email"
              icon={icons.email}
              value={form.email}
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
            onPress={onSignUppress}
            bgVariant={"secondary"}
            />
          </View>
          <View className="p-3">

          <OAuth/>
          <View className="">

            <Link
            href="/sign-in"
            className="text-lg text-center text-white mt-10 "><Text>
              Already have an account? <Text className="text-primary-500">Login</Text>
            </Text>
            </Link>

          </View>
          </View>
          <ReactNativeModal isVisible={verification.state === "pending"}
        onModalHide={()=>{if(verification.state === 'success') setShowSuccessModel(true)}}>
          <View className="bg-white px-7 py-9 rounded-2xl min-h-[300px]">
            <Text className="text-3xl font-JakartaExtraBold mb-2">
              Verification

            </Text>
            <Text className="font-Jakarta mb-5">
              We've sent a verification code to {form.email}

            </Text>
            <InputField
            label="Code"
            icon={icons.lock}
            placeholder="12345"
            placeholderTextColor={"grey"}
            value={verification.code}
            keyboardType="numeric"
            onChangeText={(code)=>setVerification({
              ...verification, code
            })}

            />

            {verification.error && (
              <Text className="text-red-500 text-sm mt-1">{verification.error}</Text>
            ) }

            <CustomButton title="Verify Email" onPress={onPressVerify} className="mt-5 bg-success-500" />


          </View>
          </ReactNativeModal>
          <ReactNativeModal isVisible={showSuccessModal}>
          <View className="bg-white px-7 py-9 rounded-2xl min-h-[300px]">
            <Image source={images.check} className="w-[110px] h-[110px] mx-auto my-5" />
            <Text className="text-3xl font-JakartaBold text-center">
              Verified

            </Text>
            <Text className="text-base text-gray-400 font-Jakarta text-center mt-2">
              You have successfully Verified your account

            </Text>
            <CustomButton title="Browse Home" onPress={()=>{
              setShowSuccessModel(false), router.push("/(root)/(tabs)/home")}} className="mt-5"/>
          </View>
        </ReactNativeModal>



        </ScrollView>
     
   
    </LinearGradient>
  );
};

export default SignUp;
