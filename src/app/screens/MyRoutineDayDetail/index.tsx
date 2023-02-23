import React from 'react'
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native'

const MOCK_MY_ROUTINE = [
    {name: 'Press de banca', series: 4, repeticiones: 12, peso: 12.5, observacion: 'Ojo no lastimarse el codo'},
    {name: 'Press militar mancuerna', series: 4, repeticiones: 15, peso: 7, observacion: ''},
    {name: 'Sentadilla con salto', series: 4, repeticiones: 20, peso: 0, observacion: 'ojo las rodillas'}
]

const MyRoutineDayDetail = ({ day }) => {
    return (
        <View style={styles.container}>
            <Text>Detail {day}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 32,
        paddingHorizontal: 18,
        flex: 1,
    },
    textOption: { color: 'white', fontWeight: '600', fontSize: 18 },
    touchableOption: { justifyContent: 'center', alignItems: 'center', backgroundColor: 'blue', height: 35, margin: 5, borderRadius: 6 }
});

export default MyRoutineDayDetail;