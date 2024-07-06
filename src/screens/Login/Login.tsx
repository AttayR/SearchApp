import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import styles from './LoginStyle';

const Login: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#ffff" />
      <Text style={styles.title}>Log in</Text>
      <Image source={require('../../assets/images/login.png')} style={styles.image} resizeMode="contain" />
        <Text style={styles.label}>Phone Number</Text>
        <TextInput style={styles.input} placeholder="Phone Number" placeholderTextColor="#9E9E9E" />
      <TouchableOpacity style={styles.buttonContainer} onPress={() => console.log('Submit pressed')}>
        <LinearGradient colors={['#0D90C3', '#0E42C6']} style={styles.button}>
          <Text style={styles.buttonText}>Submit</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
