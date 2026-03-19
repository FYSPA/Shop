import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { FlatList, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import CartItem from '../../components/cart/CartItem';
import CustomHeader from '../../components/ui/CustomHeader';

export default function CartScreen() {
    const router = useRouter();

    // Simulación de datos en el carrito
    const [cartItems, setCartItems] = useState([
        { id: 1, title: 'Minimal Stand', price: 25.00, quantity: 1, image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=200&auto=format&fit=crop' },
        { id: 2, title: 'Coffee Table', price: 20.00, quantity: 1, image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=200&auto=format&fit=crop' },
        { id: 3, title: 'Minimal Desk', price: 50.00, quantity: 1, image: 'https://images.unsplash.com/photo-1518455027359-f3f816b1a238?q=80&w=200&auto=format&fit=crop' },
    ]);

    const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    return (
        <View style={styles.mainContainer}>
            <CustomHeader
                title="My cart"
                leftIcon="chevron-left"
                onLeftPress={() => router.back()}
            />

            <FlatList
                data={cartItems}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <CartItem
                        item={item}
                        onAdd={() => { }}
                        onRemove={() => { }}
                        onDelete={() => { }}
                    />
                )}
                contentContainerStyle={{ paddingBottom: 20 }}
            />

            {/* Footer fijo con Promo Code y Total */}
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
                <View style={styles.footer}>
                    {/* Input de Promo Code */}
                    <View style={styles.promoContainer}>
                        <TextInput
                            style={styles.promoInput}
                            placeholder="Enter your promo code"
                            placeholderTextColor="#909090"
                        />
                        <TouchableOpacity style={styles.promoBtn}>
                            <MaterialCommunityIcons name="chevron-right" size={24} color="white" />
                        </TouchableOpacity>
                    </View>

                    {/* Total */}
                    <View style={styles.totalRow}>
                        <Text style={styles.totalLabel}>Total:</Text>
                        <Text style={styles.totalPrice}>$ {total.toFixed(2)}</Text>
                    </View>

                    {/* Botón Check out */}
                    <TouchableOpacity style={styles.checkoutBtn}>
                        <Text style={styles.checkoutText}>Check out</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: { flex: 1, backgroundColor: 'white' },
    footer: {
        padding: 20,
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        // Sombra para el footer
        shadowColor: "#000",
        shadowOffset: { width: 0, height: -4 },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 10,
    },
    promoContainer: {
        flexDirection: 'row',
        backgroundColor: '#F5F5F5',
        borderRadius: 15,
        alignItems: 'center',
        marginBottom: 20,
        paddingRight: 5,
    },
    promoInput: {
        flex: 1,
        paddingVertical: 15,
        paddingHorizontal: 20,
        fontSize: 14,
        color: '#242424',
    },
    promoBtn: {
        backgroundColor: '#242424',
        width: 45,
        height: 45,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    totalRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    totalLabel: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#909090',
    },
    totalPrice: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#242424',
    },
    checkoutBtn: {
        backgroundColor: '#242424',
        paddingVertical: 18,
        borderRadius: 15,
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
    },
    checkoutText: {
        color: 'white',
        fontSize: 18,
        fontWeight: '600',
    },
});