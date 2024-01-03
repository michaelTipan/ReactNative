import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [valorDolares, setValorDolares] = useState("Ingrese valor en dólares");
  const [resultado, setResultado] = useState("");

  return (
    <View style={styles.container}>
      <Text>CALCULADORA DE MONEDAS</Text>
      <Text>Resultado conversion: </Text>
      <Text>{resultado}</Text>
      <TextInput
        style={styles.cajaTexto}
        value={valorDolares}
        onChangeText={(txt)=>{
          setValorDolares(txt);
        }}
      />
      <Button 
      title="PESOS MEXICANOS" 
      onPress={() => {
        let resultado = parseFloat(valorDolares) * 17.02; 
        setResultado(resultado);
      }} 
      />
      <Button 
      title="PESOS COLOMBIANOS" 
      onPress={() => {
        let resultado = parseFloat(valorDolares) * 3898.50; 
        setResultado(resultado);
      }}
      />
      <Button 
      title="EUROS" 
      onPress={() => {
        let resultado = parseFloat(valorDolares) * 0.92; 
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
  cajaTexto: {
    borderColor: 'black',
    borderWidth: 1,
    paddingTop: 5,
    paddingHorizontal: 10,
  },
});
