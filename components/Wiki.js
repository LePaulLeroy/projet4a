import React from 'react';
import { Text, ActivityIndicator, View, Image} from 'react-native';
import style from '../Style';
import axios from 'axios';
import SvgUri from 'react-native-svg-uri';

export default class Wiki extends React.Component {

    
    
    static navigationOptions = ({navigation}) => {
        return {
            title: `Wiki / ${navigation.state.params.country}`,
           
            tabBarIcon: () => {
                    return <Image source={require('./icons/search.png')} style={{width : 20, height : 20}}/>
                 },
        
                }
    }

    constructor(props) {
        super(props)
        this.state = {
            country: this.props.navigation.state.params.country,
            report: null,
            flag: undefined,
        }
    }
    
    componentDidMount(){
        
        this.fetchWiki()
    }

    fetchWiki(){
        axios.get(`https://restcountries.eu/rest/v2/name/${this.state.country}`)
        .then((response) => {
            this.setState({
                report: response.data
            })
        })
        setTimeout(() => {
            // axios.get(this.state.report[0].flag)
            // .then((res) => {
            //     this.setState({
            //         flag: res.data
            //     })
            // })
        }, 1000);
    }

    render (){
        if (this.state.report === null){
            return (
                <ActivityIndicator color={style.color} size="large" />
            )
        } else {
            return (

                     <View style = {style.wikit}>
                        <Image source={require('./icons/iearth.png')} style={style.img}/>
                        <Text style = {style.tit} >Continent : 
                        <Text style = {style.desc} > {this.state.report[0].region}
                        </Text> 
                        </Text>

                        <Image source={require('./icons/pin.png')} style={style.img}/>
                        <Text style = {style.tit} >Capital :  
                        <Text style = {style.desc} > {this.state.report[0].capital}
                        </Text> 
                        </Text>
                        

                        <Image source={require('./icons/pop.png')} style={style.img}/>
                        <Text style = {style.tit} >Population :  
                        <Text style = {style.desc} > {this.state.report[0].population}
                        </Text> 
                        </Text>

                        <Image source={require('./icons/cur.png')} style={style.img}/>
                        <Text style = {style.tit} >Currency :  
                        <Text style = {style.desc} > {this.state.report[0].currencies[0].code} 
                        <Text style = {style.desc}>
                        (
                            <Text style = {style.desc}>
                            {this.state.report[0].currencies[0].symbol} 
                         <Text style = {style.desc}>
                        )
                        </Text>
                        </Text>
                        </Text>
                        </Text> 
                        </Text>

                        <Image source={require('./icons/tran.png')} style={style.img}/>
                        <Text style = {style.tit} >Languages :  
                        <Text style = {style.desc} > {this.state.report[0].languages[0].name}
                        </Text> 
                        </Text>
                            
                    </View>
            )
        }
       
    }   

}
