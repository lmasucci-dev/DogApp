import React, { useState } from 'react'
import { FlatList, Text, TouchableOpacity, View, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { SearchBar } from 'react-native-elements';
import Routes from '../../../constants/constants';


const MOCK_RESPONSE_USER =
  { userRole: 'ADMIN', name: 'Benicio' }
  ;

const Home = () => {
  const navigation = useNavigation();
  const [userInfo, setUserInfo] = useState(MOCK_RESPONSE_USER)
  return (
    <View style={styles.container}>
      <Text style={{ textAlign: 'center', padding: 10, fontSize: 22, fontWeight: 'bold' }}>¡Bienvenido {userInfo.name}!</Text>
      <TouchableOpacity style={styles.touchableOption} onPress={() => navigation.navigate(Routes.MyRoutine)}>
        <Text style={styles.textOption}>Mi rutina</Text>
      </TouchableOpacity>
      {userInfo.userRole === 'ADMIN' ?
        (<><TouchableOpacity style={styles.touchableOption} onPress={() => navigation.navigate(Routes.Users)}>
          <Text style={styles.textOption}>Usuarios</Text>
        </TouchableOpacity><TouchableOpacity style={styles.touchableOption} onPress={() => navigation.navigate(Routes.Excercises)}>
            <Text style={styles.textOption}>Ejercicios</Text>
          </TouchableOpacity><TouchableOpacity style={styles.touchableOption} onPress={() => navigation.navigate(Routes.RoutinesTemplate)}>
            <Text style={styles.textOption}>Plantilla de rutinas</Text>
          </TouchableOpacity></>) : null}
    </View>
  );
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

export default Home;