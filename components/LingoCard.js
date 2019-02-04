import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Touchable } from 'react-native';
import LottieView from 'lottie-react-native';
import * as animation from '../assets/rocekt.json';


export default class LingoCard extends Component {
    
    constructor(props){
    super(props);
    
    this.state = {
        pauseLottie: 0,
        buttonPressed: false
    }
   this.playLottie = this.playLottie.bind(this);
  }
    componentDidMount(){
        // this.animation.reset()
        
        //TODO: start animation from a later point and pause the video there
    }
  
    async playSound() {
        const soundObject = new Expo.Audio.Sound();
        try {
         await soundObject.loadAsync(require('../assets/flySound.mp3'));
         await soundObject.playAsync();
        // Your sound is playing!
        } catch (error) {
            console.log("Couldn't play sound cause of " + error)
        // An error occurred!
        }
    }

    playLottie = () => {
        this.setState({
            pauseLottie: 1
        })
        setTimeout(() => {
            this.playSound()
        },900)
        
        this.animation.play()
    }
    
	render(){
		return(
            <TouchableOpacity onPress={this.playLottie}

            onPressIn={() => { this.setState({
                buttonPressed: true
            })}}
            onPressOut={() => { this.setState({
                buttonPressed: false
            })
            setTimeout(() => {
                this.playSound()
            },900)
        }
            
        }

            style={[styles.lingoCard,{backgroundColor:`${this.props.backColor}`},(this.state.buttonPressed) ? {boderWidth:0, borderColor:`${this.props.backColor}`}: {borderWidth:2}]}
               activeOpacity={1} 
            >
            <View style={styles.textView}>

            <View style={{flexDirection:'column', flex:0.7}}>
            <Text style={styles.TextStyle}>{this.props.title}</Text>
            <Text style={[styles.CaptionStyle, {color:`${this.props.captionColor}`}]}>7 days</Text>
            </View>

            <LottieView
                ref={
                    animation => {
                        this.animation = animation
                    }
                }
                style={{paddingTop:'2%', width:150, flex:0.8, height:150}}
                source={require('../assets/rocekt.json')}
                autoPlay
                loop={false}
                progress={100}
                cacheStrategy={'weak'}
                speed={this.state.pauseLottie}
                />

                
                </View>

			</TouchableOpacity>
			)
	}
}

const styles = {
    textView: {
        flexDirection:'row',
        flex:1,
        paddingLeft:'10%',
        justifyContent:'center', 
        alignItems:'center'
    },
    CaptionStyle: {
        fontSize: 14,
        fontWeight: '300',
        color:'#a5a5a5',
        textAlign: 'left'
    },
    TextStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        color:'#fff',
        textAlign:'left'
    },
    lingoCard: {
    flex:1,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    borderRadius: 20,
    borderWidth: 2,
    borderBottomWidth: 5,
    borderColor: '#d6d7da',
   shadowOpacity: 1.0, 
   backgroundColor:'#fff', 
   paddingTop:"23%", 
   paddingBottom:"23%",
   margin: '1%',
   marginRight: "5%",
   marginLeft: '5%'
   

}
}