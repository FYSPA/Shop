import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const { width } = Dimensions.get('window');

export default function DetailScreen() {
    const params = useLocalSearchParams();
    const router = useRouter();
    const [quantity, setQuantity] = useState(1);

    const { productData } = params;
    const product = typeof productData === 'string' ? JSON.parse(productData) : null;

    if (!product) return null;

    return (
        <View style={styles.mainContainer}>
            {/* Ocultamos el header por defecto de Expo para usar nuestro botón custom */}
            <Stack.Screen options={{ headerShown: false }} />

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }}>

                {/* --- SECCIÓN SUPERIOR: IMAGEN --- */}
                <View style={styles.headerContainer}>
                    {/* Imagen con borde redondeado solo abajo-izquierda */}
                    <View style={styles.imageBox}>
                        <Image source={{ uri: product.image }} style={styles.image} resizeMode="contain" />
                    </View>

                    {/* Botón de Atrás (Flotante) */}
                    <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
                        <MaterialCommunityIcons name="chevron-left" size={30} color="black" />
                    </TouchableOpacity>

                    {/* Selector de Colores (Flotante a la izquierda) */}
                    <View style={styles.colorSelector}>
                        <View style={[styles.colorDot, styles.colorWhite, styles.activeColor]} />
                        <View style={[styles.colorDot, styles.colorBrown]} />
                        <View style={[styles.colorDot, styles.colorBeige]} />
                    </View>
                </View>

                {/* --- SECCIÓN INFERIOR: INFO --- */}
                <View style={styles.content}>
                    <Text style={styles.title}>{product.title}</Text>

                    <View style={styles.priceRow}>
                        <Text style={styles.price}>$ {product.price}</Text>

                        {/* Selector de Cantidad */}
                        <View style={styles.quantityContainer}>
                            <TouchableOpacity onPress={() => setQuantity(q => Math.max(1, q + 1))} style={styles.qtyBtn}>
                                <MaterialCommunityIcons name="plus" size={20} color="black" />
                            </TouchableOpacity>
                            <Text style={styles.qtyText}>{quantity.toString().padStart(2, '0')}</Text>
                            <TouchableOpacity onPress={() => setQuantity(q => Math.max(1, q - 1))} style={styles.qtyBtn}>
                                <MaterialCommunityIcons name="minus" size={20} color="black" />
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* Rating */}
                    <View style={styles.ratingRow}>
                        <MaterialCommunityIcons name="star" size={20} color="#F2C94C" />
                        <Text style={styles.ratingText}>4.5</Text>
                        <Text style={styles.reviewsText}>(50 reviews)</Text>
                    </View>

                    <Text style={styles.description}>
                        {product.description}
                    </Text>
                </View>
            </ScrollView>

            {/* --- FOOTER: BOTONES FIJOS --- */}
            <View style={styles.footer}>
                <TouchableOpacity style={styles.bookmarkBtn}>
                    <MaterialCommunityIcons name="bookmark-outline" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.cartBtn}>
                    <Text style={styles.cartBtnText}>Add to cart</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: { flex: 1, backgroundColor: 'white' },

    // Header e Imagen
    headerContainer: {
        width: '100%',
        height: 550,
        position: 'relative',
    },
    imageBox: {
        width: '85%',
        height: '100%',
        alignSelf: 'flex-end',
        backgroundColor: '#F5F5F5',
        borderBottomLeftRadius: 50,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '80%',
        height: '80%',
    },
    backButton: {
        position: 'absolute',
        top: 30,
        left: 10,
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 12,
        elevation: 5,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
    },
    colorSelector: {
        position: 'absolute',
        top: 200,
        left: 30,
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 30,
        elevation: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 20,
        gap: 15,
    },
    colorDot: {
        width: 25,
        height: 25,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: 'transparent',
    },
    activeColor: { borderColor: '#909090', padding: 2 },
    colorWhite: { backgroundColor: '#E0E0E0' },
    colorBrown: { backgroundColor: '#B4916C' },
    colorBeige: { backgroundColor: '#E4CBAD' },

    // Contenido
    content: {
        padding: 25,
    },
    title: {
        fontSize: 24,
        fontWeight: '600',
        color: '#333',
        marginBottom: 10,
    },
    priceRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
    },
    price: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#242424',
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
    },
    qtyBtn: {
        backgroundColor: '#E0E0E0',
        padding: 5,
        borderRadius: 6,
    },
    qtyText: {
        fontSize: 18,
        fontWeight: '600',
    },
    ratingRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
    },
    ratingText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 8,
        color: '#242424',
    },
    reviewsText: {
        fontSize: 14,
        color: '#909090',
        marginLeft: 10,
    },
    description: {
        fontSize: 14,
        color: '#606060',
        lineHeight: 22,
        textAlign: 'justify',
    },

    // Footer
    footer: {
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        padding: 20,
        backgroundColor: 'white',
        alignItems: 'center',
        gap: 15,
    },
    bookmarkBtn: {
        backgroundColor: '#F0F0F0',
        padding: 18,
        borderRadius: 15,
    },
    cartBtn: {
        flex: 1,
        backgroundColor: '#242424',
        padding: 18,
        borderRadius: 15,
        alignItems: 'center',
    },
    cartBtnText: {
        color: 'white',
        fontSize: 18,
        fontWeight: '600',
    },
});