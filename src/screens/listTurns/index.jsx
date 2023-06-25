import React, { useCallback, useEffect } from "react";
import { View, FlatList, SafeAreaView } from 'react-native';
import { styles } from './styles';
import { TurnItem } from "../../components";
import { useSelector } from 'react-redux';
// import { useFocusEffect } from "@react-navigation/native";
// import { getTurns } from "../../store/actions";


const ListTurns = () => {

    // const dispatch = useDispatch();
    // useFocusEffect(
    //     useCallback(() => {
    //         dispatch(getTurns());
    //     }, [dispatch])
    // );

    const ListTurns = useSelector((state) => state.turns.data);
    const generateUniqueId = () => {
        const timestamp = Date.now().toString(36); // Obtén una representación en base 36 de la fecha actual
        const randomSuffix = Math.random().toString(36).substr(2, 5); // Genera un sufijo aleatorio de 5 caracteres
        return `${timestamp}-${randomSuffix}`;
    }

    const renderItem = ({ item }) => <TurnItem item={item} onSelected={() => null} />;

    return (
        <View style={styles.container}>
            <SafeAreaView>
                <FlatList
                    data={ListTurns}
                    renderItem={renderItem}
                    keyExtractor={generateUniqueId}
                />
            </SafeAreaView>
        </View>
    )
}

export default ListTurns;