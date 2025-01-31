import React, { useState } from 'react';
import { View, TouchableOpacity, Dimensions } from 'react-native';
import Video from 'react-native-video';

const { height, width } = Dimensions.get('window');

const VideoPlayer = ({ videoUrl }) => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const toggleFullScreen = () => {
    setIsFullScreen((prev) => !prev);
  };

  return (
    <TouchableOpacity onPress={toggleFullScreen} style={{ height: '100%', width: '100%' }}>
      <Video
        source={{ uri: videoUrl }} // Ensure videoUrl is a valid URL
        style={{
          height: isFullScreen ? width : height, // Swap dimensions for full-screen
          width: isFullScreen ? height : width, // Swap dimensions for full-screen
          transform: isFullScreen ? [{ rotate: '90deg' }] : [], // Rotate when full-screen
        }}
        resizeMode="cover"
        repeat={true} // Auto-play each video
        paused={false} // Auto-play each video
        muted={false} // Adjust volume control
        onError={(error) => {
          console.error("Video Error:", error); // Log any errors
        }}
      />
    </TouchableOpacity>
  );
};

export default VideoPlayer;
