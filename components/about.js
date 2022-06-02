import React from "react";
import {Text, View, StyleSheet, ScrollView, Image} from "react-native";
import Divider from "./divider";

const About = (props) => {
    console.log("about:", props.game.wherePlay)
    const game = props.game;
    return (
        <ScrollView>
            <Text style={styles.title}>Where play</Text>
            <ScrollView horizontal={true}>
                <Text style={styles.list}>
                    {
                        game.wherePlay.map((item, key) => (
                            <View key={key} style={styles.listWherePlay} >
                                <Text style={[
                                    {backgroundColor :
                                            item === 'Xbox' ? 'green' :
                                                item === 'Playstation' ? 'blue' :
                                                    item === 'Nitendo Switch' ? 'red' :
                                                        item === 'PC' ? '#fad700' : 'black'
                                    }, styles.itemWherePlay]}>{item}</Text>
                            </View>
                        ))
                    }
                </Text>
            </ScrollView>
            <Divider/>
            <Text style={styles.title}>Similar</Text>
            <View style={styles.similar}>
                <Image source={game.similar.image} style={styles.image} />
                <Text style={styles.similarTitle}>{game.similar.title} </Text>
            </View>
            <Divider/>
            <Text style={styles.title}>Description</Text>
            <Text style={styles.text}>{game.description}</Text>
            <Divider/>
            <Text style={styles.title}>Studio</Text>
            <Text style={styles.text}>{game.studio}</Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        padding: 20,
    },
    list: {
       height: 50,
    },
    listWherePlay: {
        padding: 10,
        alignItems: 'center',
    },
    itemWherePlay: {
        color: 'white',
        // backgroundColor: '#64734f',
        borderRadius: 15,
        overflow: 'hidden',
        fontSize: 25,
        paddingLeft: 20,
        paddingRight: 20,


    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 50
    },
    similar: {
        marginLeft: 20,
        flexDirection: 'row',
    },
    similarTitle: {
        alignSelf: 'center',
        marginLeft: 10,
        fontSize: 16,
        color: 'white',
    },
    text: {
        marginLeft: 20,
        marginRight: 20,
        color: 'white',
        fontSize: 16,
    }

})

export default About;