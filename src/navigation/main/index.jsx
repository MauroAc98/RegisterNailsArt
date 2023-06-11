import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Schedules, Turns } from '../../screens';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
    return (
        <Stack.Navigator initialRouteName='Turns'>
            <Stack.Screen name='Turns' component={Turns} options={{ headerShown: false }} />
            <Stack.Screen name='Schedules' component={Schedules} />
        </Stack.Navigator>
    );
};

export default MainNavigator;

