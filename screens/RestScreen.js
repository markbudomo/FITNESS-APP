import { StyleSheet, Text, View, SafeAreaView , Image, ImageBackground} from 'react-native'
import React ,{useEffect, useState} from 'react'
import { useNavigation} from '@react-navigation/native';



const RestScreen = () => {
    const navigation = useNavigation();
    let timer= 0 ;
    const [timeLeft,setTimeLeft] = useState(1);

    const startTime = () => {
        setTimeout(()=>{
            if(timeLeft <=0){
                navigation.goBack();
                clearTimeout(timer)
            }
            setTimeLeft(timeLeft - 1)
        },1000)

    }
    useEffect(()=>{
        startTime();
        return () => clearTimeout(timer);
    },)
  return (
    <ImageBackground  source={require('../assets/bghome2.jpg')} style={{flex: 1}}>
    <SafeAreaView style={{marginTop:40}}>

<Image style={{width: "90%", height: 300, resizeMode: "contain",marginLeft:"auto",marginRight:"auto", marginTop:20 }} source={{uri: "https://yb-downloads.s3.us-west-1.amazonaws.com/breathing/GIF-3-phase-yoga-breathing.gif"}}/>
      

      <Text
        style={{
            fontSize: 30,
            fontWeight:"900",
            marginTop:50,
            textAlign:"center",
            color: "white"
        }}>
            TAKE A QUICK BREAK!
      </Text>

        <Text
        style={{
            fontSize: 100,
            fontWeight:"800",
            marginTop:50,
            textAlign:"center",
            color: "white"
        }}>
            {timeLeft}
        </Text>
    </SafeAreaView>
    </ImageBackground>
  )
}

export default RestScreen

const styles = StyleSheet.create({})