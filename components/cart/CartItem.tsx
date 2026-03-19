import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface CartItemProps {
    item: any;
    onAdd: () => void;
    onRemove: () => void;
    onDelete: () => void;
}

export default function CartItem({ item, onAdd, onRemove, onDelete }: CartItemProps) {
    return (
        <View style={styles.container}>
            {/* Imagen del producto */}
            <Image source={{ uri: item.image }} style={styles.image} resizeMode="cover" />

            {/* Información del producto */}
            <View style={styles.detailsContainer}>
                <View style={styles.headerRow}>
                    <Text style={styles.title} numberOfLines={1}>{item.title}</Text>
                    <TouchableOpacity onPress={onDelete}>
                        <MaterialCommunityIcons name="close-circle-outline" size={24} color="black" />
                    </TouchableOpacity>
                </View>

                <Text style={styles.price}>$ {item.price.toFixed(2)}</Text>

                {/* Selector de cantidad */}
                <View style={styles.quantityContainer}>
                    <TouchableOpacity style={styles.qtyBtn} onPress={onAdd}>
                        <MaterialCommunityIcons name="plus" size={18} color="black" />
                    </TouchableOpacity>

                    <Text style={styles.qtyText}>{item.quantity?.toString().padStart(2, '0') || '01'}</Text>

                    <TouchableOpacity style={styles.qtyBtn} onPress={onRemove}>
                        <MaterialCommunityIcons name="minus" size={18} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#F0F0F0',
        marginHorizontal: 20,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 15,
        backgroundColor: '#F5F5F5',
    },
    detailsContainer: {
        flex: 1,
        marginLeft: 15,
        justifyContent: 'space-between',
    },
    headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        fontSize: 14,
        color: '#909090',
        fontWeight: '500',
        flex: 1,
        marginRight: 10,
    },
    price: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#242424',
        marginVertical: 5,
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
    },
    qtyBtn: {
        backgroundColor: '#E0E0E0',
        padding: 4,
        borderRadius: 6,
    },
    qtyText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#242424',
    },
});