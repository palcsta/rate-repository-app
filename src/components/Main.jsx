//import Constants from 'expo-constants';
import { /*Text,*/ StyleSheet, View } from 'react-native';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';


const styles = StyleSheet.create({
  container: {
    //marginTop: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: 'lightgrey',
  },
  text: {    color: 'cyan',    fontSize: 20,    fontWeight: '300',  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar/>
      {/*<Text style={{ color: 'blue', fontSize: 24, fontWeight: '700' }}>BLUE</Text>
      <Text style={styles.text}>cyan</Text>*/}
      <RepositoryList/>
    </View>
  );
};

export default Main;