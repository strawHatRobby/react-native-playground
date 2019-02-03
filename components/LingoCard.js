import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Touchable } from 'react-native';
import LottieView from 'lottie-react-native';
import * as animation from '../assets/rocekt.json';

export default class LingoCard extends Component {
    
    constructor(props){
    super(props);
    this.state = {
        
    }
   this.playLottie = this.playLottie.bind(this);
  }
    componentDidMount(){
        this.animation.reset()
    }
  
    playLottie = () => {
        this.animation.play()
    }
    
	render(){
		return(
			<TouchableOpacity onPress={this.playLottie}
            style={[styles.lingoCard,{backgroundColor:`${this.props.backColor}`}]} >
            <View style={{ flexDirection:'row',flex:1, justifyContent:'center', alignItems:'center'}}>
            <LottieView
                ref={
                    animation => {
                        this.animation = animation
                    }
                }
                style={{width:150, flex:0.8, height:150}}
                source={require('../assets/rocekt.json')}
                autoPlay
                loop={false}
                progress={100}
                cacheStrategy={'weak'}
                />

                <Text style={styles.TextStyle}>Test</Text>
                </View>

			</TouchableOpacity>
			)
	}
}

const styles = {
    TextStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        flex:0.3
    },
    lingoCard: {
    flex:0.7,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    borderRadius: 20,
    borderWidth: 2,
    borderBottomWidth: 5,
    borderColor: '#d6d7da',
   shadowOpacity: 1.0, 
   backgroundColor:'#fff', 
   paddingTop:"25%", 
   paddingBottom:"25%",
   margin: '1%',
   marginRight: "10%",
   marginLeft: '10%'
   

}
}