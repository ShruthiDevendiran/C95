import React,{Component} from 'react';
import {StyleSheet} from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {RFValue} from 'react-native-responsive-fontsize';

import StopwatchScreen from '../screens/StopwatchScreen';
import WorldclockScreen from '../screens/WorldclockScreen';
import TimerScreen from '../screens/TimerScreen';
import HomeScreen from '../screens/HomeScreen';

const Tab = createMaterialBottomTabNavigator();

export default class TabNavigator extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }

    render(){
        return(
            <Tab.Navigator
            labeled={true}
            screenOptions = {({route})=>({
               tabBarIcon:({focussed,color,size})=>{
                let iconName;
                if(route.name === HomeScreen){
                  iconName= "stopwatch-outline"
                }

                return (
                    <Ionicons 
                    name={iconName}
                    size={RFValue(30)}
                    color={color}
                    />
                )
               }
            })}
            activeColor={"yellow"}
            inactiveColor={"white"}
            >
              <Tab.Screen name="Home" component={HomeScreen} options={{onUnmountBlur:true}}/>
              
            </Tab.Navigator>
        )
    }
}