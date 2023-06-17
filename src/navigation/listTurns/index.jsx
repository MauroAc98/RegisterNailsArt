import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ListTurns } from '../../screens';


const Stack = createNativeStackNavigator();

const ListNavigator = () => {
    return (
        <Stack.Navigator initialRouteName='Lista'>
            <Stack.Screen name='Lista' component={ListTurns}/>
        </Stack.Navigator>
    );
};

export default ListNavigator;

