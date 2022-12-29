import React,{Component} from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import axios from 'axios';

export default class WorldclockScreen extends Component{
    constructor(props){
        super(props);
        this.state={
          dropdownHeight:40,
          worldTime:'',
          IST:'',
        }
    }

    getTime =()=>{
      axios
          .get("https://worldtimeapi.org/api/timezone/" + country)
          .then(response=>{
            this.setState({worldTime:response.data})
          .catch(error=>{
            Alert.alert(error.message)
          })
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
               <View style={styles.textContainer}>
                 <Text style={styles.text}>WORLD CLOCK</Text>
               </View>
               <View style={styles.captionContainer}>
                  <Text style={styles.captions}>Calculated using Indian standard time</Text>
               </View>
               <View style={styles.dropdownContainer}>
                  <DropDownPicker
                  items={[
                    {label:USA},  //+10 hours 30 minute
                    {label:Europe}, // -4 hours 30 minutes
                    {label:Africa}, //-3 hours 30 minutes
                    {label:Antartica}, //+7 hours 30 minutes
                    {label:Australia}, // +5hours 30 minues
                    {label:SouthAmerica}, // - 9 hours 30 minutes
                    {label:GreenLand},//-6 hours 30 minutes
                    {label:NewZealand}//+7 hours 30 minutes                   
                  ]}
                  open={this.state.dropdownHeight=== 180? true:false}
                  defaultValue={India}
                  onOpen={()=>{this.setState({dropdownHeight:180})}}
                  onClose={()=>{this.setState({dropdownHeight:40})}}
                  style={styles.dropdownPicker}
                  textStyle={{color:black}}
                  onSelectTime={()=>{
                  }}
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