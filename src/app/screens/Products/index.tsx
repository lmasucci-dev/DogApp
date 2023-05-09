import React, { useEffect, useState } from 'react'
import { Text, View, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { database } from '../../../config/firebaseConfig'
import { collection, addDoc, query, getDocs, orderBy, limit } from 'firebase/firestore'
import { Product } from '../../../interfaces/product.interfaces';

const Products = () => {
  const navigation = useNavigation();
  const [products, setProducts] = useState<Product[]>();
  const productsRef = collection(database, "products");

  const getProducts = async () => {
    const q = query(productsRef, orderBy('descripcionProducto'), limit(10))
    const querySnapshot = await getDocs(q);
    const dataUsers: any[] = [];
    querySnapshot.forEach(doc => {
      const { descripcionProducto, costo, ganancia, precio, proveedor } = doc?.data();
      const id = doc?.id
      dataUsers.push({ id, descripcionProducto, costo, ganancia, precio, proveedor })
    })
    setProducts(dataUsers);
  }

  useEffect(() => {
    if (!products) getProducts();
    console.log(products?.length)
  }, [])

  const Item = ({ props }) => (
    <View style={styles.itemContainer}>
      <View style={styles.containerTitle}>
        <Text style={[styles.textTitle, styles.alignTextCenter]}>{props.descripcionProducto}</Text>
      </View>
      <View style={styles.containerProducts}>
        <Text style={styles.text}>Precio: ${props.precio}</Text>
        <Text style={styles.text}>Ganancia: ${props.ganancia}</Text>
        <Text style={styles.text}>Costo: ${props.costo}</Text>
        <Text style={styles.text}>Proveedor: {props.proveedor}</Text>
      </View>
      <View style={styles.containerFooter}>
        <TouchableOpacity onPress={() => undefined}>
          <Text style={[styles.text, styles.alignTextCenter]}>Modificar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {products ?
        <FlatList
          data={products}
          renderItem={({ item }) => <Item props={item} />}
          keyExtractor={item => item.id}
        /> : null}
      <TouchableOpacity style={styles.addOrderTouchable} onPress={() => navigation.navigate(Routes.AddOrder)}>
        <Text style={styles.addOrderText}>+ Agregar Producto</Text>
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
  containerFooter: { borderWidth: 0.4, borderTopColor: 'white', padding: 5, backgroundColor: 'blue' },
  textTitle: { color: '#FFFFFF', fontWeight: 'bold', fontSize: 16, paddingBottom: 10 },
  text: { color: '#FFFFFF', fontWeight: '400', fontSize: 16 },
  alignTextCenter: { textAlign: 'center' },
  addOrderText: { color: '#FFFFFF', fontWeight: '600', fontSize: 18 },
  addOrderTouchable: { justifyContent: 'center', alignItems: 'center', backgroundColor: '#2C2C2E', height: 45, margin: 10, borderRadius: 12, marginBottom: 40 }
});

export default Products;