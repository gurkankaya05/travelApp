import React from 'react'
import { ImageBackground, SafeAreaView, Text, View, Image, TouchableOpacity,Alert, ScrollView} from 'react-native'
import styles from './Profile.styles';
import safari from '../../assets/images/safari.jpeg'
import saul from '../../assets/images/saul.png'
import kim from  '../../assets/images/ki.jpeg'
import { Ionicons } from '@expo/vector-icons';
import colors from '../../assets/colors/colors';


const Profile = () => {

    return (
        <View style={styles.container} >
            <ImageBackground source={safari} style={styles.imageWrapper} imageStyle={styles.imageStyle}>
            </ImageBackground>
            <View style={styles.profileImageWrapper}>
                <Image style={styles.imageItem} source={kim} />
            </View>

            <View style={styles.aboutWrapper}>
                <View style={styles.addWrapper}>
                <TouchableOpacity onPress={() => Alert.alert("Travel App" , "Image Upload section")}>
                    <Ionicons name="ios-add-outline" size={24} color={colors.white} />
                    </TouchableOpacity>

                </View>
                <TouchableOpacity onPress={() => Alert.alert("Travel App","Add Friend")} style={styles.editWrapper} >
                    <Text style={styles.editText}>Add Friend</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Alert.alert("Travel App","Edit About")} style={styles.editWrapper}>
                    <Text style={styles.editText}>Edit About</Text>
                </TouchableOpacity>



            </View>
            <View style={styles.aboutContainer}>
                <Text style={styles.aboutTitle}>About Me</Text>
                <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.aboutText}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.

                    
                    

                </Text>
                </ScrollView>
                    </View>
        </View>

    )

}
export default Profile;