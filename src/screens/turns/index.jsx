import React, { useState } from "react";
import { View } from 'react-native';
import { styles } from './styles';
import { Calendario } from '../../components'
import { useFocusEffect } from '@react-navigation/native';
import { useDispatch, useSelector } from "react-redux";
import { getHours, getTurns, refreshDate, } from "../../store/actions";
import { useCallback } from "react";

const Turns = () => {
  const dispatch = useDispatch();
  const [calendarioKey, setCalendarioKey] = useState(0);
  const data = useSelector((state) => state.hours.data);

  useFocusEffect(
    useCallback(() => {
      dispatch(getHours());
      dispatch(refreshDate(data));
      dispatch(getTurns());
      setCalendarioKey((prevKey) => prevKey + 1);
    }, [])
  );

  return (
    <View style={styles.container}>
      <Calendario key={calendarioKey} />
    </View>
  );
}

export default Turns;
