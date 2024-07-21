// src/components/Login.js
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const Login = ({ navigation }) => {
  const [username, setUsername] = useState('');

  const handleLogin = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter Username"
        value={username}
        onChangeText={setUsername}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    marginBottom: 20,
    padding: 10,
    width: '80%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
});

export default Login;
