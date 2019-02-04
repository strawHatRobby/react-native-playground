import React, { Component } from 'react';
import { StyleSheet, Text, ScrollView, Image, View, TouchableOpacity } from 'react-native';
import LingoCard from './LingoCard';
import LottieView from 'lottie-react-native';
import Banner from './banner';
import ScrollHeader from './ScrollHeader';

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
           <ScrollHeader/>
           <Banner/>
            <LingoCard title={"Story"} backColor={"#7AC70C"} captionColor={"#BFF199"}/>
            <LingoCard title={"Test"} backColor={"#1CB0F6"} captionColor={"#BCE9FF"}/>
            <LingoCard title={"Punctuation"} backColor={"#D33131"} captionColor={"#FF9797"}/>
            <LingoCard title={"Reading"} backColor={"#FFB020"} captionColor={"#FFF277"}/>
            </ScrollView>
			)
	}
}
