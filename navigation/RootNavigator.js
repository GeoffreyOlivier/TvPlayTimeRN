import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import Home from "../screens/home";
import GameDetails from "../screens/game";
import {Button, Pressable} from "react-native";
import {Entypo, Ionicons, MaterialCommunityIcons} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';


const Stack = createNativeStackNavigator();

function RootNavigator() {

    const navigation = useNavigation();

    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    headerTitleStyle: {color: '#fff'},
                    headerTintColor: '#fff',
                    headerTransparent: true,
                    hideWhenScrolling: true,
                    position: 'fixed',
                    title: "",
                    headerRight: () => (
                        <Pressable
                            onPress={() => {
                                alert('clicked');
                            }}
                        >
                            <Ionicons name="notifications" size={30} color="yellow"/>
                        </Pressable>
                    )
                }}
            />
            <Stack.Screen
                name="GameDetails"
                component={GameDetails}
                options={{
                    animation: "slide_from_bottom",
                    headerTransparent: true,
                    title: "",
                    headerLeft: () => (
                        <Pressable onPress={() => navigation.goBack()}>
                            <Entypo name="chevron-down" size={30} color="white"/>
                        </Pressable>
                    ),
                    headerRight: () => (
                        <Pressable onPress={() => { alert('clicked') }}>
                            <MaterialCommunityIcons name="dots-vertical" size={30} color="white"/>
                        </Pressable>
                    ),

                }}
            />
        </Stack.Navigator>
    );
}

export default RootNavigator;