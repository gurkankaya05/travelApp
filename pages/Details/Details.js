import React from 'react'
import { SafeAreaView,Text } from 'react-native'
const Details = ({route}) =>{

    const {item} = route.params;
    return(
        <SafeAreaView>
            <Text style={{textAlign:'center', fontSize:20}}>
                Title :  {item.title}
            </Text>
            <Text style={{textAlign:'center', fontSize:20}}>
                Location : {item.location}
            </Text>
            <Text style={{textAlign:'center', fontSize:20}}>
                Description : {item.description}
            </Text>
        </SafeAreaView>
    )

    }
    export default Details;