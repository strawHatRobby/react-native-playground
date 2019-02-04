import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, Dimensions, ScrollView, KeyboardAvoidingView, Image, View, TouchableOpacity } from 'react-native';
import Banner from '../components/banner';
import LingoCard from '../components/LingoCard';
export default class ChatScreen extends Component {
    
    constructor(props){
    super(props);
    this.state = {
        
    }
  }
    
	render(){
		return(
        <KeyboardAvoidingView keyboardVerticalOffset={25} behavior={"padding"} enabled style={{flex:1, flexDirection:'column'}}>
            <ScrollView contentContainerStyle={{ flexGrow:1, flexDirection:'column'}}
            showsVerticalScrollIndicator={true}
           >
               
            <LingoCard title={"Story"} backColor={"#7AC70C"} captionColor={"#BFF199"}/>
            <LingoCard title={"Test"} backColor={"#1CB0F6"} captionColor={"#BCE9FF"}/>
            <LingoCard title={"Punctuation"} backColor={"#D33131"} captionColor={"#FF9797"}/>
            <LingoCard title={"Reading"} backColor={"#FFB020"} captionColor={"#FFF277"}/>
            
           </ScrollView>
           <View style={{ flexDirection:'column', justifyContent:'flex-end', alignItems: 'flex-start'}}>           
            <View style={{flexDirection:'row', borderTopWidth:2, borderColor: '#d6d7da', paddingTop:'1%', width: Dimensions.get('window').width}}>
           <TextInput style={{ flex:1,paddingBottom:"1%",borderColor: '#d6d7da', paddingLeft: '5%', alignContent:'flex-end'}} multiline={true} placeholder={'Enter Stuff'}/>
           </View>
           </View>
       </KeyboardAvoidingView>
			)
	}
}
