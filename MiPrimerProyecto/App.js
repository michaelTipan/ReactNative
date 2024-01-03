import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

export default function App() {

  const despedirse=()=>{
    Alert.alert("MENSAJE","Adios");
  }

  return (
    <View style={styles.container}>
      <Text>Bienvenido al curso de ReactNative !</Text>
      <StatusBar style="auto" />
      <Button
        title="HOLA"
        //Funcion que no recibe parametros
        onPress={()=>{
          Alert.alert("MENSAJE","Hola desde el boton");
        }}
      />
      <Button
        title="ADIOS"
        //Funcion que no recibe parametros
        onPress={
          despedirse
        }
      />
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
});
