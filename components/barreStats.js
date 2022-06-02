import React from 'react'
import {ScrollView,StyleSheet, Text, View} from "react-native";


const barreStats = () => {
    return (
        <ScrollView
            horizontal={true}
            style={styles.scrollView}
        >
            <View style={styles.container}>
                <Text style={styles.label} >NOMBRE JEUX JOUER</Text>
                <Text style={styles.number} >4</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.label} >NOMBRE D'HEURE À JOUER</Text>
                <Text style={styles.number} >1 265</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.label} >NOMBRE JEUX TERMINER</Text>
                <Text style={styles.number} >1</Text>
            </View>
        </ScrollView>
    )

}

const styles = StyleSheet.create({

    scrollView: {
        // backgroundColor: 'pink',
        flexGrow: 0,
        marginBottom: 20,

    },
    container: {
      backgroundColor: '#545454',
        margin: 10,
        padding: 10,
        borderRadius: 6,
        height: 65
    },
    label: {
        fontSize: 12,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center'
    },
    number: {
        fontSize: 25,
        fontWeight: 'bold',
        color: "#fad700",
        textAlign: "center"
    }

})

export default barreStats;