import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ConfirmTurn, Schedules, Turns } from '../../screens';
import Ionicons from "@expo/vector-icons/Ionicons";
import { TouchableOpacity } from 'react-native';
import { COLORS } from '../../constants';
import { useSelector } from 'react-redux';
import moment from 'moment';
import 'moment/locale/es';

const Stack = createNativeStackNavigator();

const MainNavigator = ({ navigation }) => {
    moment.locale('es');

    const selectedDate = useSelector((state) => state.turns.selectedDate);

    const onHandlerHour = () => {
        if (!selectedDate) return;
        navigation.navigate('Horarios', { selectedDate: selectedDate });
    }

    return (
        <Stack.Navigator initialRouteName='Turnos'>
            <Stack.Screen name='Turnos' component={Turns} options={() => ({
                title: "Seleccionar fecha",
                headerRight: () => (
                    <TouchableOpacity onPress={onHandlerHour}>
                        <Ionicons name="time-outline" size={30} color={COLORS.lightGray} />
                    </TouchableOpacity>
                ),
                headerTitleStyle: {
                    fontSize: 17, // Tamaño de fuente deseado
                    color: COLORS.white,
                },
                headerStyle: {
                    backgroundColor: COLORS.primary
                }
            })} />
            <Stack.Screen name='Horarios' component={Schedules} options={({ route }) => ({
                title: moment(route.params.selectedDate).format('dddd, D [de] MMMM [del] YYYY'),
                headerTitleStyle: {
                    fontSize: 17, // Tamaño de fuente deseado
                    color: COLORS.white,
                },
                headerStyle: {
                    backgroundColor: COLORS.primary
                }

            })} />
            <Stack.Screen name='Confirmar' component={ConfirmTurn} options={() => ({
                title:"Confirmar turno",
                headerTitleStyle: {
                    fontSize: 17,
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

