import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, TextInput, Button, Alert} from 'react-native';
import {useState} from 'react'

let personas = [
  { nombre: 'Thor', apellido: 'Thillas', cedula: '1234567890' },
  { nombre: 'Amber', apellido: 'Flores', cedula: '1234567891' },
  { nombre: 'Peter', apellido: 'Parker', cedula: '1234567892' },
];

//esNuevo indica si se esta creando una nueva persona o se esta modificando una existente
let esNuevo=true;
//esta variable almacena el indice del arreglo del elemento seleccionado para edicion
let indiceSelecionado=-1;

export default function App() {
  const [txtCedula,setTxtCedula]=useState();
  const [txtNombre,setTxtNombre]=useState();
  const [txtApellido,setTxtApellido]=useState();
  const [numElementos,setNumElementos] = useState(personas.length);

  let ItemPersona = (props) => {
    return (
      <View style={styles.itemPersona}>
        <View style={styles.itemIndice}>
          <Text>{props.indice}</Text>
        </View>
        <View style={styles.itemContenido}>
          <Text style={styles.textoPrincipal}> {props.persona.nombre} {props.persona.apellido} </Text>
          <Text style={styles.textoSecundario}>{props.persona.cedula} </Text>
        </View>
        <View style={styles.itemBotones}>
          <Button 
            title=' E '
            color='yellowgreen'
            onPress={()=>{
              setTxtCedula(props.persona.cedula);
              setTxtNombre(props.persona.nombre);
              setTxtApellido(props.persona.apellido);
              esNuevo=false;
              indiceSelecionado=props.indice;
            }}
          />
          <Button 
            title=' X '
            color='lightcoral'
            onPress={()=>{
              indiceSelecionado=props.indice;
              personas.splice(indiceSelecionado,1);
              setNumElementos(personas.length);
            }}
          />
        </View>
      </View>
    );
  }

  let limpiar =()=>{
    setTxtCedula(null);
    setTxtNombre(null);
    setTxtApellido(null);
    esNuevo=true;
  }

  let existePersona=()=>{
    for(let i=0; i<personas.length; i++){
      if(personas[i].cedula==txtCedula){
        return true;
      }
    }
    return false;
  }

  let guardarPersona=()=>{
    if(esNuevo){
      if(existePersona()){
        Alert.alert("INFO","Ya existe una persona con la cedula " + txtCedula);
      } else{
        let persona = {nombre: txtNombre, apellido: txtApellido, cedula: txtCedula};
        personas.push(persona);
      }
    }else{
      personas[indiceSelecionado].nombre=txtNombre;
      personas[indiceSelecionado].apellido=txtApellido;
    }
    limpiar();
    setNumElementos(personas.length);
  }

  return (
    <View style={styles.container}>
      <View style={styles.areaCabecera}>
        <Text>PERSONAS</Text>
        <TextInput
          style={styles.txt}
          value={txtCedula}
          placeholder='Ingrese su cédula'
          onChangeText={setTxtCedula}
          keyboardType='numeric'
          editable={esNuevo}
        />
        <TextInput
          style={styles.txt}
          value={txtNombre}
          placeholder='Ingrese su nombre'
          onChangeText={setTxtNombre}
        />
        <TextInput
          style={styles.txt}
          value={txtApellido}
          placeholder='Ingrese su apellido'
          onChangeText={setTxtApellido}
        />
        <View style={styles.areaBotones}>
          <Button
            title='Guardar'
            onPress={guardarPersona}
            />
          <Button
            title='Nuevo'
            onPress={limpiar}
            />
        </View>
        <Text>Elementos: {numElementos}</Text>
      </View>
      <View style={styles.areaContenido} >
        <FlatList
          style={styles.lista}
          data={personas}
          renderItem={(elemento) => {
            return <ItemPersona indice={elemento.index} persona={elemento.item}/>
          }}
          keyExtractor={(item) => {
            return item.cedula;
          }}
        />
      </View>
      <View style={styles.areaPie}>
        <Text>Autor: Jonathan Tipán</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: 'lightblue',
    flexDirection: 'column', // eje principal (VERTICAL)
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    paddingTop: 50,
    paddingHorizontal: 15
  },
  lista: {
    //backgroundColor: 'lightpink'
  },
  itemPersona: {
    backgroundColor: 'lemonchiffon',
    marginBottom: 10,
    padding: 10,
    flexDirection: 'row'
  },
  textoPrincipal: {
    fontSize: 25
  },
  textoSecundario: {
    fontStyle: 'italic',
    fontSize: 15
  },
  areaCabecera: {
    flex: 4,
    //backgroundColor: 'greenyellow',
    justifyContent:'center'
  },
  areaContenido: {
    flex: 6,
    //backgroundColor: 'coral'
  },
  areaPie: {
    flex: 1,
    //backgroundColor: 'aquamarine',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  itemIndice: {
    flex: 1,
    //backgroundColor:'plum',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemContenido: {
    flex: 6,
    //backgroundColor:'powderblue',
    paddingLeft: 5
  },
  itemBotones: {
    flex: 2,
    //backgroundColor:'powderblue',
    paddingLeft: 5,
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems:'center'
  },
  txt:{
    borderWidth:1,
    paddingTop:3,
    paddingHorizontal:5,
    marginBottom:5
  },
  areaBotones:{
    flexDirection:'row',
    justifyContent:'space-evenly',
    padding:5
  }
});
