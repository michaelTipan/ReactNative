import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';

let personas = [
  { nombre: 'Thor', apellido: 'Thillas', cedula: '1234567890' },
  { nombre: 'Amber', apellido: 'Flores', cedula: '1234567891' },
  { nombre: 'Peter', apellido: 'Parker', cedula: '1234567892' },
];

export default function App() {
  return (
    <View style={styles.container}>
      <Text>PERSONAS</Text>
      <FlatList
        style={styles.lista}
        data={personas}
        renderItem={(elemento) => {
          return <View style={styles.itemPersona}>
            <Text style={styles.textoPrincipal}> {elemento.index} {elemento.item.nombre} {elemento.item.apellido} </Text>
            <Text style={styles.textoSecundario}>{elemento.item.cedula} </Text>
          </View>
        }}
        keyExtractor={(item)=>{
          return item.cedula;
        }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    flexDirection: 'column', // eje principal (VERTICAL)
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    paddingTop: 50,
    paddingHorizontal: 15
  },
  lista:{
    //backgroundColor: 'lightpink'
  },
  itemPersona:{
    backgroundColor: 'lemonchiffon',
    marginBottom:10,
    padding: 10
  },
  textoPrincipal:{
    fontSize: 30
  },
  textoSecundario:{
    fontStyle: 'italic',
    fontSize: 16
  }
});
