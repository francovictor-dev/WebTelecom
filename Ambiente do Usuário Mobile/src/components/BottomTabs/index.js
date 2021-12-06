import React from 'react';
import { View } from 'react-native';
import styles from './styles';
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Boletos from '../../view/Boleto';
import Home from '../../view/Home';
import Perfil from '../../view/Perfil';
import Tutorial from '../../view/Tutorial';
import Icon from 'react-native-vector-icons/Entypo'

//const Tab = createBottomTabNavigator();
//const Tab = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();

export default function BottomTabs({navigation}){
    

    return (

    <Tab.Navigator tabBarPosition="bottom" screenOptions={{ tabBarIndicatorStyle: {backgroundColor: '#590000'},
            headerShown: false, tabBarActiveTintColor: '#590000'
        }} >

        <Tab.Screen name="Home" component={Home} options={{ tabBarIcon: ({color}) => (
            <Icon name="home" size={25} style={{color: color}} />)
        }} 
        />
    
        <Tab.Screen name="Boletos" component={Boletos} options={{ tabBarIcon: ({color}) => (
            <Icon name="documents" size={23} color={color}  />   )
        }} 
        />
        <Tab.Screen name="Tutorial" component={Tutorial} options={{ tabBarIcon: ({color}) => (
            <Icon name="help" size={25} color={color}  />   )
        }} 
        />
        <Tab.Screen name="Perfil" component={Perfil} options={{ tabBarIcon: ({color}) => (
            <Icon name="user" size={25} color={color}  />   )
        }} 
        />

    </Tab.Navigator>
    
        
    )
}