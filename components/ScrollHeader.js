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
			<View style={style.headerStyle}>
                  <Text style={style.headerText}>Angrezi.life</Text>
           </View>
			)
	}
}


const style = StyleSheet.create({
  headerStyle : {
    justifyContent:'center',
    alignItems:'center',
    flex:1,
    backgroundColor:'#fff',
    borderBottomWidth:3, 
    borderColor: '#d6d7da',
    flexDirection:'row'
  },
  headerText: {
    textAlign:'center', 
    fontSize:25
  }
})