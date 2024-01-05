import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , TextInput, Button} from 'react-native';
import {useState} from 'react'

export default function App() {
  const [estatura, setEstatura] = useState();
  const [peso, setPeso] = useState();
  const [resultado, setResultado] = useState("");
  const [mensaje, setMensaje] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>CALCULADORA IMC</Text>
      <TextInput
        style={styles.caja}
        value={estatura}
        onChangeText={setEstatura}
        placeholder='Ingrese su estatura en centimetros'
      />      
      <TextInput
        style={styles.caja}
        value={peso}
        onChangeText={setPeso}
        placeholder='Ingrese su peso en kilogramos'
      />      
      <Button 
        title='CALCULAR'
        onPress={()=>{
          let estaturaEnMetros = parseFloat(estatura)/100;
          let resultado = parseFloat(peso)/(estaturaEnMetros*estaturaEnMetros);
          setResultado(resultado.toFixed(2));

          if(resultado<18.5){
            setMensaje("Su peso es inferior al normal");
          } else if (resultado>=18.5 && resultado<25.0) {
            setMensaje("Su peso es normal");
          } else if (resultado>=25.0 && resultado<30.0) {
            setMensaje("Su peso es superior al normal");
          } else if (resultado>=30.0) {
            setMensaje("Tiene obesidad");
          }
        }}
      />
      <Text style={styles.titulo2}>Su IMC es: {resultado}</Text>
      <Text style={styles.titulo2}>{mensaje}</Text>


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column', //eje principal (Vertical)
    justifyContent: 'center', //vertical
    alignItems: 'stretch', // horizontal
    paddingHorizontal: 10
  },
  caja:{
    borderColor: 'gray',
    borderWidth: 1,
    paddingTop: 5,
    paddingHorizontal: 10,
    marginBottom: 10
  },
  titulo:{
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold'
  },
  titulo2:{
    fontSize: 16,
    marginTop: 20,
    fontWeight: 'bold',
    fontStyle: 'italic'
  }
});
