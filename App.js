import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-web';

export default function App() {
  //create something cool looking for an phone app
  return (<>
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Rate Repository App</Text>
      <Text style={styles.#fff}>Discover and rate GitHub repositories</Text>
      
      <StatusBar style="auto" />
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
