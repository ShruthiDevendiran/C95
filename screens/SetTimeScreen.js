import React,{Component} from 'react';
import{
View, 
Text, 
StyleSheet,
TextInput,
TouchableOpacity,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import firebase from 'firebase';

import ScheduleScreen from './ScheduleScreen';

export default class SetTimeScreen extends Component{
    constructor(props){
        super(props);
        this.state={
         dropDownHeight:40,
         alarmTimeMinutes:'',
         alarmTimeHours:'',
        }
    }

    alarmTiming(){
        var alarmMinute= this.state.alarmTimeMinutes;
        var alarmHour= this.state.alarmTimeHours;
        var alarmTime= alarmHour-alarmMinute;
        
        firebase
              .database()
              .set({
                alarmTime:alarmTime
              })
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
               <View style={styles.topText}>
                  <Text style={styles.text}>Enter your alarm timing for the day !</Text>
               </View>
               <View style={styles.dropDownContainer1}>
                 <DropDownPicker
                   items={[
                    {label:1},
                    {label:2},
                    {label:3},
                    {label:4},
                    {label:5},
                    {label:6},
                    {label:7},
                    {label:8},
                    {label:9},
                    {label:10},
                    {label:11},
                    {label:12},
                    {label:13},
                    {label:14},
                    {label:15},
                    {label:16},
                    {label:17},
                    {label:18},
                    {label:19},
                    {label:20},
                    {label:21},
                    {label:22},
                    {label:23},
                    {label:24},
                   ]}
                   defaultValue={12}
                   open={this.state.dropDownHeight=== 180? true:false}
                   onOpen={()=>{this.setState({dropDownHeight:180})}}
                   onClose={()=>{this.setState({dropDownHeight:40})}}
                   style={styles.dropDown}
                   textStyle={{color:black}}
                   onSelectItem={()=>{
                    (item)=>{this.setState({alarmTimeHours:item})}
                    this.alarmTiming()
                }} 
                 />
                 <View style={styles.dropDownContainer2}>
                 <DropDownPicker
                   items={[
                    {label:5},
                    {label:10},
                    {label:15},
                    {label:20},
                    {label:25},
                    {label:30},
                    {label:35},
                    {label:40},
                    {label:45},
                    {label:50},
                    {label:55},
                   ]}
                   defaultValue={12}
                   open={this.state.dropDownHeight=== 180? true:false}
                   onOpen={()=>{this.setState({dropDownHeight:180})}}
                   onClose={()=>{this.setState({dropDownHeight:40})}}
                   style={styles.dropDown}
                   textStyle={{color:black}}
                   onSelectItem={()=>{
                    (item)=>{this.setState({alarmTimeMinutes:item})}
                    this.alarmTiming()
                }}                    
                 />
                 </View>
               </View>
               <View style={styles.inputContainer}>
                  <TextInput
                   placeHolder={"Enter your reason"}
                   placeHolderTextColor="black"
                   style={styles.inputBox}
                   onChangeText={(value)=>{
                    firebase
                           .database()
                           .set({
                            alarmText:value,
                           })
                   }}
                   multiline={true}
                   numberOfLines={3}
                  />
               </View>
               <View style={styles.buttonContainer}>
                 <TouchableOpacity style={styles.button} onPress={this.props.navigation.navigate(ScheduleScreen)}>
                    <Text style={styles.buttonText}>Enter</Text>
                 </TouchableOpacity>
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