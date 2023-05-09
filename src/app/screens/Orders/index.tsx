import React, { useEffect } from 'react'
import { Text, TouchableOpacity, View, StyleSheet, FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Routes from '../../../constants/constants';
import { database } from '../../../config/firebaseConfig';
import { collection, addDoc, query, getDocs } from 'firebase/firestore';
import { MOCK_ALL_PRODUCTOS } from './mockAllProducts';

const MOCK_ORDERS = [
  {
    idOrder: 'abc',
    direccion: 'Winter 1094',
    localidad: 'La union',
    pago: true,
    total: 5500,
    productsOrder: [
      {
        cantidad: 1,
        idProducto: 'ZQF4yhRWLIUEbRnTbrrm',
        descripcionProducto: 'Maintenance Adulto Criadores x22kg',
        costo: 4500,
        precio: 5500,
      }
    ]
  },
  {
    idOrder: 'abcd',
    direccion: 'Moreno 1024',
    localidad: 'La union',
    pago: false,
    total: 7700,
    productsOrder: [
      {
        cantidad: 1,
        idProducto: 'ZQF4yhRWLIUEbRnTbrrm',
        descripcionProducto: 'Maintenance Adulto Criadores x22kg',
        costo: 4500,
        precio: 5500,
      },
      {
        cantidad: 1,
        idProducto: 'ZQF4yhRWLIUEbRnTbrrN',
        descripcionProducto: 'Maintenance cachorro Criadores x22kg',
        costo: 2000,
        precio: 2200,
      }
    ]
  },
]

const Orders = () => {
  const navigation = useNavigation();

  // Uncomment for masive insert in db
  // const addProductos = async() => {
  //   MOCK_ALL_PRODUCTOS.forEach(async e => {
  //     await addDoc(collection(database, 'products'), e)
  //     console.log('ok', e)
  //   });
  // }

  // useEffect(() => {
  //   console.log('uef')
  //   addProductos();
  // }, []);

  const Item = ({props}) => {
    return (
      <View style={styles.itemContainer}>
        <View style={styles.containerTitle}>
          <Text style={styles.textTitle}>{props.item.direccion} | {props.item.localidad}</Text>
        </View>
        <View style={styles.containerProducts}>
          {props.item.productsOrder.map(order => {
            return <Text style={styles.text}>{order.cantidad} {order.descripcionProducto}</Text>
          })}
        </View>
        <View style={styles.containerFooter}>
          <Text style={styles.text}>{props.item.pago ? `PAGO` : `Total: ${props.item.total}`}</Text>
        </View>
      </View>
    )
  }


  return (
    <View style={styles.container}>
      {MOCK_ORDERS ?
        <FlatList
          data={MOCK_ORDERS}
          renderItem={(order) => <Item props={order} />}
          keyExtractor={item => item.idOrder}
        /> : null}
      <TouchableOpacity style={styles.addOrderTouchable} onPress={() => navigation.navigate(Routes.AddOrder)}>
        <Text style={styles.addOrderText}>+ Agregar Pedido</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  itemContainer: {
    backgroundColor: '#2C2C2E',
    borderRadius: 12,
    margin: 10
  },
  containerTitle: { justifyContent: 'center', borderBottomWidth: 0.4, borderColor: 'white', paddingHorizontal: 5, paddingTop: 5 },
  containerProducts: { padding: 10 },
  containerFooter: { borderWidth: 0.4, borderTopColor: 'white', padding: 5 },
  textTitle: { color: '#FFFFFF', fontWeight: 'bold', fontSize: 20, paddingBottom: 10 },
  text: { color: '#FFFFFF', fontWeight: '400', fontSize: 16 },
  addOrderText: { color: '#FFFFFF', fontWeight: '600', fontSize: 18 },
  addOrderTouchable: { justifyContent: 'center', alignItems: 'center', backgroundColor: '#2C2C2E', height: 45, margin: 10, borderRadius: 12, marginBottom: 40 }
});

export default Orders;