import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from "expo-router";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

// 1. Definimos los datos en un solo lugar
const CATEGORIES = [
    { id: '1', name: 'Popular', icon: 'star-outline', path: '/(tabs)/home' },
    { id: '2', name: 'Sillas', icon: 'chair-rolling', path: '/(tabs)/home' },
    { id: '3', name: 'Mesas', icon: 'table-furniture', path: '/(tabs)/home' },
    { id: '4', name: 'Lámparas', icon: 'lamp-outline', path: '/(tabs)/home' },
    { id: '5', name: 'Camas', icon: 'bed-outline', path: '/(tabs)/home' },
];

export default function Carrousel() {
    const router = useRouter();

    return (
        <View style={styles.wrapper}>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.containerCarrousel}
            >
                {/* 2. Hacemos el bucle (map) */}
                {CATEGORIES.map((category) => (
                    <View key={category.id} style={styles.containerButton}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => router.push(category.path as any)}
                        >
                            <MaterialCommunityIcons
                                name={category.icon as any}
                                size={28}
                                color="#242424"
                            />
                        </TouchableOpacity>
                        <Text style={styles.text}>{category.name}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        marginVertical: 15,
    },
    containerCarrousel: {
        paddingLeft: 24, // Para que el primer item no esté pegado al borde
        paddingRight: 10,
        gap: 25, // Espacio entre cada botón de categoría
    },
    containerButton: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        width: 60,
        height: 60,
        backgroundColor: '#F5F5F5', // Gris muy claro (estilo Figma)
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 8,
        // Sutil sombra
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 5,
        elevation: 2,
    },
    text: {
        fontSize: 14,
        fontWeight: '500',
        color: '#909090', // Color suave para que no compita con el título principal
    },
});