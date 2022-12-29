import React,{Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import firebase from 'firebase';
import DropDownPicker from 'react-native-dropdown-picker';

export default class SettingsScreen extends Component{
    constructor(props){
        super(props);
        this.state={
          dropdownHeight:40,
          ringtone:'',
        }
    }

    render(){
        return(
            <View style={{alignItems:"center", justifyContent:"center", flex:1}}>
               <View style={styles.appLogo}>
                 <Image source={require('../assets/1.png')} style={styles.logo}/>
               </View>
               <View style={styles.appTitle}>
                  <Text style={styles.title}>Ding dong</Text>
               </View>
               <View style={styles.background}>
                 <ImageBackground source={require('../assets/wall.jpg')} style={styles.BackgroundImage}/>
                 <Image source={require('../assets/setting.png')} style={styles.alarm}/>
               </View>
               <View style={styles.dropdownPicker}>
                  <DropDownPicker
                  items={[
                    {label:digital_alarm_clock, value:require('../assets/alarm_clock_1.mp3')},
                    {label:alarm_clock, value:require('../assets/alarm_clock.mp3')},
                    {label:Morning_dew, value:require('../assets/best_alarm.mp3')},
                    {label:carol_of_bells, value:require('../assets/carol_of_bells.mp3')},
                    {label:morning_flower, value:require('../assets/morning_flower.mp3')},
                    {label:blooming_flowers, value:require('../assets/ringtone.mp3')},
                  ]}
                   defaultValue={require('../assets/alarm_clock_1.mp3')}
                   open={this.state.dropdownHeight=== 180? true:false}
                   onOpen={()=>{this.setState({dropdownHeight:180})}}
                   onClose={()=>{this.setState({dropdownHeight:40})}}
                   style={styles.dropDown}
                   textStyle={{color:black}}
                   onSelectItem={(item)=>{this.setState({ringtone:item})}}
                 
                  />
               </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
  appLogo:{
    right:10,
    left:30,
    top:10,
    bottom:10
 },

 logo:{
    height:200,
    width:100,
    right:700,
 },

 textContainer:{
    height:200,
    width:500,
    right:350,
    bottom:141,
 },

 text:{  
    color: "black",
   fontSize: 50,
   fontStyle:'italic',
 },
})