import {View, Text, StyleSheet, Button, FlatList} from 'react-native';

export const Productos = ({navigation}) => {
    // Lista de productos de ejemplo
    const productos = [
        {id: '1', nombre: 'Producto 1'},
        {id: '2', nombre: 'Producto 2'},
        {id: '3', nombre: 'Producto 3'},
        // Agrega más productos aquí
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>PRODUCTOS</Text>
            <FlatList
                data={productos}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                    <View style={styles.itemContainer}>
                        <Text style={styles.itemNombre}>{item.nombre}</Text>
                        {/* Puedes agregar más detalles del producto aquí */}
                    </View>
                )}
            />
            <Button
                title='IR A HOME'
                onPress={() => {
                    navigation.navigate('HomeNav');
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        padding: 10,
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    itemContainer: {
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        width: '100%',
    },
    itemNombre: {
        fontSize: 18,
    },
});
