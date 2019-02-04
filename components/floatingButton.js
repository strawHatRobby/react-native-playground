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
             source={{
uri:'http://aboutreact.com/wp-content/uploads/2018/08/bc72de57b000a7037294b53d34c2cbd1.png',
            }}
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
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        right: 20,
        bottom: 40,
        
     },
     FloatingButtonStyle: {
      resizeMode: 'contain',
      width: 50,
      height: 50,
    },
})
