import { View, Text, StyleSheet, SafeAreaView, Image, Pressable, ScrollView, ImageBackground } from 'react-native'
import React ,{useContext}from 'react';
import { useNavigation, useRoute} from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import { FitnessItems } from '../Context';
import { AntDesign } from '@expo/vector-icons';

const WorkoutScreen = () => {
    const route = useRoute();
    // console.log(route.params);
    const navigation = useNavigation();
    const {
        completed,
        setCompleted,
      } = useContext(FitnessItems);
    return (
        <ImageBackground source={require('../assets/bghome.jpg')} style={{flex: 1}}>
            <ScrollView style={{ marginTop: 40 }}>
                <Image style={{ width: '100%', height: 170 }} source={{ uri: route.params.image }} />

                <Ionicons
                    onPress={() => navigation.goBack()}
                    style={{ position: "absolute", top: 10, left: 20 }}
                    name="arrow-back-circle-outline"
                    size={30}
                    color="white"
                />

                {route.params.excersises.map((item, index) => (
                    <Pressable style={{ margin: 10, flexDirection: "row", alignItems: "center" }} key={index}>
                        <Image style={{ width: 90, height: 90 }} source={{ uri: item.image }} />

                        <View style={{ marginLeft: 10, }}>
                            <Text style={{ fontSize: 17, fontWeight: "bold",width:180, color:"white" }}>{item.name}</Text>

                            <Text style={{ marginTop: 4, fontSize: 20, color: "white" }}>x{item.sets}</Text>
                        </View>

                       {completed.includes(item.name) ? (
                        <AntDesign name="checkcircle" size={24} color="green" />
                       ): (
                        null
                       )}
                    </Pressable>
                ))}
            </ScrollView>

            <Pressable
            onPress={() =>{
                navigation.navigate("Fit",{
                    excersises: route.params.excersises,
                    })
                setCompleted([]);
            }}
            style={{ backgroundColor: "#FF443A", padding: 10, marginLeft: "auto", marginRight: "auto", marginVertical: 20,width:120, borderRadius:6, }}>
                <Text style={{ textAlign: "center", color: "white", fontSize: 15, fontWeight: "600" }}>START</Text>
            </Pressable>
        </ImageBackground>
    )
}

export default WorkoutScreen
