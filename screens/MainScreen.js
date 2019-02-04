import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, StatusBar } from 'react-native';

import FloatingButton from '../components/floatingButton';
import AppScroll from '../components/AppScroll';

export default class MainScreen extends Component {
    
    constructor(props){
    super(props);
    this.state = {
        
    }
  }
    
	render(){
		return(
            <View style={styles.container}>
				<FloatingButton/>
                <AppScroll/>
            </View>
			)
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: '#fff',
  },
});