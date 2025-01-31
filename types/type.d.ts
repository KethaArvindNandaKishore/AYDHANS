import { TouchableOpacity, TouchableOpacityProps } from "react-native";

declare interface ButtonProps extends TouchableOpacityProps {
    title: string;
    bgVariant?: "primary" | "secondary" | "danger" | "outline" | "success"|"startingPage";
    textVariant?: "primary" | "default" | "secondary" | "danger" | "success";
    IconLeft?: React.ComponentType<any>;
    IconRight?: React.ComponentType<any>;
    className?: string;

}


declare interface InputFieldProps extends TextInputProps {
    label: string;
    icon?: any;
    secureTextEntry?: boolean;
    labelStyle?: string;
    containerStyle?: string;
    inputStyle?: string;
    iconStyle?: string;
    className?: string;
}


declare interface ChatMessage {
    role: 'user' | 'model'; // Assuming "user" and "model" are the only possible roles
    parts: ChatPart[];      // An array of ChatPart objects
  }

declare interface ChatPart {
    text: string;
  }


  declare interface ChatBubbleType {
    text: string;
    role: string;
    onSpeech: string
  }


  interface Description {
    points: string[];
  }
  
  interface Topic {
    topic: string;
    description: Description;
    sample_code: string;
  }
  
  interface ProgrammingLanguage {
    language: string;
    important_topics: Topic[];
  }