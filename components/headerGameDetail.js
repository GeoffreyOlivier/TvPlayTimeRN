import React from 'react'
import {StyleSheet, SafeAreaView, Text, View, Image, Pressable} from 'react-native';


// make function for image on the header
const HeaderGameDetails = (props) => {
    console.log("header:")
    console.log(props.image)
    return (
        <SafeAreaView style={styles.container}>
            <Image source={props.image.image} style={styles.image}/>
            <Text style={styles.text}>{props.image.title}</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        position: 'relative',
        justifyContent: "flex-end",
        height: 220,
    },
    image: {
        width: '100%',
        height: 200,
    },
    text: {
        position: 'absolute',
        color: 'white',
        fontSize: 40,
        bottom: 0,
        left: 0,
        fontWeight: 'bold',
        paddingLeft: 10,
    }

});

export default HeaderGameDetails;
