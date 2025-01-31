import { View, Text, TouchableOpacity,  } from "react-native";
import React from "react";
import { ButtonProps } from "@/types/type";

const getBgVariantStyle = (variant: ButtonProps['bgVariant']) =>{
    switch(variant){
        case "primary":
            return "bg-gray-500"
        case "danger":
            return "bg-red-500"
        case "secondary":
            return "bg-blue-500"
        case "success":
            return "bg-green-500"
        case "startingPage":
            return "bg-[#736ED5]"
        case "outline":
            return "bg-transparent border-neutral-300 border-[0.5px]"
        case "test":
            return "bg-[#E2E8F0]"
                           
        
    }
}

const getTextVariantStyle = (variant: ButtonProps['textVariant']) =>{
    switch(variant){
        case "primary":
            return "text-black"
        case "secondary":
            return "text-gray-100"
        case "danger":
            return "text-red-100"
        case "success":
            return "text-green-100"
        case "default":
            return "text-white"
        
    }
}

const CustomButton = ({
  onPress,
  title,
  bgVariant = "primary",
  textVariant = "default",
  IconLeft,
  IconRight,
  className,
...props}:ButtonProps
) => {
  return <TouchableOpacity onPress={onPress} className={`w-full rounded-full flex flex-row justify-center p-5 items-center shadow-md shadow-neutral-400/70 ${getBgVariantStyle(bgVariant)} ${className}`}>
    
    {IconLeft &&<IconLeft/>}
    <Text className={`text-xl font-bold ${getTextVariantStyle(textVariant)}`}>{title}</Text>
    {IconRight&&<IconRight/>}

  </TouchableOpacity>;
};

export default CustomButton;
