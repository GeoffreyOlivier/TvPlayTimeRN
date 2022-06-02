import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StyleSheet, Text, View, ScrollView, ViewComponent, Pressable} from 'react-native';
import HeaderGameDetails from "../components/headerGameDetail";
import About from "../components/about";
import Progress from "../components/progress";



const Game = (props) => {

    const [showWindow, setShowWindow] = useState(true);



    const item = props.route.params.item;
    return (
        <View style={styles.container}>
            <HeaderGameDetails style={styles.header} image={item}/>
            <View style={styles.menu}>
                <Pressable onPress={() => setShowWindow(true)}>
                    <Text style={[{ fontWeight: showWindow ? 'bold' : 'normal' }, styles.label ]}>A propos</Text>
                </Pressable>
                <Pressable onPress={() => setShowWindow(false)}>
                    <Text style={[{ fontWeight: showWindow ? 'normal' : 'bold' }, styles.label ]}>Progress</Text>
                </Pressable>
            </View>
            <View style={[showWindow ? styles.lineRight : styles.lineLeft]}></View>

            {showWindow && <About game={item}/>}
            {!showWindow && <Progress game={item}/>}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#272727',
    },
    menu: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop: 10,
    },
    label: {
        color: 'white',
        fontSize: 20,
        paddingBottom: 15,
        paddingTop: 15

    },
    buttonPressable: {

    },
    lineRight: {
        borderBottomColor: 'white',
        borderBottomWidth: 5,
        alignSelf: 'flex-start',
        width: '50%'
    },
    lineLeft: {
        borderBottomColor: 'white',
        borderBottomWidth: 5,
        alignSelf: 'flex-end',
        width: '50%'
    }
})

export default Game;