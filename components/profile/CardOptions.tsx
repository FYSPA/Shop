import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

// 1. Definimos la lista de opciones en un objeto
const PROFILE_OPTIONS = [
    {
        id: '1',
        title: 'Mis Pedidos',
        subtitle: 'Revisa el estado de tus compras',
        icon: 'package-variant-closed'
    },
    {
        id: '2',
        title: 'Settings',
        subtitle: 'Manage your account',
        icon: 'cog-outline'
    },
    {
        id: '3',
        title: 'Direcciones',
        subtitle: 'Gestiona tus lugares de entrega',
        icon: 'map-marker-outline'
    },
    {
        id: '4',
        title: 'Métodos de Pago',
        subtitle: 'Tarjetas y facturación',
        icon: 'credit-card-outline'
    },
    {
        id: '5',
        title: 'Ayuda',
        subtitle: 'Preguntas frecuentes y soporte',
        icon: 'help-circle-outline'
    },
];

export default function CardOptions() {
    return (
        <View style={styles.container}>
            {PROFILE_OPTIONS.map((item) => (
                <TouchableOpacity key={item.id} style={styles.option} activeOpacity={0.7}>
                    <View style={styles.leftContent}>
                        <View style={styles.iconContainer}>
                            <MaterialCommunityIcons name={item.icon as any} size={24} color="#242424" />
                        </View>

                        <View>
                            <Text style={styles.text}>{item.title}</Text>
                            <Text style={styles.subtitle}>{item.subtitle}</Text>
                        </View>
                    </View>

                    <MaterialCommunityIcons name="chevron-right" size={28} color="#909090" />
                </TouchableOpacity>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        gap: 15, // Espacio entre cada tarjeta de opción
    },
    option: {
        padding: 25,
        borderRadius: 15,
        backgroundColor: '#FFFFFF', // Blanco puro
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // Sombras suaves para estilo premium
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 2,
    },
    leftContent: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
    },
    iconContainer: {
        width: 45,
        height: 45,
        backgroundColor: '#F5F5F5',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 16, // Bajamos un poco el tamaño para que no se vea tosco
        color: '#242424',
        fontWeight: '600',
    },
    subtitle: {
        fontSize: 13,
        color: '#909090',
        fontWeight: '400',
        marginTop: 2,
    },
});