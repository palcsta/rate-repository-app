import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-web';
import React, { useState } from 'react';


export default function App() {
  //create something cool looking for an phone app
  //create a button that console.logs the length of the web page
  
  //const len = document.body.scrollHeight;


  const [value, setValue] = useState(0);
  return (<>
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Rate Repository App</Text>
      <Text style={styles.subtitle}>Rate GitHub repositories</Text>
      <Text style={styles.subtitle}>{String(value)}</Text>
      <Text style={styles.subtitle}>{String()}</Text>
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
