import React,{Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import firebase from 'firebase';

import HomeScreen from './HomeScreen';
import SnoozeScreen from './SnoozeScreen';

export default class AlarmScreen extends Component{
    constructor(props){
        super(props);
        this.state={
          alarmTime:'',
          alarmText:'',
          time:'',
        }
    }

    componentDidMount(){
     let text,time;

        firebase
            .database()
            .ref('/alarmTime/')
            .on(value, snapshot=>{
                time= snapshot.val()
                this.setState({alarmTime:time})
            })

            firebase  
                   .database()
                   .ref('/alarmText/')
                   .on(value, snapshot=>{
                       text= snapshot.val()
                       this.setState({alarmText:text})
                   })

           firebase
                  .database()
                  .toDate()
                  .toString()
                  .get(snapshot)
        this.setState({time:snapShot})
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
               </View>
               <View style={styles.alarmTimeContainer}>
                 <Text style={styles.text}>{this.state.time}</Text>
               </View>
               <View style={styles.alarmTextContainer}>
                 <Text style={styles.text}>{this.state.alarmText}</Text>
               </View>
               <View style={styles.stopContainer}>
                  <TouchableOpacity style={styles.stopButton} onPress={this.props.navigation.navigate(HomeScreen)}>
                    <Text style={styles.stopText}>Stop</Text>
                  </TouchableOpacity>
                  <View style={styles.snoozeContainer}>
                     <TouchableOpacity style={styles.snoozeButton} onPress={this.props.navigation.navigate(SnoozeScreen)}>
                       <Text style={styles.snoozeText}>Snooze</Text>
                     </TouchableOpacity>
                  </View>
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