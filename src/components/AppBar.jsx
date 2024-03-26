import { View, StyleSheet,Pressable,Text, Alert} from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight+15,
    backgroundColor: 'purple',
    transparent: true,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: '800',
    textAlign: 'left',
  },
});

const AppBar = () => {
  return <Pressable onPress={() =>Alert.alert("!")}><View style={styles.container}><Text style={styles.text}>Repositories</Text></View></Pressable>;
};

export default AppBar;