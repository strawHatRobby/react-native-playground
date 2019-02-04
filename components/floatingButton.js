import React, { Component } from 'react';
import { StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native';


export default class FloatingButton extends Component {
    
    constructor(props){
    super(props);
    this.state = {
        
    }
  }
    
	render(){
		return(

        <TouchableOpacity
          activeOpacity={1}
          onPress={this.clickHandler}
          style={styles.TouchableOpacityStyle}>
          <Image
             source={
                require('../assets/chatDuo.png')
            }
            style={styles.FloatingButtonStyle}
          />
        </TouchableOpacity>

			)
	}
}

const styles = StyleSheet.create({
    TouchableOpacityStyle: {
        zIndex: 2,
        position: 'absolute',
        width: "16%",
        height: "16%",
        alignItems: 'center',
        justifyContent: 'center',
        right: '5.5%',
        bottom: '0%'
     },
     FloatingButtonStyle: {
      resizeMode: 'contain',
      width: "100%",
      height: "100%",
    },
})
