// AboutUs.js
import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, Modal, TextInput, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { icons } from '@/constants';

const AboutUs = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleContactPress = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleSubmit = async () => {
    const contactData = {
      name,
      email,
      message,
    };

    try {
      const response = await fetch('http://YOUR_SERVER_URL/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactData),
      });

      const data = await response.json();

      if (data.success) {
        alert('Message sent successfully!');
        handleCloseModal(); // Close the modal after submission
      } else {
        alert('Error sending message.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('There was an error sending your message.');
    }
  };

  return (
    <LinearGradient
      className="flex-1 pt-5"
      colors={["#4c4fef", "#736ed5"]}
    >
      <ScrollView className="p-10 mb-4">
        <Text className="text-3xl font-bold text-white text-center mb-4">About Us</Text>

        <Text className="text-lg text-white mb-4">
        Welcome to AYDHANS! Our app is designed to alleviate the burdens of student life, making learning easier and more accessible. AYDHANS empowers students to reach their full potential academically and professionally. By leveraging AI and advanced technologies, we provide personalized learning experiences, resources, and support, ensuring that every student can thrive in their educational journey. With AYDHANS, we aim to transform the way students engage with learning, making it not only effective but also enjoyable and fulfilling.
        </Text>

        <Text className="text-xl font-semibold text-white mb-2">Our Mission</Text>
        <Text className="text-white mb-4">
        Our mission is to empower students to embrace their educational journeys with confidence and ease. By providing innovative tools and resources, we strive to ensure that every student can pursue their dreams without unnecessary burdens, fostering a future where learning is accessible, engaging, and fulfilling.
        </Text>

        <Text className="text-xl font-semibold text-white mb-2">Meet the Team</Text>

        {/* Team Members Section */}
        <View className="flex-col justify-between mb-4">
          {/* Replace with actual team member images */}
          {['MATTAM VAIBHAVI', 'CHINNALAXMANI VANI', 'KANK'].map((name, index) => (
            <View className="items-center m-4" key={index}>
              <Image
                source={icons.person} 
                className="w-20 h-20 rounded-full mb-2"
              />
              <Text className="text-white">{name}</Text>
              <Text className="text-gray-300">{index === 0 ? 'Founder/Designer' : 'Developer'}</Text>
            </View>
          ))}
        </View>

        <Text className="text-xl font-semibold text-white mb-2">Get in Touch</Text>
        <TouchableOpacity 
          onPress={handleContactPress}
          className="bg-white rounded-full px-6 py-3"
        >
          <Text className="text-lg font-semibold text-gray-800">Contact Us</Text>
        </TouchableOpacity>

        {/* Modal */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={handleCloseModal}
        >
          <View style={styles.modalBackground}>
            <View style={styles.modalContainer}>
              <Text style={styles.modalTitle}>Contact Us</Text>

              <TextInput
                style={styles.input}
                placeholder="Your Name"
                placeholderTextColor="#999"
                value={name}
                onChangeText={setName}
              />
              <TextInput
                style={styles.input}
                placeholder="Your Email"
                placeholderTextColor="#999"
                value={email}
                onChangeText={setEmail}
              />
              <TextInput
                style={styles.input}
                placeholder="Your Message"
                placeholderTextColor="#999"
                multiline
                numberOfLines={4}
                value={message}
                onChangeText={setMessage}
              />

              <TouchableOpacity 
                onPress={handleSubmit} 
                style={styles.submitButton}
              >
                <Text style={styles.submitButtonText}>Send</Text>
              </TouchableOpacity>

              <TouchableOpacity
              className='p-10' onPress={handleCloseModal} style={styles.closeButton}>
                <Text style={styles.closeButtonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    width: '100%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  submitButton: {
    backgroundColor: '#4c4fef',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  submitButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  closeButton: {
    paddingVertical: 10,
  },
  closeButtonText: {
    color: '#4c4fef',
    fontWeight: 'bold',
  },
});

export default AboutUs;
