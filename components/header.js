import React from 'react'
import {StyleSheet, SafeAreaView, Text, View, Image, Pressable} from 'react-native';


// make function for image on the header
const Header = (props) => {
    console.log("header:")
    console.log(props)
    return (
        <SafeAreaView style={styles.container}>
            <Image source={props.image} style={styles.image}/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        justifyContent: "flex-end",
        height: 220
    },
    image: {
        width: '100%',
        height: 200,
        opacity: 0.9,
    },


});

export default Header;
