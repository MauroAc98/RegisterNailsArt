import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Schedules, Turns } from '../../screens';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
    return (
        <Stack.Navigator initialRouteName='Turnos'>
            <Stack.Screen name='Turnos' component={Turns}/>
            <Stack.Screen name='Horarios' component={Schedules} />
        </Stack.Navigator>
    );
};

export default MainNavigator;

