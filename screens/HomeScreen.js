import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, ImageBackground, TouchableOpacity } from 'react-native'
import React, {useContext} from 'react'
import FitnessCards from '../components/FitnessCards';
import { FitnessItems } from '../Context';
import { useNavigation } from '@react-navigation/native';

const initialFitnessState = {
    minutes: 0,
    calories: 0,
    workout: 0
  };
const HomeScreen = () => {
    const navigation = useNavigation();
    const {
        minutes,
        calories,
        workout
      } = useContext(FitnessItems);

    const handleLogout = () => {
      // Handle logout functionality here
      navigation.navigate('Login');
    }
    
    return (

        <ImageBackground source={require('../assets/bghome.jpg')}  style={{flex: 1}}>
         
        <View style={{ marginTop: 40,}}>
            
                <View style={{ backgroundColor: "#EC1B23", padding: 10, height: 160, width: "100%" }}>
                    <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>MEN'S WORKOUT</Text>
                    


                    <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginTop: 20,
                    }}>
                        <View>
                            <Text style={{
                                textAlign: "center",
                                fontWeight: "bold",
                                color: "white",
                                fontSize: 18,
                            }}
                            >
                            {workout}
                            </Text>
                            <Text style={{ color: "white", fontSize: 17, marginTop: 5 }}>WORKOUTS</Text>
                        </View>

                        <View>
                            <Text style={{
                                textAlign: "center",
                                fontWeight: "bold",
                                color: "white",
                                fontSize: 18,
                            }}>
                                {calories}
                            </Text>
                            <Text style={{ color: "white", fontSize: 17, marginTop: 5 }}>KCAL</Text>
                        </View>

                        <View>
                            <Text style={{
                                textAlign: "center",
                                fontWeight: "bold",
                                color: "white",
                                fontSize: 18,
                            }}>
                                {minutes}
                            </Text>
                            <Text style={{ color: "white", fontSize: 17, marginTop: 5 }}>MINS</Text>
                        </View>
                      
                        
                    </View>
                    
                    <FitnessCards/>
                    
                </View>
                <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
                            <Image source={require('../assets/logout.png')} style={styles.logoutIcon} />
                        </TouchableOpacity>
        </View>
   
        </ImageBackground> 
    );
};

const styles = StyleSheet.create({

    logoutButton: {
        position: 'absolute',
        top: 690,
        right: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 5,
      },
      logoutIcon: {
        height: 35,
        width: 35,
      },
    
    });



export default HomeScreen
