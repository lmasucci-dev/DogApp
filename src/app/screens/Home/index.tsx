import React, { useState } from 'react'
import { Text, TouchableOpacity, View, StyleSheet, ImageBackground, SafeAreaView } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Routes from '../../../constants/constants';
import pesas from '../../../assets/pesas.jpg';




const MOCK_RESPONSE_USER =
  { userRole: 'ADMIN', name: 'Benicio' }
  ;

const Home = () => {
  const navigation = useNavigation();
  const [userInfo, setUserInfo] = useState(MOCK_RESPONSE_USER)
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        imageStyle={{opacity: 0.4}}
        source={pesas}
        >
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
          </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#1C1C1E'
  },
  image: {
    flex: 1
  },
  title: {
    fontSize: 34,
    fontWeight: 'normal',
    marginBottom: 35,
    marginTop: 20,
    color: '#FFFFFF'
},
  textOption: { color: '#FFFFFF', fontWeight: '400', fontSize: 20 },
  touchableOption: { justifyContent: 'center', alignItems: 'flex-start', borderBottomColor: '#2C2C2E', borderBottomWidth: 3, padding: 25 }
});

export default Home;