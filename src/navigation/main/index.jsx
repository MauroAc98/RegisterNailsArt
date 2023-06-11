import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Schedules, Turns } from '../../screens';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
    <Stack.Navigator initialRouteName='Turns'>
        <Stack.Screen name='Turns' component={Turns} />
        <Stack.Screen name='Schedules' component={Schedules} />
    </Stack.Navigator>
};

export default MainNavigator;

