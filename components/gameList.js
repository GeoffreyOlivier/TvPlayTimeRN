import React, {Component} from 'react'
import {FlatList, View, Text, StyleSheet, Image, TouchableWithoutFeedback} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';

const games = [
    {
        id: '1',
        title: 'Super Mario Bros',
        image: require('../assets/image/mario.jpeg'),
        description: 'Super Mario Bros is a platform video game series created by Nintendo for the Nintendo Entertainment System (NES) console. The series is notable for its emphasis on side-scrolling, and features a wide variety of game modes, from the original Mario Bros to the more recent Mario Party games. The series was originally released in Japan on November 21, 1985, and in North America on December 21, 1985. The series was also released in Europe on December 17, 1985, and in Australia on December 21, 1985. The series was also released in South America on December 21, 1985, and in the United States on December 21, 1985. The series was also released in Brazil on December 21, 1985, and in the rest of the world on December 21, 1985. The series was also released in Japan on December 21, 1985, and in North America on December 21, 1985. The series was also released in Europe on December 17, 1985, and in Australia on December 21, 1985. The series was also released in South America on December 21, 1985, and in the United States on December 21, 1985. The series was also released in Brazil on December 21, 1985, and in the rest of the world on December 21, 1985. The series was also released in Japan on December 21, 1985, and in North America on December 21, 1985. The series was also released in Europe on December 17, 1985, and in Australia on December 21, 1985. The series was also released in South America on December 21, 1985, and in the United States on December 21, 1985. The series was also released in Brazil on December 21, 1985, and in the rest of the world on December 21, 1985. The series was also released in Japan on December 21, 1985, and in North America on December 21, 1985. The series was also released in Europe on December 17, 1985, and in Australia on December 21, 1985. The series was also released in South America on December 21, 1985, and in the United States on December 21, 1985. The series was also released in Brazil on December 21, 1985, and in the rest of the world on December 21, 1985. The series was also released in Japan on December 21, 1985, and in North America on December 21, 1985. The series was also released in Europe on December 17, 1985, and in Australia on December 21, 1985.',
        progress: '100%',
        wherePlay: ['Nitendo Switch', 'PC'],
        similar: {
            title: 'Crash Bandicoot',
            image: require('../assets/image/crash.jpeg'),
        },
        studio: 'Nintendo',
    },
    {
        id: '2',
        title: 'Halo',
        image: require('../assets/image/halo.webp'),
        description: 'Halo is a series of video games developed by Bungie and published by Microsoft Studios. The series is based on the Halo universe, a fictional universe set in the fictional Halo universe. The series was first released for the Xbox video game console in 2001, and for the Xbox 360 video game console in 2002. The series was later ported to the PlayStation 2 video game console in 2007, and to the Xbox One video game console in 2013. The series was later ported to the PlayStation 4 video game console in 2015, and to the Xbox One video game console in 2017. The series was later ported to the Nintendo Switch video game console in 2018. The series was later ported to the Microsoft Windows platform in 2019. The series was later ported to the PlayStation 5 video game console in 2020. The series was later ported to the PlayStation 4 video game console in 2020. The series was later ported to the Xbox One video game console in 2020. The series was later ported to the Nintendo Switch video game console in 2020. The series was later ported to the Microsoft Windows platform in 2020. The series was later ported to the PlayStation 5 video game console in 2020. The series was later ported to the PlayStation 4 video game console in 2020. The series was later ported to the Xbox One video game console in 2020. The series was later ported to the Nintendo Switch video game console in 2020. The series was later ported to the Microsoft Windows platform in 2020. The series was later ported to the PlayStation 5 video game console in 2020. The series was later ported to the PlayStation 4 video game console in 2020. The series was later ported to the Xbox One video game console in 2020. The series was later ported to the Nintendo Switch video game console in 2020. The series was later ported to the Microsoft Windows platform in 2020. The series was later ported to the PlayStation 5 video game console in 2020. The series was later ported to the PlayStation 4 video game console in 2020. The series was later ported to the Xbox One video game console in 2020. The series was later ported to the Nintendo Switch video game console in 2020. The series was later ported to the Microsoft Windows platform in 2020. The series was later ported to the PlayStation 5 video game console in 2020. The series was later ported to the PlayStation 4 video game console in 2020. The series was later ported to the Xbox One video game console in 2020. The series was later ported to the Nintendo Switch video game console in 2020.',
        progress: '80%',
        wherePlay: ['Xbox', 'PC'],
        similar: {
            title: 'Call of duty',
            image: require('../assets/image/BO2.webp'),
        },
        studio: 'Bungie',
    },
    {
        id: '3',
        title: 'Call of Duty',
        image: require('../assets/image/callofduty.webp'),
        description: 'Call of Duty ou COD est une série de jeux vidéo de tir à la première personne sur la guerre. La série a été créée en 2003 par le studio Infinity Ward et éditée par Activision. Les épisodes prennent place lors de la Seconde Guerre mondiale ou lors de conflits',
        progress: '10%',
        wherePlay: ['Xbox', 'Playstation', 'PC'],
        similar: {
            title: 'Modern warfare',
            image: require('../assets/image/modern.webp'),
        },
        studio: 'Infinity Ward',
    },
    {
        id: '4',
        title: 'GTA V',
        image: require('../assets/image/gta.webp'),
        description: "Call of Duty ou COD est une série de jeux vidéo de tir à la première personne sur la guerre. La série a été créée en 2003 par le studio Infinity Ward et éditée par Activision. Les épisodes prennent place lors de la Seconde Guerre mondiale ou lors de conflits",
        progress: '20%',
        wherePlay: ['Xbox', 'Playstation', 'PC'],
        similar: {
            title: 'GTA IV',
            image: require('../assets/image/gta4.webp'),
        },
        studio: 'Rockstar',
    },
]


function GameList() {

    const navigation = useNavigation();

    const renderItem = ({item}) => {
        return (
            <TouchableWithoutFeedback
                style={styles.item}
                onPress={() => navigation.navigate('GameDetails', {item})}
            >
                <Image
                    style={styles.imageCard}
                    source={item.image}
                />
            </TouchableWithoutFeedback>
        )
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Jeux Favoris</Text>
            <FlatList
                data={games}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
                horizontal={true}
                style={styles.list}
            />
            <Text style={styles.title}>Tous mes jeux</Text>
            <FlatList
                data={games}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
                horizontal={true}
                style={styles.list}
            />
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    item: {},
    title: {
        padding: 10,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },
    imageCard: {
        margin: 10,
        padding: 10,
        width: 120,
        height: 190,
    },
    list: {}
})


export default GameList;