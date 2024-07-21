// src/App.js
import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppNavigator from './AppNavigator';

const App = () => {
  return (
    <View style={styles.container}>
      <AppNavigator />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
