import React from 'react';
import About from './components/About';
import Search from './components/Search';
import Tabs from './navigation/navigation';

import { View, StatusBar } from 'react-native';
// import { createAppContainer } from 'react-navigation'; 
// import { createStackNavigator } from 'react-navigation-stack';



// const StackNavigator = createStackNavigator({
//   Search : Search,
//   // Result : Search
// },)

// const Sta = createAppContainer(StackNavigator);


export default class  App extends React.Component {
  static navigationOptions = {
    tabBarIcon: () => {
        return <Image source={require('./components/icons/search.png')} style={{width : 20, height : 20}}/>
     },
    }
  render (){

    return (
      <View style={{flex : 1}}>
        <StatusBar hidden={true} />
        
        <Tabs/>
        
      </View>
     
    );
  }
}

/*
<View style={{marginVertical: 40}}>
<Search />
</View>*/