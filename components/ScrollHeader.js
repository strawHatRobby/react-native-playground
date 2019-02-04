import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class ScrollHeader extends Component {
    
    constructor(props){
    super(props);
    this.state = {
        
    }
  }
    
	render(){
		return(
			<View style={{ justifyContent:'center', alignItems:'center', flex:1.2,backgroundColor:'#fff', borderBottomWidth:3, borderColor: '#d6d7da', flexDirection:'row'}}>
                  <Text style={{textAlign:'center', fontSize:50}}>Angrezi.life</Text>
           </View>
			)
	}
}
