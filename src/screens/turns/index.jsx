import React, { useEffect, useState } from "react";
import { View } from 'react-native';
import { styles } from './styles';
import { Calendario } from '../../components'
import { useIsFocused } from '@react-navigation/native';
import { useDispatch } from "react-redux";
import { getTurns, refreshDate, } from "../../store/actions";

const Turns = () => {
  const isFocused = useIsFocused();
  const dispatch = useDispatch();
  const [calendarioKey, setCalendarioKey] = useState(0);

  useEffect(() => {

    if (isFocused) {
      dispatch(refreshDate())
      dispatch(getTurns());

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
