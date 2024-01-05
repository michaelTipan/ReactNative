import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container1}>
      <View style={styles.container2}>
        <Button title='X'/>
        <Button title='Y'/>
        <Button title='Z'/>
      </View>
      <View style={styles.container3}>
        <View style={styles.container5}>
          <View style={styles.container7}>
          <Button title='BOTON 1'/>
          <Button title='BOTON 2'/>
          </View>
          <View style={styles.container8}>
            <Button title='OPERACION 1'/>
            <Button title='OPERACION 2'/>
            <Button title='OPERACION 3'/>
          </View>
        </View>
        <View style={styles.container6}>
          <Button title='ACCION 1'/>
          <Button title='ACCION 2'/>
        </View>
      </View>
      <View style={styles.container4}>
        <Button title='BOTON FINAL'/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: 'gray',
    flexDirection: 'column'
  },
  container2: {
    flex: 1,
    backgroundColor: 'blue',
    flexDirection: 'row',
    justifyContent:'flex-end',
    alignItems: 'center'
  },
  container3: {
    flex: 6,
    backgroundColor: 'green',
  },
  container4: {
    flex: 1,
    backgroundColor: 'yellow',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  container5: {
    flex: 4,
    backgroundColor: 'white',
    flexDirection: 'row'
  },
  container6: {
    flex: 1,
    backgroundColor: 'pink',
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  container7: {
    flex: 1,
    backgroundColor: 'green',
    flexDirection:'column',
    justifyContent: 'space-evenly',
    alignItems: 'stretch'
  },
  container8: {
    flex: 1,
    backgroundColor: 'purple',
    flexDirection: 'column',
    justifyContent:'center',
    alignItems: 'flex-start'
  },
});
