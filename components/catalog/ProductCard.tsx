// components/ProductCard.tsx
import React from 'react';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const { width } = Dimensions.get('window');
const cardWidth = (width / 2) - 20;

export default function ProductCard({ product, onPress }: any) {
    return (
        <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.9}>
            <View style={styles.imageContainer}>
                <Image
                    source={{ uri: product.image }}
                    style={styles.image}
                    resizeMode="contain"
                />
            </View>

            <View style={styles.info}>
                <Text style={styles.category}>{product.category}</Text>
                <Text style={styles.title} numberOfLines={1}>{product.title}</Text>
                <View style={styles.priceRow}>
                    <Text style={styles.price}>${product.price}</Text>
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
        marginBottom: 15,
        flex: 0.5,
        margin: 8,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 3,
    },
    imageContainer: {
        backgroundColor: '#f9f9f9',
        borderRadius: 15,
        padding: 10,
        marginBottom: 10,
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: 180,
    },
    info: {
        paddingHorizontal: 12,
        paddingVertical: 4,
    },
    category: {
        fontSize: 10,
        color: '#aaa',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        marginBottom: 4
    },
    title: {
        fontSize: 14,
        fontWeight: '600',
        color: '#333',
        marginBottom: 6
    },
    priceRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    price: {
        fontSize: 16,
        color: '#000',
        fontWeight: 'bold'
    },
});