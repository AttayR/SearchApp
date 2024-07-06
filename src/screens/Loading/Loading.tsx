import {View, Text, Image, StyleSheet, StatusBar, Animated, Easing} from 'react-native';
import React, {useEffect, useRef} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Splash from '../../assets/images/splash.png';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigations/types';

type LoadingScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Loading'>;

const Loading = () => {
  const navigation = useNavigation<LoadingScreenNavigationProp>();

  const fadeAnim = useRef(new Animated.Value(0)).current; 

  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }
    ).start();
    setTimeout(() => {
      navigation.navigate('Login');
    }, 3000);
  }, [fadeAnim,navigation]);

  return (
    <LinearGradient colors={['#0D90C3', '#0E42C6']} style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0D90C3" />
     
      <Animated.Image
        source={Splash}
        style={[styles.searchIcon, { opacity: fadeAnim }]}
        resizeMode="contain"
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchIcon: {
    width: wp('80%'), 
    height: hp('10%'), 
  },
});

export default Loading;
