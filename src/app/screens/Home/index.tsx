import React, { useState } from 'react'
import { Text, TouchableOpacity, View, StyleSheet, ImageBackground, SafeAreaView } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Routes from '../../../constants/constants';
import logo from '../../../assets/logo.jpg';




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
        imageStyle={{ opacity: 0.4 }}
        source={logo}
        resizeMode='center'
      >
        <TouchableOpacity style={styles.touchableOption} onPress={() => navigation.navigate(Routes.Orders)}>
          <Text style={styles.textOption}>Pedidos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchableOption} onPress={() => navigation.navigate(Routes.Products)}>
          <Text style={styles.textOption}>Productos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchableOption} onPress={() => navigation.navigate(Routes.Reports)}>
          <Text style={styles.textOption}>Reportes</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1C1E'
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
  //touchableOption: { justifyContent: 'center', alignItems: 'flex-start', borderBottomColor: '#2C2C2E', borderBottomWidth: 3, padding: 25 }
  touchableOption: { justifyContent: 'center', alignItems: 'center', backgroundColor: '#2C2C2E', height: 75, margin: 5, borderRadius: 12, borderColor: '#000000', borderWidth: 1 }

});

export default Home;