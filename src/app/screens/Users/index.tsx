import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import { database } from '../../../config/firebaseConfig'
import { collection, addDoc, query, getDocs } from 'firebase/firestore'

const Users = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const collectionRef = await collection(database, 'users')
    const users = await getDocs(collectionRef)
    // setUsers(users)
    console.log(users)
  }

  const addUser = async () => {
    await addDoc(collection(database, 'users'), { user: 'Benicio', password: '1234'})
  }

  useEffect(() => {
    addUser();
    getUsers();
  }, [])
  
    return (
      <View>
        <Text>{users}</Text>
      </View>
    )
}

export default Users;