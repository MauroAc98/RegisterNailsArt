import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ListTurns, TurnDetails } from '../../screens';
import { COLORS } from '../../constants';
import { TurnItem } from '../../components';



const Stack = createNativeStackNavigator();

const ListNavigator = () => {
    return (
        <Stack.Navigator initialRouteName='Lista'>
            <Stack.Screen name='Lista' component={ListTurns} options={() => ({
                title: "Turnos confirmados",
                headerTitleStyle: {
                    fontFamily: 'Philosopher-Regular',
                    fontSize: 20,
                    color: COLORS.white,
                },
                headerStyle: {
                    backgroundColor: COLORS.primary
                }
            })} />

            <Stack.Screen name='Detalle' component={TurnDetails} options={() => ({
                title: "Detalles del turno",
                headerTitleStyle: {
                    fontFamily: 'Philosopher-Regular',
                    fontSize: 20,
                    color: COLORS.white,
                },
                headerStyle: {
                    backgroundColor: COLORS.primary
                }
            })} />

        </Stack.Navigator>
    );
};

export default ListNavigator;

