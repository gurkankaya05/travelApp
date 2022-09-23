import React, { useState } from 'react'
import { Alert, ImageBackground, SafeAreaView,Text, TouchableOpacity, View } from 'react-native'
import styles from './Details.styles';
import { Entypo } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 
import { FancyAlert } from 'react-native-expo-fancy-alerts';
import AwesomeAlert from 'react-native-awesome-alerts';


import colors from '../../assets/colors/colors';

const Details = ({route, navigation}) =>{
    



    const createTwoButtonAlert = () =>
    Alert.alert(
      "Travel App",
      "You liked this place are you sure?",
      [
        {
          text: "No :/",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "YEEEEEESSS", onPress: () => console.log("OK Pressed") }
      ]
    ); 

    const {item} = route.params;
    return(
     <View style={styles.container}>
        <ImageBackground source={item.imageBig} style={styles.backgroundImage}>
            <TouchableOpacity style={styles.backIcon} onPress={() => navigation.goBack()}>
            <Feather name="chevron-left" size={30} color={colors.white} />
            </TouchableOpacity>
            <View style={styles.titlesWrapper}>
                <Text style={styles.itemText}>{item.title}</Text>
                <View style={styles.locationWrapper}>
                <Entypo name="location-pin" size={24} color={colors.white} />
                <Text style={styles.locationText}>{item.location}</Text>
                </View>
               



            </View>
            </ImageBackground>
            <View style={styles.descriptionWrapper}>
            <TouchableOpacity onPress={createTwoButtonAlert}>
                <View style={styles.heartWrapper}>
                <Entypo name="heart" size={32} color={colors.orange}/>
                </View>
                </TouchableOpacity>
                <View style={styles.descriptionTextWrapper}>
                    <Text style={styles.descriptionTitle}>Description</Text>
                    <Text style={styles.descriptionContent}>{item.description}</Text>
                </View>
                <View style={styles.infoWrapper}>
                    <View style={styles.infoItem}>
                        <Text style={styles.infoTitle}>Price</Text>
                         <View style={styles.infoTextWrapper}>
                            <Text style={styles.itemPrice}>${item.price}</Text>
                            <Text style={styles.itemSubText}>/person</Text>

                         </View>

                    </View>
                    <View style={styles.infoItem}>
                        <Text style={styles.infoTitle}>Rating</Text>
                         <View style={styles.infoTextWrapper}>
                            <Text style={styles.itemPrice}>{item.rating}</Text>
                            <Text style={styles.itemSubText}>/5</Text>

                         </View>

                    </View>
                    <View style={styles.infoItem}>
                        <Text style={styles.infoTitle}>Duration</Text>
                         <View style={styles.infoTextWrapper}>
                            <Text style={styles.itemPrice}>{item.duration}</Text>
                            <Text style={styles.itemSubText}> hours</Text>

                         </View>

                    </View>

                </View>
                <TouchableOpacity style={styles.buttonWrapper} onPress={() => Alert.alert("You Booked Now!")}>
                    <Text style={styles.buttonText}>Book Now</Text>
                </TouchableOpacity>



            </View>
        
        </View>
    )

    }
    export default Details;