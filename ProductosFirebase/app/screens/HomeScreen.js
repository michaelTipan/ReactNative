import { View, Text, StyleSheet, Button } from 'react-native'

export const Home = ({ navigation }) => {
    return <View style={styles.container}>
        <View>
            <Text style={styles.titulo}>HOME</Text>
        </View>
        <View style={styles.ContenedorBotones}>
            <View style={styles.botones}>
                <Button
                    title='CONTACTOS'
                    onPress={() => {
                        navigation.navigate('ContactsNav');
                    }}
                />
            </View>
            <View style={styles.botones}>
                <Button
                    title='PRODUCTOS'
                    onPress={() => {
                        navigation.navigate('ProductosNav');
                    }}
                />
            </View>
        </View>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    ContenedorBotones: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    botones: {
        marginVertical:5,
        padding:10,
        marginHorizontal:20
    },
    titulo: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
});
