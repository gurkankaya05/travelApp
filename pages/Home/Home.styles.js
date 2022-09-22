import { StyleSheet } from 'react-native'


import colors from '../../assets/colors/colors'


  
export default styles = StyleSheet.create({
    container: {
        flex: 1,
        color: colors.white

    },
    menuWrapper: {
        marginHorizontal:20,
        marginTop:20,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
        
    },
    profileImage: {
        borderRadius:25,

    },
    discoverWrapper :{
        // marginHorizontal:20,
        marginTop:20
        
        

    },
discoverTitle :{
    fontFamily: 'Lato-Bold',
    fontSize:32,
    marginHorizontal:20,
    
},

discoverCategory  : {
    flexDirection:'row',
    marginTop:20,
    marginHorizontal:20,
    
    
},
discoverCategoryText : {
    marginRight:30,
    fontFamily:'Lato-Regular',
    fontSize:16,
    color:colors.gray

},
discoverItem  :{
    width:170,
    height:250,
    justifyContent:'flex-end',
    paddingHorizontal:10,
    paddingVertical:10,
    marginRight:20
    
},
discoverItemImage :{
    borderRadius:18
},
discoverItemTitle :{
    fontFamily:'Lato-Bold',
    fontSize:18 ,
    color:colors.white

},
discoverItemCategoryWrapper :{
    flexDirection:'row',
    alignItems:'center',
    marginTop:5
},
discovertItemLocation :{
    color:colors.white,
    marginLeft:5,
    fontFamily:'Lato-Bold',
    fontSize:14
},
discoverItemsWrapper:{
    paddingVertical:10

},
acitivitesWrapper  :{
    marginTop:12,
},
activitesTitle :{
marginHorizontal:20,
fontFamily:'Lato-Bold',
fontSize:24,
color:colors.black
},
activitiesItems :{
paddingVertical:20
},


activitiyItemWrapper :{
justifyContent:'flex-end',
alignItems:'center',
marginRight:20,

},
activityItemImage :{
width:36
},
activityItemText :{
    marginTop:5,
    fontFamily:'Lato-Bold',
    fontSize:14,
    color:colors.gray,
    

},
learnMoreWrapper  :{
marginTop:10,
},
learnMoreTitle :{
    marginHorizontal:20,
    fontFamily:'Lato-Bold',
    fontSize:24,
    color:colors.black
},

learnMoreItemsWrapper:{
paddingVertical:20,
},
learnMoreItem  :{
width:170,
height:180,
justifyContent:'flex-end',
marginRight:10
},
learnMoreImage :{
    borderRadius:18,
    
},
learnMoreItemText :{
    color:colors.white,
    fontFamily:'Lato-Bold',
    fontSize:18,
    marginHorizontal:10,
    marginVertical:20
    

},
})