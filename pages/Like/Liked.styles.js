import { Dimensions, StyleSheet } from "react-native";
import colors from '../../assets/colors/colors'
const height = Dimensions.get('window').height;

export default styles = StyleSheet.create({
    container:{
        flex:1,   
        backgroundColor:colors.white
    },
    titleWrapper  :{
        marginTop:100,
        marginVertical:40,
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
         marginVertical:-20,
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
    discoverCategory:{
        flexDirection:'row',
        marginTop:20,
        marginBottom:-35
        

    },
discoverCategoryText:{
    marginRight:30,
    fontFamily:'Lato-Regular',
    fontSize:16,
    color:colors.gray
}

})