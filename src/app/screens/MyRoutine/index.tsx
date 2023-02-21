import React from 'react'
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Routes from '../../../constants/constants';

const MyRoutine = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.touchableOption} onPress={() => navigation.navigate(Routes.MyRoutineDayDetail, { day: 'LUNES'})}>
        <Text style={styles.textOption}>Lunes</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.touchableOption} onPress={() => navigation.navigate(Routes.MyRoutineDayDetail, {day: 'MARTES'})}>
        <Text style={styles.textOption}>Martes</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.touchableOption} onPress={() => navigation.navigate(Routes.MyRoutineDayDetail, {day: 'MIERCOLES'})}>
        <Text style={styles.textOption}>Miercoles</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.touchableOption} onPress={() => navigation.navigate(Routes.MyRoutineDayDetail, {day: 'JUEVES'})}>
        <Text style={styles.textOption}>Jueves</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.touchableOption} onPress={() => navigation.navigate(Routes.MyRoutineDayDetail, {day: 'VIERNES'})}>
        <Text style={styles.textOption}>Viernes</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.touchableOption} onPress={() => navigation.navigate(Routes.MyRoutineDayDetail, {day: 'SABADO'})}>
        <Text style={styles.textOption}>Sabado</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.touchableOption} onPress={() => navigation.navigate(Routes.MyRoutineDayDetail, {day: 'DOMINGO'})}>
        <Text style={styles.textOption}>Domingo</Text>
      </TouchableOpacity>
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

export default MyRoutine;