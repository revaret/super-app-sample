import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {MD3Colors, Text} from 'react-native-paper';

const WelcomeScreen = (props: any) => {
  const handleNavigation = () => {
    console.log('button clicked');
    props.navigation.navigate('MiniApp');
  };
  return (
    <View style={styles.container}>
      <Text variant="headlineMedium" style={styles.welcomeHeadline}>
        Welcome Ahmed!
      </Text>
      <Text style={styles.welcomeText} variant="bodyLarge">
        This is a welcome screen of host app🚀
      </Text>
      <Pressable style={styles.button} onPress={handleNavigation}>
        <Text>Go to Mini app please</Text>
      </Pressable>
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
