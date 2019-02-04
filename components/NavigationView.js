import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import MainScreen from '../screens/MainScreen'
const TabNavigator = createBottomTabNavigator({
    Home: MainScreen,
});

export default createAppContainer(TabNavigator);
