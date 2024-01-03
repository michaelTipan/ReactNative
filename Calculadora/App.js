import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import {useState} from 'react'

export default function App() {
  const[valor1,setValor1] = useState("Ingrese valor 1");
  const[valor2,setValor2]=useState("Ingrese valor 2");
  const[resultado,setResultado] = useState("");
  return (
    <View style={styles.container}>
      <Text>CALCULADORA</Text>
      <Text>Resultado: {resultado}</Text>
      <TextInput
        style={styles.cajaTexto}
        value={valor1}
        onChangeText={(txt)=>{
          setValor1(txt);
        }}
      />
      <TextInput
        style={styles.cajaTexto}
        value={valor2}
        onChangeText={(txt)=>{
          setValor2(txt);
        }}
      />
      <Button
        title="SUMAR"
        onPress={()=>{
          let resultado = parseInt(valor1)+parseInt(valor2);
          setResultado(resultado);
        }}
      />
      <Button
        title="RESTAR"
        onPress={()=>{
          let resultado = parseInt(valor1)-parseInt(valor2);
          setResultado(resultado);
        }}
      />
      <Button
        title="MULTIPLICAR"
        onPress={()=>{
          let resultado = parseInt(valor1)*parseInt(valor2);
          setResultado(resultado);
        }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cajaTexto:{
    borderColor: "black",
    borderWidth: 1,
    paddingTop:5,
    paddingHorizontal:10
  }
});

