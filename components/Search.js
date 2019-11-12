import React from 'react';
import style from '../Style';
import { TextInput, StyleSheet, Image, Button, View } from 'react-native';
import { createAppContainer } from 'react-navigation'; 
import { createStackNavigator } from 'react-navigation-stack';

import Wiki from './Wiki';

//Text, View, StyleSheet 

class Search extends React.Component {
    
    static navigationOptions = {
        tabBarIcon: () => {
            return <Image source={require('./icons/search.png')} style={{width : 20, height : 20}}/>
         },
        title : 'Search for a Country',
        
    }

    submit (){
        this.props.navigation.navigate('Result', {country:this.state.country})
    }


    constructor (props){
        super(props)
        this.state = {
            country: ''
        }
        //this.handleChange = this.handleChange.bind(this);
        //this.setCountry = this.setCountry.bind(this);

    }

    // setCountry (text){
        
    //         this.setState ({country : text})
       
    // }

    

    // handleChange(event) {
    //     this.setState({country: event.target.country});
    //   }

    render ()  {
        return (
            
            <View style = {style.container}>
                <Image source={require('./icons/earth.png')} style={style.earth}/>
                <TextInput 
                    placeholder="Type here your country!"
                    onChangeText={(text) => this.setState({country : text})}
                    style={style.input}
                    value={this.state.country}
                    // onChange={this.handleChange}
                    //onChangeText={text => this.setCountry({text})}
                />
                <Button color={style.color} onPress={() => this.submit()} title="Search"/>
                
            </View>
        )
        
    }

    
}


const StackNavigator = createStackNavigator({
    Search: Search,
    
    Result: Wiki,
})

export default createAppContainer(StackNavigator);
