import React, { useEffect } from "react";
import { Platform, TextInput, View } from "react-native";
import { styles } from "./styles";
import { useState } from "react";
import DateTimePicker from '@react-native-community/datetimepicker';
import ButtonCustom from "../buttonCustom";


const TimePicker = ({ onConfirmHour }) => {

    const [showTimePicker, setShowTimePicker] = useState(false);
    const [selectedTime, setSelectedTime] = useState(new Date());


    const handleTimeChange = (event, time) => {
        if (Platform.OS === 'android') {
            setShowTimePicker(false);
        }
        if (time) {
            setSelectedTime(time);
        }
    };

    const handleTimePress = () => {
        setShowTimePicker(true);
    };

    const formatTime = (date) => {
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const amPm = hours >= 12 ? 'PM' : 'AM';
        const formattedTime = `${hours}:${minutes} ${amPm}`;
        return formattedTime;
    };

    useEffect(() => {
        onConfirmHour(formatTime(selectedTime));
    }, [selectedTime])

    return (
        <View style={styles.container}>
            <ButtonCustom onPress={handleTimePress} name={'clock-o'} />

            {showTimePicker && (
                <DateTimePicker
                    value={selectedTime}
                    mode="time"
                    is24Hour={true}
                    display="default"
                    onChange={handleTimeChange}
                />
            )}
            <TextInput
                style={styles.input}
                value={formatTime(selectedTime)}
                placeholder="Seleccione una hora"
                disabled={true}
                editable={false}
            />
        </View>
    )
}

export default TimePicker;
