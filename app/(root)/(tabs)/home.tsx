import { SignedIn, SignedOut, useUser, signOut } from "@clerk/clerk-expo";
import { Link } from "expo-router";
import { Text, View, TouchableOpacity, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { icons, images } from "@/constants";
import { LinearGradient } from "expo-linear-gradient";
import CourseButton from "@/components/CourseButton";

export default function Page() {
  const { user } = useUser();

  return (
    <LinearGradient
      className="pt-14 h-full"
      colors={["#b6b5d4", "#736ed5", "#2118d7"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <View className="flex- flex-col p-2">
        <Image
          source={{
            uri: user?.externalAccounts[0]?.imageUrl ?? user?.imageUrl,
          }}
          style={{ width: 50, height: 50 }}
          className="rounded-full border-4 border-transparent shadow-lg flex ml-0"
        />

        <Text className="text-2xl font-JakartaExtraBold capitalize text-white pt-4 px-3">
          Welcome,{" "}
          {user?.firstName ||
            user?.emailAddresses[0].emailAddress.split("@")[0]}
          👋
        </Text>
      </View>

      <View className="flex justify-center items-center flex-grow">
        <View className="h-[87%] w-[90%] bg-[#FBFBFB] rounded-3xl flex justify-center items-center ">
          <Text className="text-black text-2xl font-semibold shadow-lg">Explore Our Courses</Text>


          <CourseButton
          text=" CODING              "
          imgUrl={images.CodingImg}
          course="coding"/>
          <CourseButton
          text="ELECTRONICS  "
          course="electronic"
          imgUrl={images.Electro}/>
         
        </View>
      </View>
    </LinearGradient>
  );
}
