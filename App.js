import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-web';
import React, { useState } from 'react';

export default function App() {
  //create something cool looking for an phone app
  const [value, setValue] = useState(0);
  return (<>
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Rate Repository App</Text>
      <Text style={styles.subtitle}>Rate GitHub repositories</Text>
      <Text style={styles.subtitle}>{value}</Text>
      <Button title="console.logs" onPress={() => setValue(value+1)}/>
      <StatusBar style="auto" />
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
