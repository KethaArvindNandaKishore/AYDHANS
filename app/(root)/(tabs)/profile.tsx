import { useUser, SignedOut } from "@clerk/clerk-expo";
import { Image, ScrollView, Text, View, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { icons } from "@/constants";
import InputField from "@/components/InputField";

const Profile = () => {
  const { user } = useUser();

  const handleSignOut = () => {
    SignedOut;
    router.replace("/(auth)/sign-in");
  };

  return (
    <LinearGradient
      className="flex-1"
      end={{ x: 1, y: 1 }}
      colors={['#b6b5d4', '#736ed5', '#2118d7']}
      start={{ x: 0, y: 0 }}
    >
      <ScrollView className="px-6" contentContainerStyle={{ paddingBottom: 100 }}>
        <View className="flex flex-row justify-between items-center mt-12 mb-8">
          <Text className="text-4xl font-extrabold text-white">My Profile</Text>
          <TouchableOpacity onPress={handleSignOut} className="w-12 h-12 bg-white rounded-full shadow-md justify-center items-center">
            <Image source={icons.out} className="w-6 h-6" />
          </TouchableOpacity>
        </View>

        <View className="flex items-center">
          <Image
            source={{ uri: user?.externalAccounts[0]?.imageUrl ?? user?.imageUrl }}
            className="w-40 h-40 rounded-full border-4 border-white shadow-lg mb-4"
          />
          <Text className="text-2xl font-semibold text-white">{user?.firstName || "User"}</Text>
        </View>

        <View className="bg-white rounded-xl shadow-lg px-6 py-8 mt-6">
          <View className="flex flex-col space-y-4">
            <InputField
              label="First Name"
              placeholder={user?.firstName || "Not Found"}
              placeholderTextColor={"#A0AEC0"}
              containerStyle="w-full"
              inputStyle="p-3 rounded-md border border-gray-300 bg-gray-50"
              editable={false}
            />
            <InputField
              label="Last Name"
              placeholder={user?.lastName || "Not Found"}
              placeholderTextColor={"#A0AEC0"}
              containerStyle="w-full"
              inputStyle="p-3 rounded-md border border-gray-300 bg-gray-50"
              editable={false}
            />
            <InputField
              label="Email"
              placeholder={user?.primaryEmailAddress?.emailAddress || "Not Found"}
              placeholderTextColor={"#A0AEC0"}
              containerStyle="w-full"
              inputStyle="p-3 rounded-md border border-gray-300 bg-gray-50"
              editable={false}
            />
            <InputField
              label="Phone"
              placeholder={user?.primaryPhoneNumber?.phoneNumber || "Not Found"}
              placeholderTextColor={"#A0AEC0"}
              containerStyle="w-full"
              inputStyle="p-3 rounded-md border border-gray-300 bg-gray-50"
              editable={false}
            />
          </View>
        </View>

        <TouchableOpacity
          onPress={() => router.navigate("/About")}
          className="mt-6 bg-white rounded-full px-8 py-3 shadow-md"
        >
          <Text className="text-lg font-semibold text-gray-800 text-center">About</Text>
        </TouchableOpacity>
      </ScrollView>
    </LinearGradient>
  );
};

export default Profile;
