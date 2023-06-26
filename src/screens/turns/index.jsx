import React, { useEffect, useState } from "react";
import { View } from 'react-native';
import { styles } from './styles';
import { Calendario } from '../../components'
import { useIsFocused } from '@react-navigation/native';
import { useDispatch,useSelector } from "react-redux";
import { getHours, getTurns, refreshDate, } from "../../store/actions";

const Turns = () => {
  const isFocused = useIsFocused();
  const dispatch = useDispatch();
  const [calendarioKey, setCalendarioKey] = useState(0);
  const data = useSelector((state) => state.hours.data);

  useEffect(() => {

    if (isFocused) {
      dispatch(refreshDate(data))
      dispatch(getTurns());
      dispatch(getHours());
      setCalendarioKey((prevKey) => prevKey + 1);
    }
  }, [isFocused]);

  return (
    <View style={styles.container}>
      <Calendario key={calendarioKey} />
    </View>
  );
}

export default Turns;
