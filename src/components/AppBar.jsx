import { View, StyleSheet,  Text, Platform, /*Alert ,Pressable,*/ScrollView} from 'react-native';
import Constants from 'expo-constants';
import { Link } from "react-router-native";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight-10,
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: 'purple',
    transparent: true,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 1,
    
  },
  text: {    
    color: Platform.select({
      android: 'green',
      ios: 'cyan',
      default: 'black',
    }),
    fontFamily: Platform.select({
      android: 'Roboto',
      ios: "Arial",
      default: 'sans-serif',
    }),

    fontSize: 20,
    fontWeight: '300',
    textAlign: 'left',
    padding: 10,
  },
});

const AppBar = () => {
  return (
    
      <View style={styles.container}>
        {/**/}
        <ScrollView horizontal={true} >
          <Link to="/">
            <Text style={styles.text}>Repositories</Text>
          </Link>

          <Link to="/login">
            <Text style={styles.text}>Sign in</Text>
          </Link>

          {/*<Pressable hidden onPress={() => Alert.alert("TODO")}>
            <Text hidden style={styles.text}> Misc</Text>
          </Pressable>

          <Pressable hidden>
            <Text>Log</Text>
          </Pressable>*/}

        </ScrollView>
      </View>
    );
};

export default AppBar;