import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './pages/Home/Home'
import Liked from './pages/Like/Liked';
import Profile from './pages/Profile/Profile';
import { NavigationContainer } from '@react-navigation/native';
import colors from './assets/colors/colors'
import { AntDesign } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import Details from './pages/Details/Details'
import Img from './pages/img';

export default function App() {
  
  

  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  const TabNavigator = () =>{
    return(
      <Tab.Navigator
      
      
      screenOptions={{
        tabBarStyle:{backgroundColor:colors.white,borderTopLeftRadius:20, borderTopRightRadius:20},
        tabBarActiveTintColor:colors.orange,
         tabBarInactiveTintColor:colors.gray, 
         tabBarShowLabel:false
         
        }}
        
      
      >
        <Tab.Screen name="Home" component={Home} options={{
          headerShown:false ,   
          tabBarIcon:({color}) => <AntDesign name='home' size={32} color={color} />
        }}/>
        <Tab.Screen name="Liked" component={Liked} options={{headerShown:false, tabBarIcon:({color}) => <Ionicons name='heart-outline' size={32} color={color}/>}}/>
        <Tab.Screen name="Profile" component={Profile} options={{headerShown:false, tabBarIcon: ({color}) => <AntDesign name="user" size={32} color={color} />}}/>
        
      </Tab.Navigator>
      
    )
  }
  return (
    <NavigationContainer> 
      <Stack.Navigator screenOptions={{headerShown:false,}}>
        <Stack.Screen name="TabStack" component={TabNavigator}/>
        <Stack.Screen name="Details" component={Details}/>
        <Stack.Screen name="Img" component={Img}/>
          </Stack.Navigator>
      </NavigationContainer>
  )

 
}

