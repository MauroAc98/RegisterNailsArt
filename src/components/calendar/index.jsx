
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './style';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import moment from 'moment';
import 'moment/locale/es';
import { useDispatch } from 'react-redux';
import { filterTurn } from '../../store/actions';


moment.locale('es');

LocaleConfig.locales['es'] = {
    monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
    monthNamesShort: ['Ene.', 'Feb.', 'Mar.', 'Abr.', 'May.', 'Jun.', 'Jul.', 'Ago.', 'Sep.', 'Oct.', 'Nov.', 'Dic.'],
    dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
    dayNamesShort: ['Dom.', 'Lun.', 'Mar.', 'Mié.', 'Jue.', 'Vie.', 'Sáb.'],
    today: 'Hoy',
};

LocaleConfig.defaultLocale = 'es';

const Calendario = () => {

    const dispatch = useDispatch();

    const handleDayPress = (day) => {
        dispatch(filterTurn(day.dateString));
    };

    const CustomDayComponent = ({ date, state }) => {
        const dayStyle = [styles.dayContainer]; 

        if (state === 'disabled') {
            dayStyle.push(styles.disabledDayContainer);
        }

        const isToday = date.dateString === moment().format('YYYY-MM-DD');

        return (
            <TouchableOpacity
                style={[dayStyle, isToday && styles.todayContainer]}
                onPress={() => handleDayPress(date)}
            >
                <Text style={[styles.dayText, state === 'disabled' && styles.disabledDayText, isToday && styles.todayText]}>
                    {date.day}
                </Text>
            </TouchableOpacity>
        );
    };

    return (


        <View style={styles.container}>
            <View style={styles.calendarContainer}>
                <Calendar
                    dayComponent={CustomDayComponent}
                    onDayPress={handleDayPress}
                />
            </View>
        </View>

    );
}

export default Calendario;