import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const { width } = Dimensions.get('window');
// Ajustamos el ancho para que el gap sea perfecto
const cardWidth = (width / 2) - 24;

export default function FavoriteCard({ product, onPress, onRemove }: any) {
    return (
        <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.9}>
            {/* Botón para eliminar de favoritos */}
            <TouchableOpacity style={styles.removeButton} onPress={onRemove}>
                <MaterialCommunityIcons name="close-circle" size={22} color="#242424" />
            </TouchableOpacity>

            <View style={styles.imageContainer}>
                <Image
                    source={{ uri: product.image }}
                    style={styles.image}
                    resizeMode="contain"
                />
            </View>

            <View style={styles.info}>
                <Text style={styles.title} numberOfLines={1}>{product.title}</Text>
                <View style={styles.priceRow}>
                    <Text style={styles.price}>$ {product.price}</Text>

                    {/* Botón rápido de agregar al carrito */}
                    <TouchableOpacity style={styles.addToCartBtn}>
                        <MaterialCommunityIcons name="shopping-outline" size={18} color="white" />
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        width: cardWidth,
        borderRadius: 20,
        marginBottom: 20,
        // Sombras más profundas pero suaves
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.08,
        shadowRadius: 12,
        elevation: 5,
        position: 'relative',
    },
    removeButton: {
        position: 'absolute',
        top: 8,
        right: 8,
        zIndex: 10,
    },
    imageContainer: {
        backgroundColor: '#F0F0F0',
        borderRadius: 15,
        margin: 8,
        height: 140,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '80%',
        height: '80%',
    },
    info: {
        paddingHorizontal: 12,
        paddingBottom: 12,
    },
    title: {
        fontSize: 14,
        fontWeight: '500',
        color: '#606060',
        marginBottom: 4
    },
    priceRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 4,
    },
    price: {
        fontSize: 16,
        color: '#242424',
        fontWeight: 'bold'
    },
    addToCartBtn: {
        backgroundColor: '#242424',
        padding: 6,
        borderRadius: 8,
    }
});