import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { validateLogin } from '../../utils/validation';

const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = () => {
    const validationErrors = validateLogin(email, password);
    if (Object.keys(validationErrors).length === 0) {
      onLogin();
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={{ borderWidth: 1, marginBottom: 10, borderRadius: 10 }}
      />
      {errors.email && <Text style={{ color: 'red' }}>{errors.email}</Text>}
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={{ borderWidth: 1, marginBottom: 10, borderRadius: 10 }}
      />
      {errors.password && <Text style={{ color: 'red' }}>{errors.password}</Text>}
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default LoginForm;
