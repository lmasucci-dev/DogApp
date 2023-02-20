import React from 'react'
import { FlatList, Text, TouchableOpacity, View, StyleSheet } from 'react-native'
import { SearchBar } from 'react-native-elements';


const MOCK_PRODUCTOS = [
  {product: 'Dog selection adulto x21kg'},
  {product: 'Pacha adulto x22kg'},
];

// const ListHeaderComponent = {
//   return (
//     <SearchBar/>
//   );
// }

const renderItem = ({index, item}: any) => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderRadius: 6,
        margin: 4
      }}>
      <View style={{justifyContent: 'center'}}>
        <Text style={{padding: 5, fontSize: 14, fontWeight: '500'}}>{item.product}</Text>
      </View>
      <TouchableOpacity style={{justifyContent: 'center', alignItems:'center', backgroundColor: 'blue', width: 25, height: 25, margin: 5,  borderRadius: 6}}>
        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const Home = () => {
    return (
      <View style={styles.container}>
      <Text>asd</Text>
      <FlatList
        data={MOCK_PRODUCTOS}
        renderItem={renderItem}
        keyExtractor={item => item.product}
        // ListHeaderComponent={ListHeaderComponent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    paddingHorizontal: 18,
    flex: 1,
  },
});

export default Home;