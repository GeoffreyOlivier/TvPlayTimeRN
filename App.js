import {StyleSheet, Text, View, ScrollView, StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import RootNavigator from "./navigation/RootNavigator";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <StatusBar
                backgroundColor="#fff"
                barStyle="light-content" // Here is where you change the font-color
            />
            <RootNavigator />
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#272727',
        marginBottom: 0,
        top: 0,
        flex: 1,

    },
    InfoProfileHeader: {
        // backgroundColor: '#379a37',
    }

});
