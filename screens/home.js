import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View, ScrollView, Button} from 'react-native';
import Header from "../components/header";
import BarreStats from "../components/barreStats";
import InfoProfileHeader from "../components/infoProfileHeader";
import Divider from "../components/divider";
import GameList from "../components/gameList";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App({navigation}) {

        return (
            <ScrollView style={styles.container}>
                <Header style={styles.header} image={require('../assets/image/raw.webp')} />
                <InfoProfileHeader style={styles.InfoProfileHeader}/>
                <BarreStats/>
                <Divider/>
                <GameList goNextScreen={navigation}/>
                <StatusBar style="auto"/>
            </ScrollView>
        );
    }

    const styles = StyleSheet.create({
        container: {
            backgroundColor: '#272727',
            marginBottom: 0,

        },
        InfoProfileHeader: {
            // backgroundColor: '#379a37',
        }

    });
