import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ListTurns } from '../../screens';
import { COLORS } from '../../constants';



const Stack = createNativeStackNavigator();

const ListNavigator = () => {
    return (
        <Stack.Navigator initialRouteName='Lista'>
            <Stack.Screen name='Lista' component={ListTurns} options={()=>({
                 title:"Turnos confirmados",
                 headerTitleStyle: {
                     fontSize: 17,
                     color: COLORS.white,
                 },
                 headerStyle: {
                     backgroundColor: COLORS.primary
                 }
            })}/>
        </Stack.Navigator>
    );
};

export default ListNavigator;

