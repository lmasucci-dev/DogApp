import React from 'react'
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native'

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