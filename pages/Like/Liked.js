import React from 'react'
import { ImageBackground, SafeAreaView,ScrollView,Text,View } from 'react-native'
import styles from './Liked.styles'
import kas from '../../assets/images/kas.jpeg'
import Pyramids from '../../assets/images/pyramids-egypt.jpeg'
import Petra from '../../assets/images/Petra-Header.png'
import Eiffel from '../../assets/images/eiffel.jpeg'
import Cape from '../../assets/images/cape-town.jpeg'
import Seychelles from '../../assets/images/shey.jpeg'
import { Entypo } from '@expo/vector-icons'; 

import colors from '../../assets/colors/colors';
import LikeCard from '../../components/LikedCard/LikeCard';
const Liked = () =>{

    return(

        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.titleWrapper}>
                <Text style={styles.title}>Liked</Text>                
                <View style={styles.discoverCategory}>
                    <Text style={[styles.discoverCategoryText,{color:colors.orange}]}>All</Text>
                    <Text style={styles.discoverCategoryText}>Destinations</Text>
                    <Text style={styles.discoverCategoryText}>Cities</Text>
                    <Text style={styles.discoverCategoryText}>Experiences</Text>
                </View>
            </View>
            
            <LikeCard location="Kaş" image={kas} />
            <LikeCard location="Petra" image={Petra}/>
            <LikeCard location="Pyramids" image={Pyramids}/>
            <LikeCard location="Eiffel" image={Eiffel}/>
            <LikeCard location="Cape Town" image={Cape}/>
            <LikeCard location="Seychelles" image={Seychelles}/>
            </ScrollView>
        </View>
    )

    }
    export default Liked;