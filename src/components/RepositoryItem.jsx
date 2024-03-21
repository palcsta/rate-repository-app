import React from 'react';
import {
 // View,
  Text,
 // StyleSheet,  
 // StatusBar,
} from 'react-native';


/*const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
  });
  
   id: 'reduxjs.redux',
    fullName: 'reduxjs/redux',
    description: 'Predictable state container for JavaScript apps',
    language: 'TypeScript',
    forksCount: 13902,
    stargazersCount: 52869,
    ratingAverage: 0,
    reviewCount: 0,
    ownerAvatarUrl: 'https://avatars3.githubusercontent.com/u/13142323?v=4',
  
  */
const RepositoryItem = ({item}) => (
    //<View style={styles.item}>
    <>
      <Text>Full name: {item.fullName}</Text>
      <Text>Description: {item.description}</Text>
      <Text>Language: {item.language}</Text>
      <Text>Stars: {item.stars}</Text>
      <Text>Forks: {item.forkCount}</Text>
      <Text>reviews: {item.reviewCount}</Text>
      <Text>rating: {item.ratingAverage}</Text>
            
      </>
    //</View>
    
  );


export default RepositoryItem