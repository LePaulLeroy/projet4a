import React from 'react';
import style from '../Style';
import { Text, View, StyleSheet, Image } from 'react-native';

export default class About extends React.Component {
 
    static navigationOptions = {
        tabBarIcon: () => {
           return <Image source={require('./icons/user.png')} style={{width : 20, height : 20}}/>
        }
    }

render () {
    return (
    <View style={style.container}>
      <Text style={style.title}>About US :</Text>
      <Text style={{fontSize: 15}}>Team composed of :</Text>
      <Text> </Text>
      <Text style={{fontSize: 15}}>Paul LEROY</Text>
      <Text style={{fontSize: 15}}>Paul-Alexis MANDENGUE</Text>
      <Text style={{fontSize: 15}}>Alexandre HAYE</Text>
      <Text> </Text>
      <Text style={{ fontSize: 22,}}>About the app :</Text>
      <Text> </Text>
      <Text style={{fontSize: 15}}>The goal of this application is to obtain informations about countries of the world</Text>
      <Text> </Text>
      <Text style={{fontSize: 15}}>We use API call on : https://restcountries.eu/rest/v2/ </Text>


    </View>
  );
}
}
