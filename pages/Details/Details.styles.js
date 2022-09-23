import { StyleSheet,Dimensions } from "react-native";
import colors from '../../assets/colors/colors'
const height = Dimensions.get('window').height;
export default styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.white
    },
    backgroundImage  :{
        height:height *0.6,
        justifyContent:'space-between'
    },
descriptionWrapper :{
    backgroundColor:colors.white,
    height:120,
    flex:1,
    marginTop:-20,
    borderRadius:25
},
backIcon:{
    marginLeft:20,
    marginTop:60
},
titlesWrapper  :{
    marginHorizontal:20,
    marginBottom:40
},
itemText :{
    fontFamily:'Lato-Bold',
    color:colors.white,
    fontSize : 32

},
locationWrapper :{
    flexDirection:'row',
    alignItems:'center',
    marginTop:5


},
locationText :{
    fontSize:16,
    color:colors.white,
    fontFamily:'Lato-Bold',

},
heartWrapper:{
    position:'absolute',
    right:40,
    top:-30,
    width:64,
    height:64,
    backgroundColor:colors.white,
    borderRadius:64,
    alignItems:'center',
    justifyContent:'center',
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,
},
descriptionTextWrapper  :{
    marginTop:30,
    marginHorizontal:20

},
descriptionTitle :{
fontFamily:'Lato-Bold',
fontSize:24,
color:colors.black

},
descriptionContent :{
    marginTop:20,
    color:colors.darkGray,
    fontSize:16,
    fontFamily:'Lato-Regular',
    height:85
},
infoWrapper  :{
    flexDirection:'row',
    marginHorizontal:20,
    justifyContent:'space-between',
    marginTop:20

},
infoItem :{

},
infoTitle :{
    fontFamily:'Lato-Bold',
    color:colors.gray,
    fontSize:12

},
infoTextWrapper :{
    flexDirection:'row',
    alignItems:'flex-end',
    marginTop:5,

},
itemPrice :{
    fontFamily:'Lato-Bold',
    fontSize:24,
    color:colors.orange
},
itemSubText :{
    fontFamily:'Lato-Bold',
    color:colors.darkGray,
    fontSize:14,
    marginBottom:3,


},
buttonWrapper:{
marginHorizontal:20,
marginTop:30,
backgroundColor:colors.orange,
alignItems:'center',
paddingVertical:15,
borderRadius:10
},
buttonText:{
    fontFamily:'Lato-Bold',
    fontSize:18,
    color:colors.white
  

}
})