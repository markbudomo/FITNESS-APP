import { StyleSheet, Text, View, SafeAreaView, Image, Pressable, ImageBackground } from 'react-native'
import React ,{useState,useContext} from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { FitnessItems } from '../Context';

const Fitscreen = () => {
    const route = useRoute();
    // console.log(route.params);
    const navigation = useNavigation();
    const [index, setIndex] = useState(0);
    const excersises = route.params.excersises;
    const current = excersises[index];
    //console.log(current,"First Excersise");
    const {
      completed,
      setCompleted,
      minutes,
      setMinutes,
      calories,
      setCalories,
      workout,
      setWorkout
    } = useContext(FitnessItems);
   console.log(completed, "Exercise Completed")
  return ( 
    <ImageBackground  source={require('../assets/bghome2.jpg')} style={{flex: 1}}>
    <SafeAreaView style={{marginTop:40}}>
    <Image style={{width: "90%", height: 300, resizeMode: "contain",marginLeft:"auto",marginRight:"auto"}} source={{uri:current.image}}/>
    
      <Text style={{marginLeft: "auto", marginRight: "auto", marginTop:45, fontSize:30, fontWeight:"bold",color:"white"}}>{current.name}
      </Text>

      <Text style={{
        marginLeft: "auto", 
        marginRight: "auto", 
        marginTop:30, 
        fontSize:45, 
        fontWeight:"bold",
        color:"white",
      }}
        >x{current.sets}
        </Text>
        {index + 1 >= excersises.length?(
            <Pressable
      onPress={() => {
            navigation.navigate("Home")
        
      }}
      style={{
        backgroundColor:"#FF443A",
        marginLeft:"auto", 
        marginRight:"auto",
        marginTop: 20,
        borderRadius:25,padding:10,
        width:150}}>
        <Text style={{textAlign:"center",fontWeight:"bold",fontSize:28,color:"white"}}>DONE</Text>
      </Pressable>
        ) : (
            <Pressable
      onPress={() => {
        navigation.navigate("Rest");
        setCompleted([...completed,current.name])
        setWorkout(workout+1)
        setMinutes(minutes+2.5)
        setCalories(calories+current.calories) // add the calories of the current exercise to the state
        setTimeout(() =>{
            setIndex(index + 1)
        },3000) 
      }}
      style={{
        backgroundColor:"#FF443A",
        marginLeft:"auto", 
        marginRight:"auto",
        marginTop: 40,
        borderRadius:25,padding:10,
        width:150}}>
        <Text style={{textAlign:"center",fontWeight:"bold",fontSize:28,color:"white"}}>DONE</Text>
      </Pressable>
        )}
      
      
      <Pressable style={{flexDirection:"row",alignItems:"center",marginLeft:"auto",marginRight:"auto",marginTop:80}}>
            <Pressable
            disabled={index === 0 }
            onPress={() =>{
              navigation.navigate("Rest");

              setTimeout(() =>{
                  setIndex(index-1)
              },2000)
            }}
            style={{backgroundColor:"gray",padding:10,borderRadius:20,marginHorizontal:20,width:130}}>
                <Text style={{color:"white",fontWeight:"bold",textAlign:"center"}}>PREV</Text>
            </Pressable>

            {index + 1 >= excersises.length ?(
                 <Pressable
                 onPress={() => {
                    navigation.navigate("Home")
                
              }}
                 style={{backgroundColor:"gray",padding:10,borderRadius:20,marginHorizontal:20,width:130,}}>
                 <Text style={{color:"white",fontWeight:"bold",textAlign:"center"}}>SKIP</Text>
             </Pressable>
            ):(
                <Pressable 
                onPress={() => {
                    navigation.navigate("Rest")
                    
                    setTimeout(() =>{
                        setIndex(index + 1)
                    },2000) 
                    
                  }}
                style={{backgroundColor:"gray",padding:10,borderRadius:20,marginHorizontal:20,width:130,}}>
                <Text style={{color:"white",fontWeight:"bold",textAlign:"center"}}>SKIP</Text>
            </Pressable>
            )}
           
      </Pressable>

    </SafeAreaView>
    </ImageBackground>
  )
}

export default Fitscreen

const styles = StyleSheet.create({})