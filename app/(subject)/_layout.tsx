import Data_Subject from "@/Hooks";
import { Stack } from "expo-router";
import { Component } from "react";

const Layout = () => {
  return (
    <Stack>
      

        <Stack.Screen name="coding" options={{ headerShown: false } }/>
        <Stack.Screen name="ImportantTopics" options={{headerShown:false}} />
        <Stack.Screen name="electronic" options={{headerShown:false}}  />
     

     </Stack>
    
  )
}

export default Layout