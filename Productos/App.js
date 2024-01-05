import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, TextInput, Button, Alert, ScrollView } from 'react-native';
import { useState } from 'react';

let productos = [
  { id: 101, nombre: "Arroz", categoria: "Granos", precioCompra: 1.55, precioVenta: 1.86 },
  { id: 102, nombre: "Platanos", categoria: "Frutas", precioCompra: 0.80, precioVenta: 0.96 },
  // { nombre: "Leche", categoria: "Lacteos", precioCompra: 1.0, precioVenta: 1.5, id: 103 },
  // { nombre: "Atun", categoria: "Conservas", precioCompra: 2.5, precioVenta: 3.0, id: 104 },
  // { nombre: "Pan integral", categoria: "Panaderia", precioCompra: 1.2, precioVenta: 1.8, id: 105 },
];

// esNuevo indica si se está creando un nuevo producto o se está modificando uno existente
let esNuevo = true;
// esta variable almacena el índice del arreglo del elemento seleccionado para edición
let indiceSeleccionado = -1;

export default function App() {
  const [txtCodigo, setTxtCodigo] = useState();
  const [txtNombre, setTxtNombre] = useState();
  const [txtCategoria, setTxtCategoria] = useState();
  const [txtPrecioCompra, setTxtPrecioCompra] = useState();
  const [txtPrecioVenta, setTxtPrecioVenta] = useState();
  
  const [numElementos, setNumElementos] = useState(productos.length);

  let ItemProducto = (props) => {
    return (
      <View style={styles.itemProducto}>
        <View style={styles.itemIndice}>
          <Text>{props.producto.id}</Text>
        </View>
        <View style={styles.itemContenido}>
          <Text style={styles.textoPrincipal}>{props.producto.nombre}</Text>
          <Text style={styles.textoSecundario}>{props.producto.categoria}</Text>
        </View>
        <View style={styles.itemPrecio}>
          <Text style={styles.textoPrecio}>{props.producto.precioVenta}</Text>
        </View>
        <View style={styles.itemBotones}>
          <Button
            title=' E '
            color='yellowgreen'
            onPress={() => {
              setTxtCodigo(props.producto.id.toString());
              setTxtNombre(props.producto.nombre);
              setTxtCategoria(props.producto.categoria);
              setTxtPrecioCompra(props.producto.precioCompra.toString());
              setTxtPrecioVenta(props.producto.precioVenta.toString());
              esNuevo = false;
              indiceSeleccionado = props.indice; // Aquí cambiamos a props.indice
            }}
          />
          <Button
            title=' X '
            color='lightcoral'
            onPress={() => {
              indiceSeleccionado = props.indice;
              productos.splice(indiceSeleccionado, 1);
              setNumElementos(productos.length);
            }}
          />
        </View>
      </View>
    );
  }

  let limpiar = () => {
    setTxtCodigo(null);
    setTxtNombre(null);
    setTxtCategoria(null);
    setTxtPrecioCompra(null);
    setTxtPrecioVenta(null);
    esNuevo = true;
  }

  let existeProducto=()=>{
    for(let i=0; i<productos.length; i++){
      if(productos[i].id==txtCodigo){ 
        return true;
      }
    }
    return false;
  }

  let guardarProducto = () => {

    if (!txtCodigo || !txtNombre || !txtCategoria || !txtPrecioCompra) {
      Alert.alert("Advertencia", "Por favor, complete todos los campos.");
      return;
    }

    if (esNuevo) {
      if(existeProducto()){
        Alert.alert("INFO","Ya existe un producto con el id " + txtCodigo);
      } else{
        let producto = {
          id: txtCodigo,
          nombre: txtNombre,
          categoria: txtCategoria,
          precioCompra: parseFloat(txtPrecioCompra).toFixed(2),
          precioVenta: (parseFloat(txtPrecioCompra)+(parseFloat(txtPrecioCompra)*0.2)).toFixed(2),
        };
        productos.push(producto);
      }
    } else {
      productos[indiceSeleccionado].nombre = txtNombre;
      productos[indiceSeleccionado].categoria = txtCategoria;
      productos[indiceSeleccionado].precioCompra = parseFloat(txtPrecioCompra).toFixed(2);
      productos[indiceSeleccionado].precioVenta = (parseFloat(txtPrecioCompra)+(parseFloat(txtPrecioCompra)*0.2)).toFixed(2);
    }
    setNumElementos(productos.length);
    limpiar();
    console.log(productos);
  }

  return (
    <View style={styles.container}>
      <ScrollView>

      <View style={styles.areaCabecera}>
        <Text style={styles.titulo}>PRODUCTOS</Text>
        <TextInput
          style={styles.txt}
          value={txtCodigo}
          placeholder='CODIGO'
          onChangeText={setTxtCodigo}
          keyboardType='numeric'
          editable={esNuevo}
        />
        <TextInput
          style={styles.txt}
          value={txtNombre}
          placeholder='NOMBRE'
          onChangeText={setTxtNombre}
        />
        <TextInput
          style={styles.txt}
          value={txtCategoria}
          placeholder='CATEGORIA'
          onChangeText={setTxtCategoria}
        />
        <TextInput
          style={styles.txt}
          value={txtPrecioCompra}
          placeholder='PRECIO DE COMPRA'
          onChangeText={(text) => {
            setTxtPrecioCompra(text);
            // Actualizar el precio de venta automáticamente
            const precioVentaCalculado = (parseFloat(text) + (parseFloat(text) * 0.2)).toFixed(2);
            setTxtPrecioVenta(precioVentaCalculado);
          }}
          keyboardType='numeric'
        />
        <TextInput
          style={styles.txt}
          value={(txtPrecioVenta)}
          onChangeText={setTxtPrecioVenta}
          placeholder='PRECIO DE VENTA'
          editable={false}
        />
        <View style={styles.areaBotones}>
          <Button
            title='Guardar'
            onPress={guardarProducto}
          />
          <Button
            title='Nuevo'
            onPress={limpiar}
          />
        <Text>Productos: {numElementos}</Text>
        </View>
      </View>
      </ScrollView>
      <View style={styles.areaContenido}>
        <FlatList
          style={styles.lista}
          data={productos}
          renderItem={(elemento) => {
            return <ItemProducto indice={elemento.index} producto={elemento.item} />
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
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    paddingTop: 70,
    paddingHorizontal: 15,
  },
  titulo:{
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft:120,
    marginBottom: 10
  },
  itemProducto: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'papayawhip',
    marginTop: 10,
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  textoPrincipal: {
    fontSize: 15,
  },
  textoSecundario: {
    fontSize: 12,
    fontStyle:'italic'
  },
  textoPrecio: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  areaCabecera: {
    flex: 4,
    justifyContent: 'center',
  },
  areaContenido: {
    flex: 6,
  },
  areaPie: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
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
  itemPrecio: {
    flex: 3,
    //backgroundColor:'plum',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight:10
  },
  itemBotones: {
    flex: 2.65,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  txt: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    paddingHorizontal: 5,
    marginBottom: 8,
  },
  areaBotones: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: 5,
  },
});