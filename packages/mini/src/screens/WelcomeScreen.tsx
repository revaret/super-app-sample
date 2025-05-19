import React from 'react';
import {StyleSheet, View} from 'react-native';
import {MD3Colors, Text} from 'react-native-paper';

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text variant="headlineMedium" style={styles.welcomeHeadline}>
        Welcome!
      </Text>
      <Text style={styles.welcomeText} variant="bodyLarge">
        This is a welcome screen of Mini app🚀
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeHeadline: {
    color: MD3Colors.primary20,
  },
  welcomeText: {
    padding: 16,
    paddingBottom: 32,
  },
  button: {
    backgroundColor: MD3Colors.primary90,
    padding: 16,
    borderRadius: 16,
  },
});

export default WelcomeScreen;
