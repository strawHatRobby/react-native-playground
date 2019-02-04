import React, { Component } from 'react';
import { StyleSheet, Text, ScrollView, Image, View, TouchableOpacity } from 'react-native';
import LingoCard from './LingoCard';
import LottieView from 'lottie-react-native';

export default class AppScroll extends Component {
    
    constructor(props){
    super(props);
    this.state = {
        
    }
  }

	render(){
		return(
            <ScrollView contentContainerStyle={{ flexGrow:1, flexDirection:'column'}}
            stickyHeaderIndices={[0]}
            showsVerticalScrollIndicator={false}
           >
           <View style={{flex:1.2,backgroundColor:'#fff', borderBottomWidth:1, borderColor: '#d6d7da', flexDirection:'row'}}>
                  <Text style={{textAlign:'center', fontSize:50}}>Angrezi.life</Text>
           </View>
            <LingoCard title={"Story"} backColor={"#7AC70C"} captionColor={"#BFF199"}/>
            <LingoCard title={"Test"} backColor={"#1CB0F6"} captionColor={"#BCE9FF"}/>
            <LingoCard title={"Punctuation"} backColor={"#D33131"} captionColor={"#FF9797"}/>
            <LingoCard title={"Reading"} backColor={"#FFB020"} captionColor={"#FFF277"}/>
            </ScrollView>
			)
	}
}
