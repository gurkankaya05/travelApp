import { Dimensions, StyleSheet } from "react-native";
import colors from '../../assets/colors/colors'
const height = Dimensions.get('window').height;

export default styles = StyleSheet.create({
    container:{
       paddingVertical:10,
       
        
        
        
    },
    titleWrapper  :{
        marginVertical:100,
        marginHorizontal:20,
        
    },
    title :{
        fontFamily:'Lato-Bold',
        fontSize:32,
        color:colors.black,
    },

    contentImage:{
        height:height*0.1,
        marginHorizontal:10,
         
        borderRadius:40,
        
        
        
        
    },

    imageStyle:{
        borderRadius:14,
        
        
    },
    innerTextWrapper :{
        marginHorizontal:20,
        flexDirection:'row',
        marginTop:55
        
        
    },

    locationText :{
        fontSize:19,
        color:colors.white,
        fontFamily:'Lato-Bold',
        marginTop:-3
        
    
    },

})