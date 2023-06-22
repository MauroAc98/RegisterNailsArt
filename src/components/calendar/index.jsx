
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './style';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import moment from 'moment';
import 'moment/locale/es';
import { useDispatch } from 'react-redux';
import { filterTurn } from '../../store/actions';
import { useState } from 'react';


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
    const [selectedDate, setSelectedDate] = useState(null);

    const handleDayPress = (day) => {
        dispatch(filterTurn(day.dateString));
        setSelectedDate(day.dateString);
    };

    const CustomDayComponent = ({ date, state }) => {
        const isSelected = selectedDate === date.dateString;

        return (
            <TouchableOpacity
                style={[
                    styles.dayContainer,
                    state === 'disabled' && styles.disabledDayContainer,
                    isSelected && styles.selectedDayContainer,
                ]}
                onPress={() => handleDayPress(date)}
                disabled={state === 'disabled'}
            >
                <Text
                    style={[
                        styles.dayText,
                        state === 'disabled' && styles.disabledDayText,
                        isSelected && styles.selectedDayText,
                    ]}
                >
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