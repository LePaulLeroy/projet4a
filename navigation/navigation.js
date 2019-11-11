import React from 'react';
import About from '../components/About';
import Search from '../components/Search';
import Wiki from '../components/Wiki';
import { createAppContainer } from 'react-navigation'; 
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation-tabs'



const TabNavigator = createBottomTabNavigator({
  
    Search: Search,
    About : About,
    
  },
     { tabBarOptions: {
         showIcon : true,
         showLabel : false,
         indicatorStyle : {
             height : 2,
         },
         style: {
             backgroundColor: '#4078B9',
             borderTopWidth: 1,
             borderColor: '2C5482',
         },
         activeTintColor: 'white',
         inactiveTintColor: 'white',
     }
  })



export default createAppContainer(TabNavigator);
