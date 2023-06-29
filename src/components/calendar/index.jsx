
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './style';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import moment from 'moment';
import 'moment/locale/es';
import { useDispatch, useSelector } from 'react-redux';
import { filterTurn, refreshDate } from '../../store/actions';
import { useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { useCallback } from 'react';

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
    const hours = useSelector((state) => state.hours.data);
    const dispatch = useDispatch();
    const [selectedDate, setSelectedDate] = useState(null);

    const handleDayPress = (day) => {
        const currentDate = moment();
        const selectedDate = moment(day.dateString);

        if (selectedDate.isBefore(currentDate, 'day')) {
            return;
        }
        dispatch(filterTurn(day.dateString));
        setSelectedDate(day.dateString);
    };

    useFocusEffect(
        useCallback(() => {
            dispatch(refreshDate(hours))
        }, [hours])
    );

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