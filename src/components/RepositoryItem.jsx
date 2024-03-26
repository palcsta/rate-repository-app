import React from 'react';
import { View, Text,Image,StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  language: {
    color: 'white',
    backgroundColor: 'blue',
    padding: 4,
    borderRadius: 7,
    marginTop: 10,
    marginBottom: 10,
    width: 111,
    
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: '800',
    textAlign: 'left',
  },
  img:{
    padding:4,
    width: 50, 
    height: 50, 
    borderRadius: 5
  },
  stats:{
    flexDirection: 'row',
    padding: 1,
    //justifyContent: 'space-around',
    //backgroundColor: 'lightgrey',
    borderRadius: 5,
    flexFlow: 'column wrap',

  },
});
const round = (num) => {
    return num>1000 ? Math.round(num/100)/10+"k" : num
  }
const Stat = ({label, value}) => (
  <View style={{alignItems: 'center'}}>
    <Text>{value}</Text>
    <Text style={{padding:5, color:"grey"}}>{label}</Text>
  </View>
);
const RepositoryItem = ({item}) => ( 
    
  <View style={{flexDirection: 'row', padding:10, backgroundColor:"white", borderWidth:1, borderColor:"grey"}}>
    <Image source={{uri: item.ownerAvatarUrl}} style={styles.img} />    
  <View>
    <Text style={{ padding:10}}>{item.fullName}</Text>
    <Text style={{padding:10,fontSize:10, }}>{item.description}</Text>
    <Text style={styles.language}>{item.language}</Text>
  <View style={styles.stats}>
    <Stat value={round(item.stargazersCount)} label="Stars"/>
    <Stat value={round(item.forksCount)} label="Forks"/>
    <Stat value={round(item.reviewCount)} label="rev."/>
    <Stat value={round(item.ratingAverage)} label="Rating"/>
  </View>
   
    </View>
  </View>
);

export default RepositoryItem