import { Image, StyleSheet, Text, View } from "react-native";

export default function CardUser() {
    return (
        <View style={styles.container}>
            <View style={styles.containerUser}>
                <View style={styles.containerImage}>
                    <Image source={require('../../assets/images/bruno.png')} style={styles.image} />
                </View>
                <View style={styles.containerText}>
                    <Text style={styles.name}>Bruno</Text>
                    <Text style={styles.email}>[EMAIL_ADDRESS]</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    containerUser: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    containerImage: {
        width: 110,
        height: 110,
        borderRadius: 30,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    containerText: {
        minHeight: 50,
        justifyContent: 'center',
        paddingLeft: 10,
        width: 200,
    },
    name: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#242424',
    },
    email: {
        fontSize: 18,
        color: '#909090',
    },
});