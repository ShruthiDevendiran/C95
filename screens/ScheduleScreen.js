import React,{Component} from 'react';
import 
{View,
 Text, 
 StyleSheet,
 TouchableOpacity,
 ImageBackground,
 Image
} from 'react-native';

export default class ScheduleScreen extends Component{
    render(){
        return(
            <View style={{alignItems:"center", justifyContent:"center", flex:1}}>
              <View style={styles.appLogo}>
                 <Image source={require('../assets/1.png')} style={styles.logo}/>
               </View>
               <View style={styles.textContainer}>
                  <Text style={styles.text}>Ding dong</Text>
               </View>
               <View style={styles.backgroundContainer}>
                 <ImageBackground source={require('../assets/wall.jpg')} style={styles.backgroundImage}/>
               </View>
               <View>
                 <TouchableOpacity style={styles.button1} >
                    <Text style={styles.day}>Monday</Text>
                 </TouchableOpacity>

                 <TouchableOpacity style={styles.button1} >
                    <Text style={styles.day}>Tuesday</Text>
                 </TouchableOpacity>

                 <TouchableOpacity style={styles.button1} >
                    <Text style={styles.day}>Wednesday</Text>
                 </TouchableOpacity>

                 <TouchableOpacity style={styles.button1} >
                    <Text style={styles.day}>Thursday</Text>
                 </TouchableOpacity>

                 <TouchableOpacity style={styles.button1} >
                    <Text style={styles.day}>Friday</Text>
                 </TouchableOpacity>

                 <TouchableOpacity style={styles.button1} >
                    <Text style={styles.day}>Saturday</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button1} >
                    <Text style={styles.day}>Tuesday</Text>
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

   backgroundImage: {
      flex: 1,
      resizeMode: 'cover',
      height: 1000,
      width: 1000,
      opacity:0.6,
  },

  day:{
   color: "black",
   fontSize: 10,
   fontStyle:'italic',
   justifyContent:"center",
   alignItems:"center",
},

 button1:{
  color:"purple",
  borderRadius:30,
  marginColor:"black",
  height:20,
  width:80,
 },
 
 backgroundContainer:{
   top:10,
   bottom:10,
   right:10,
   left:10,
},
})