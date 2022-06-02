
import React from 'react'
import {StyleSheet, SafeAreaView, Text, View, Image, Pressable} from 'react-native';

const infoProfileHeader = () => {
    return (
        <View style={styles.header}>
            <Image source={require('../assets/image/PHOTO-PROFIL-MEC-ORANGE.webp')} style={styles.imageProfile} />
            <Text style={styles.pseudo}>JeffBzh33</Text>
            <Pressable style={styles.button} >
                <Text style={styles.textButton}>Modifier</Text>
            </Pressable>
        </View>
    )
}



const styles = StyleSheet.create({
    header: {
        // backgroundColor: 'orange',
        transform: [{translateY: -50}],
        // paddingTop: -300,
        alignItems: "center"
    },
    imageProfile: {
        height: 100,
        width: 100,
        borderRadius: 50,
        borderWidth: 3,
        borderColor: "white",
    },
    pseudo: {
        padding: 10,
        fontSize: 30,
        color: 'white'
    },
    button: {
        padding: 10,
        backgroundColor: "#e5e5e5",
        borderRadius: 50,
        color: 'white',
        width: 100,
    },
    textButton: {
        textAlign: "center",
        textTransform: "uppercase",
        color: '#555555'
    }

});

export default infoProfileHeader;