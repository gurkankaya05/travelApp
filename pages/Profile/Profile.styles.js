import { Dimensions, StyleSheet } from "react-native";
import colors from "../../assets/colors/colors";
const height = Dimensions.get('window').height;

export default styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.white

    },
    imageWrapper :{
        height:height*0.4,
        justifyContent:'flex-end',
    alignItems:'center',
    },
imageStyle :{
    borderRadius:20,
},
profileImageWrapper:{
    width:100,
    height:100,
    borderRadius:50,
    backgroundColor:'black',
    alignSelf:'center',
    marginTop:-50,
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,
elevation: 5,

},
imageItem:{
    width:100,
    height:100,
    borderRadius:50,
},
aboutWrapper:{
    marginHorizontal:20,
    marginTop:20,
    flexDirection:'row',
    justifyContent:'center',
},
editWrapper:{
     
     backgroundColor:colors.orange,
     borderRadius:7,
     paddingVertical:7,
     paddingHorizontal:10,
     marginHorizontal:8,
     

},
editText:{
    color:colors.white,
    fontFamily:'Lato-Bold'
},
addWrapper:{
   position:'absolute',
   marginTop:-38,
   borderRadius:20,
   backgroundColor:colors.orange,
   shadowColor: "#000",
   
    
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,
elevation: 5,
   

},
aboutContainer:{
flex:1,

marginTop:20,
backgroundColor:colors.white,
borderTopLeftRadius:20,
borderTopRightRadius:20,
shadowColor: "#000",


},
aboutTitle:{
    color:colors.black,
    fontSize:24,
    fontFamily:'Lato-Bold',
    marginHorizontal:20,
    marginTop:15,
},
aboutText:{
    marginHorizontal:20,
    color:colors.darkGray,
    marginTop:10,
    fontSize:15
},

})