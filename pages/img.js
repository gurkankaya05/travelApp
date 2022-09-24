import React,{useState} from 'react'
import { SafeAreaView,Text,TouchableOpacity,Alert ,Image} from 'react-native'
import * as ImagePicker from 'expo-image-picker';
import {firebase} from '../constant/config';
const Img =() =>{


    const[image,setImage] = useState(null);
    const[uploadingImage,setUploadingImage] = useState(null);
    const pickImage = async() =>{
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes:ImagePicker.MediaTypeOptions.All,
            allowsEditing:true,
            aspect:[4,3],
            quality:1,            
        })
        const source = {uri : result.uri};
        console.log(source);
        setImage(source);
    }

    const uploadImage = async() =>{
        setUploadingImage(true);
        const response= await fetch(image.uri);
        const blob =  await response.blob();
        const filename =  image.uri.substring(image.uri.lastIndexOf('/')+1);
        let ref = firebase.storage().ref().child(filename).put(blob);

            try {
                await ref;
            } catch (e) {
                console.log(e)
            }
            setUploadingImage(false)
            Alert.alert("Uploading Success");
            setUploadingImage(null);
    }
   



    return(
        <SafeAreaView>
            <TouchableOpacity onPress={pickImage}>
                <Text>
                    Choose Img
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={uploadImage}>
                <Text>
                    Upload Img
                </Text>
            </TouchableOpacity>
            {image && <Image source={{uri :image.uri}} style={{width:300,height:300}} />}

        </SafeAreaView>
    )
}
export default Img;