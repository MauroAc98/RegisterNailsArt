import React, { useEffect, useState } from "react";
import { View } from 'react-native';
import { styles } from './styles';
import { Calendario } from '../../components'
import { useIsFocused } from '@react-navigation/native';
import { useDispatch } from "react-redux";
import { refreshDate } from "../../store/actions";

const Turns = () => {
  const isFocused = useIsFocused();
  const dispatch = useDispatch();
  const [calendarioKey, setCalendarioKey] = useState(0);

  useEffect(() => {
    if (isFocused) {
      dispatch(refreshDate());
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
