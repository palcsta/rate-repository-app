//import Constants from 'expo-constants';
import React, { useState } from 'react';
import Pressables from './Pressables';  
import Link from './Link';  
import {ActionSheetIOS} from 'react-native';
import {Platform, View, TextInput, Button, FlatList, Text,StyleSheet,  /*Pressable, Alert*/ } from 'react-native';
const styles = StyleSheet.create({

  container: {
    //marginTop: Constants.statusBarHeight,
    flex: 1,
    justifyContent: 'center',
  },
  result: {
    fontSize: 64,
    textAlign: 'center',
  },
  text: {
    color: Platform.OS === 'android' ? 'green' : 'blue',
    
  },
  btn: {
    borderRadius: 6,
    marginTop: 12,
    marginBottom: 2,
    
},
});


const WhatIsMyPlatform = () => {
  return <Text style={styles.text}>Your platform is: {Platform.OS}</Text>;
};


const Ios = () => {
  const [result, setResult] = useState('🔮');

  const onPress = () =>
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: ['Cancel', 'Generate number', 'Reset', "New"],
        destructiveButtonIndex: 2,
        cancelButtonIndex: 0,
        userInterfaceStyle: 'dark',
        tintColor: 'cyan',
        message: 'Choose an action',
        //cancelButtonTintColor: 'purple',
        
      },
      buttonIndex => {
        if (buttonIndex === 0) {
          // cancel action
        } else if (buttonIndex === 1) {
          setResult(String(Math.floor(Math.random() * 100) + 1));
        } else if (buttonIndex === 2) {
          setResult('🔮');
        } else if (buttonIndex === 3) {
          setResult('😎');
        }
      },
    );

  return (<>
    <View style={styles.container}>
      <Text style={styles.result}>{result}</Text>
      <Button style={styles.btn} onPress={onPress} title="actions" ></Button>
      <Text>{Platform.osVersion}</Text>
    </View></>
  );
};
//<>{Platform.OS === 'android' ? 'green' : 'blue'}</>
const App = () => {
  const [inputText, setInputText] = useState('');
  const [listData, setListData] = useState([]);
  //Alert.alert('You pressed the text!')
  const handleAddText = () => {
    setListData([...listData, inputText]);
    setInputText('');
  };
  
//{<>{Platform.OS === 'android' ? <>a</> : <>b</>}</>}
  return (<>
    <View style={styles.container}>
      {Platform.OS === 'android' ? <Pressables/> : <Ios/>}
      
      <WhatIsMyPlatform/>
      <TextInput
        style={styles.input}
        value={inputText}
        onChangeText={setInputText}
        placeholder="Enter text"
      />
      <Button
        style={styles.btn}
        onPress={handleAddText}
        title="Add to List"
      />
      <Button
        style={styles.btn}
        onPress={() =>setListData([])}
        title="Remove"
      />
      <FlatList
        data={listData}
        renderItem={({ item }) => <Text>{item}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
      <Link/>
    </View></>
  );
};

export default App;