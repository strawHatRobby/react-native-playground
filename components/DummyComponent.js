import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class Dummy extends Component {
    
    constructor(props){
    super(props);
    this.state = {
        
    }
  }
    
	render(){
		return(
			<View style={{flex:1}}>
				<Text>This is just a text</Text>
			</View>
			)
	}
}
