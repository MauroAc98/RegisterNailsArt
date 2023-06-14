import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ConfirmTurn, Schedules, Turns } from '../../screens';


const Stack = createNativeStackNavigator();

const MainNavigator = () => {
    return (
        <Stack.Navigator initialRouteName='Turnos'>
            <Stack.Screen name='Turnos' component={Turns}/>
            <Stack.Screen name='Horarios' component={Schedules} />
            <Stack.Screen name='Confirmar' component={ConfirmTurn} />
        </Stack.Navigator>
    );
};

export default MainNavigator;

