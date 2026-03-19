import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import FavoriteCard from "../../components/favorite/FavoriteCard";
import CustomHeader from "../../components/ui/CustomHeader";

export default function FavoriteScreen() {
    const router = useRouter();

    const favorites: any[] = [];

    const EmptyState = () => (
        <View style={styles.emptyContainer}>
            <MaterialCommunityIcons name="bookmark-outline" size={80} color="#E0E0E0" />
            <Text style={styles.emptyTitle}>No hay favoritos</Text>
            <Text style={styles.emptySubtitle}>
                Parece que aún no has guardado ningún mueble en tu lista.
            </Text>
            <TouchableOpacity
                style={styles.goBtn}
                onPress={() => router.push('/(tabs)/home')}
            >
                <Text style={styles.goBtnText}>Explorar Tienda</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.container}>
            <CustomHeader
                title="Favoritos"
                leftIcon="chevron-left"
                rightIcon="cart-outline"
                showBadge={true}
                onLeftPress={() => router.back()}
                onRightPress={() => router.push('/(shop)/cart')}
            />
            <View style={styles.line} />

            <FlatList
                data={favorites}
                renderItem={({ item }) => (
                    <FavoriteCard
                        product={item}
                        onPress={() => router.push({
                            pathname: "/(shop)/detail",
                            params: { productData: JSON.stringify(item) }
                        })}
                        onRemove={() => console.log("Eliminar", item.id)}
                    />
                )}
                keyExtractor={(item: any) => item.id.toString()}
                numColumns={2}
                columnWrapperStyle={styles.row}
                contentContainerStyle={styles.list}
                ListEmptyComponent={EmptyState}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#FFFFFF' },
    header: {
        paddingHorizontal: 20,
        paddingTop: 60,
        paddingBottom: 20,
        alignItems: 'center',
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#242424',
    },
    list: {
        paddingHorizontal: 15,
        paddingBottom: 100, // Espacio para que el menú de abajo no tape el último item
        flexGrow: 1,
    },
    row: {
        justifyContent: "space-between",
    },
    // Estilos del estado vacío
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 40,
        marginTop: 100,
    },
    emptyTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#242424',
        marginTop: 20,
    },
    emptySubtitle: {
        fontSize: 14,
        color: '#909090',
        textAlign: 'center',
        marginTop: 10,
        lineHeight: 20,
    },
    goBtn: {
        backgroundColor: '#242424',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 12,
        marginTop: 30,
    },
    goBtnText: {
        color: 'white',
        fontWeight: '600',
        fontSize: 16,
    },

    line: {
        width: '100%',
        backgroundColor: '#E0E0E0',
        height: 1,
        marginTop: 10,
    }
});