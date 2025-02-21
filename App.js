import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Notifications from 'expo-notifications';
import AlarmScreen from './components/AlarmScreen';

const Stack = createStackNavigator();

const App = () => {
    useEffect(() => {
        const requestPermissions = async () => {
            const { status } = await Notifications.requestPermissionsAsync();
            if (status !== 'granted') {
                alert("Permission for notifications not granted!");
            }
        };

        requestPermissions();

        Notifications.setNotificationHandler({
            handleNotification: async () => ({
                shouldShowAlert: true,
                shouldPlaySound: true,
                shouldSetBadge: false,
            }),
        });
    }, []);

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Alarm" component={AlarmScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
