import React, { useEffect } from "react";
import { View } from 'react-native';
import { styles } from './styles';
import { Calendario } from '../../components'
import { useIsFocused } from '@react-navigation/native';
import { useDispatch } from "react-redux";
import { refreshDate } from "../../store/actions";

const Turns = () => {
    const isFocused = useIsFocused();
    const dispatch = useDispatch();

    useEffect(() => {
        if (isFocused) {
            dispatch(refreshDate());
        }
    }, [isFocused]);

    return (
        <View style={styles.container}>
            <Calendario />
        </View>
    );
}

export default Turns;