import React from "react";
import { View,Text,ImageBackground, TouchableOpacity, Alert } from 'react-native';
import kas from '../../assets/images/kas.jpeg'
import { Entypo } from '@expo/vector-icons'; 
import styles from './LikeCard.styles'
import colors from "../../assets/colors/colors";
const LikeCard =({location,image, navigation}) =>{
    return(
        <View style={styles.container}>
            <TouchableOpacity activeOpacity={0.8} onPress={() => Alert.alert("Şuna bastınız" ,`${location}`)}>
        <ImageBackground source={image} style={styles.contentImage} imageStyle={styles.imageStyle}>
                 
        <View style={styles.innerTextWrapper}>
        <Entypo name="location-pin" size={18} color={colors.white} />
            <Text style={styles.locationText}>
                {location}
            </Text>
            
        </View>
        </ImageBackground>
        </TouchableOpacity>
        </View>
    )

}

export default LikeCard;