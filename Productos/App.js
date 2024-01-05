import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
let productos = [
  {nombre:"Arroz", categoria:"Granos", precioCompra:1.5, precioVenta:2.0, id: 101},
  {nombre:"Platanos", categoria:"Frutas", precioCompra:0.8, precioVenta:1.2, id: 102},
  {nombre:"Leche", categoria:"Lacteos", precioCompra:1.0, precioVenta:1.5, id: 103},
  {nombre:"Atun", categoria:"Conservas", precioCompra:2.5, precioVenta:3.0, id: 104},
  {nombre:"Pan integral", categoria:"Panaderia", precioCompra:1.2, precioVenta:1.8, id: 105},
]

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>PRODUCTOS</Text>
      <FlatList 
        data={productos}
        renderItem={(elemento)=>{
          return <View style={styles.itemProducto}>
            <Text style={styles.textoPrincipal}>{elemento.item.nombre} ({elemento.item.categoria}) </Text>
            <Text style={styles.textoSecundario}>USD {elemento.item.precioVenta}</Text>

          </View>
        }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'stretch',
    paddingTop: 70,
    paddingHorizontal:15
  },
  itemProducto:{
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor:'lightgreen',
    marginTop: 10,
    padding:8
  },
  titulo:{
    fontSize:22,
    fontWeight:'bold',
    justifyContent: 'center',
    alignItems:'center',
    paddingLeft: 115
  },
  textoPrincipal:{
    fontSize: 18,
  },
  textoSecundario:{
    fontSize: 14,
    fontWeight: 'bold'
  }
});
