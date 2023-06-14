
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './style';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import moment from 'moment';
import 'moment/locale/es';

moment.locale('es');

LocaleConfig.locales['es'] = {
    monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
    monthNamesShort: ['Ene.', 'Feb.', 'Mar.', 'Abr.', 'May.', 'Jun.', 'Jul.', 'Ago.', 'Sep.', 'Oct.', 'Nov.', 'Dic.'],
    dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
    dayNamesShort: ['Dom.', 'Lun.', 'Mar.', 'Mié.', 'Jue.', 'Vie.', 'Sáb.'],
    today: 'Hoy',
};

LocaleConfig.defaultLocale = 'es';

const Calendario = (props) => {

    const handleDayPress = (day) => {
        props.onSelectedDate(day.dateString);
    };

    const CustomDayComponent = ({ date, state }) => {
        const dayStyle = state === 'disabled' ? styles.disabledDayContainer : styles.dayContainer;
        const dayTextStyle = state === 'disabled' ? styles.disabledDayText : styles.dayText;
        const isToday = date.dateString === moment().format('YYYY-MM-DD'); // Verificar si es la fecha actual

        return (
            <TouchableOpacity
                style={[dayStyle, isToday]}
                onPress={() => handleDayPress(date)}
            >
                <Text style={[dayTextStyle, isToday && styles.todayText]}>{date.day}</Text>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.container}>
            <Calendar
                dayComponent={CustomDayComponent}
                onDayPress={handleDayPress}
            />
        </View>
    );
}

export default Calendario;