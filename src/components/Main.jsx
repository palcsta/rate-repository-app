//import Constants from 'expo-constants';
import { /*Text,*/ StyleSheet, View } from 'react-native';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import { Route, Routes, Navigate, NativeRouter } from 'react-router-native';
import SignIn from './SignIn';

const styles = StyleSheet.create({
  container: {
    //marginTop: Constants.statusBarHeight,
    //flexGrow: 1,
    //flexShrink: 1,
    backgroundColor: 'lightgrey',
  },

});

const Main = () => {
  return (
    <NativeRouter>
      <View style={styles.container}>
        <AppBar />
        <Routes>
          <Route path="/" element={<RepositoryList />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </View>
    </NativeRouter>
  );
};

export default Main;