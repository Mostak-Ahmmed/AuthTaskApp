import React from 'react';
import { View } from 'react-native';
import LoginForm from '../components/Auth/LoginForm';

const LoginScreen = ({ navigation }) => {
  const handleLogin = () => {
    navigation.replace('Tasks');
  };

  return <LoginForm onLogin={handleLogin} />;
};

export default LoginScreen;
