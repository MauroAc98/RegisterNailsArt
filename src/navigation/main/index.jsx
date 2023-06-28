import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ConfirmTurn, Schedules, Turns } from '../../screens';
import Ionicons from "@expo/vector-icons/Ionicons";
import { TouchableOpacity } from 'react-native';
import { COLORS } from '../../constants';
import { useSelector } from 'react-redux';
import { formatter } from '../../util/functions';


const Stack = createNativeStackNavigator();

const MainNavigator = ({ navigation }) => {

    const selectedDate = useSelector((state) => state.turns.selectedDate);
    const onHandlerHour = () => {
        if (!selectedDate) return;
        navigation.navigate('Horarios', { selectedDate: selectedDate });
    }

    return (
        <Stack.Navigator initialRouteName='Turnos'
        >
            <Stack.Screen name='Turnos' component={Turns} options={() => ({
                title: "Calendario",
                headerRight: () => (
                    <TouchableOpacity onPress={onHandlerHour}>
                        <Ionicons name="time-outline" size={30} color={COLORS.lightGray} />
                    </TouchableOpacity>
                ),
                headerTitleStyle: {
                    color: COLORS.white,
                    fontFamily: 'Philosopher-Regular',
                    fontSize: 20,
                },
                headerStyle: {
                    backgroundColor: COLORS.primary,
                }
            })} />
            <Stack.Screen name='Horarios' component={Schedules} options={({ route }) => ({
                title: formatter(route.params.selectedDate, 'normal'),
                headerTitleStyle: {
                    color: COLORS.white,
                    fontFamily: 'Philosopher-Regular',
                    fontSize: 20,
                },
                headerStyle: {
                    backgroundColor: COLORS.primary
                }

            })} />
            <Stack.Screen name='Confirmar' component={ConfirmTurn} options={() => ({
                title: "Confirmar turno",
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



export default MainNavigator;

