import React, { useEffect, useState } from 'react'
import { Text, View, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Routes from '../../../constants/constants';
import { database } from '../../../config/firebaseConfig'
import { collection, addDoc, query, getDocs } from 'firebase/firestore'
import { User } from '../../../interfaces/usersInterfaces';

const Users = () => {
  const navigation = useNavigation();
  const [users, setUsers] = useState<User[]>();

  const getUsers = async () => {
    const querySnapshot = await getDocs(collection(database, "users"));
    const dataUsers: any[] = [];
    querySnapshot.forEach(doc => {
      const { name, lastName } = doc?.data();
      const id = doc?.id
      dataUsers.push({ id, name, lastName })
    })
    setUsers(dataUsers);
  }

  useEffect(() => {
    getUsers();
  }, [])

  const Item = ({props}) => (
    <View>
      <TouchableOpacity style={styles.touchableOption} onPress={() => navigation.navigate(Routes.UserDetail, props)}>
        <Text style={styles.textOption}>{props.name} {props.lastName}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.touchableOption} onPress={() => navigation.navigate(Routes.CreateUser)}>
        <Text style={styles.textOption}>+ Crear Usuario</Text>
      </TouchableOpacity>
      {users ?
        <FlatList
          data={users}
          renderItem={({ item }) => <Item props={item} />}
          keyExtractor={item => item.id}
        /> : null}
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

export default Users;