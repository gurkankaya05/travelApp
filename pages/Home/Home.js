import React from 'react'
import { Button, SafeAreaView,Text, View,ScrollView , Image ,StyleSheet, FlatList, TouchableOpacity, ImageBackground } from 'react-native'
import styles from './Home.styles'
import colors from '../../assets/colors/colors'
import activitiesData from '../../assets/data/activitiesData'
import learnMoreData from '../../assets/data/learnMoreData'
import discoverData from '../../assets/data/discoverData'
import { Feather } from '@expo/vector-icons'; 
import profile from '../../assets/images/person.png'
import saul from '../../assets/images/saul.png'
import { useFonts } from 'expo-font'
import { Entypo } from '@expo/vector-icons'; 


const Home = ({navigation}) =>{

    
    const [fontsLoaded] = useFonts({
        'Lato-Bold' : require('../../assets/fonts/Lato-Bold.ttf'),
        'Lato-Regular': require('../../assets/fonts/Lato-Regular.ttf')
      })

      if(!fontsLoaded){
        return console.log("..");
      }

    //!   Discovered FlatList 
      const renderDiscoveredItem = ({item}) => {
        return (
            <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate("Details", {
               item:item
            })}>
                <ImageBackground
                source={item.image}
                style={[styles.discoverItem , {marginLeft: item.id === 'discover-1' ? 20 : 0}]}
                imageStyle={styles.discoverItemImage}>
        <Text style={styles.discoverItemTitle}>{item.title}</Text>
        <View style={styles.discoverItemCategoryWrapper}>
        <Entypo name="location-pin" size={18} color={colors.white} />
        <Text style={styles.discovertItemLocation}>{item.location}</Text>
        </View>
        </ImageBackground>
            </TouchableOpacity>
        )
      }

      //! Activities FlatList
 const renderActivitesItem = ({item}) =>{
    return(
    <View style={[styles.activitiyItemWrapper , {marginLeft:item.id === 'activities-1' ?  20 : 0}]}>
        <TouchableOpacity activeOpacity={0.5}>
    <Image source={item.image} style={styles.activityItemImage} />
    </TouchableOpacity>
    <Text style={styles.activityItemText}>{item.title}</Text>    
    
    </View>
    )
 }

 //! Learn More FlatList
 const renderlearnMoreItem = ({item} ) =>{
    return(
        <TouchableOpacity activeOpacity={0.8}> 
      <ImageBackground style={[styles.learnMoreItem, {marginLeft:item.id === 'learnMore-1' ? 8 : 0}]} imageStyle={styles.learnMoreImage} source={item.image}>
        <Text style={styles.learnMoreItemText}>{item.title}</Text>
      </ImageBackground>
      </TouchableOpacity>
    )
 }

    return(
        <View style={styles.container}> 
        <ScrollView>
            {/* {Header} */}
            <SafeAreaView>
                <View style={styles.menuWrapper}>
                <Feather name="menu" size={32} color="black" />   
                <TouchableOpacity  onPress={() => navigation.navigate("Profile")}>
                <Image source={profile} style={styles.profileImage} />                 
                </TouchableOpacity>

                </View>
            </SafeAreaView>
            {/* {Discover} */}
            <View style={styles.discoverWrapper}>
                <Text style={styles.discoverTitle}>Discover</Text>
                <View style={styles.discoverCategory}>
                    <Text style={[styles.discoverCategoryText,{color:colors.orange}]}>All</Text>
                    <Text style={styles.discoverCategoryText}>Destinations</Text>
                    <Text style={styles.discoverCategoryText}>Cities</Text>
                    <Text style={styles.discoverCategoryText}>Experiences</Text>
                </View>
            <View style={styles.discoverItemsWrapper}>
                <FlatList
                data={discoverData}
                renderItem={renderDiscoveredItem}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                />

            </View>

            {/* {Activites} */}
            <View style={styles.acitivitesWrapper}>
                <Text style={styles.activitesTitle}>Activities</Text>
                <View style={styles.activitiesItems}>
                <FlatList
                data={activitiesData}
                renderItem={renderActivitesItem}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                />

            </View>

            </View>
            {/* {Learn More} */}
            <View style={styles.learnMoreWrapper}>
                <Text style={styles.learnMoreTitle}>Learn More</Text>
                <View style={styles.learnMoreItemsWrapper}>
                <FlatList
                data={learnMoreData}
                renderItem={renderlearnMoreItem}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                />

            </View>
            </View>
            </View>

        </ScrollView>

            </View>
    )

    }
    
    export default Home;