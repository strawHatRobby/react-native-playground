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
        width: "15%",
        height: "15%",
        alignItems: 'center',
        justifyContent: 'center',
        right: 20,
        bottom: 40,
     },
     FloatingButtonStyle: {
      resizeMode: 'contain',
      width: "100%",
      height: "100%",
    },
})
