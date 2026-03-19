import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface NotificationProps {
    item: {
        id: string;
        type: 'order' | 'promo';
        title: string;
        description: string;
        image?: string;
        status?: string; // "New", "HOT!", etc.
    };
}

export default function NotificationItem({ item }: NotificationProps) {
    // DISEÑO PARA PROMOCIONES (Fondo gris, sin imagen)
    if (item.type === 'promo') {
        return (
            <View style={styles.promoContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
                <Text style={[styles.status, { color: '#EB5757' }]}>{item.status}</Text>
            </View>
        );
    }

    // DISEÑO ESTÁNDAR (Con imagen)
    return (
        <TouchableOpacity style={styles.container} activeOpacity={0.7}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.textContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description} numberOfLines={3}>
                    {item.description}
                </Text>
            </View>
            {item.status && (
                <Text style={[styles.status, { color: '#27AE60' }]}>{item.status}</Text>
            )}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 15,
        backgroundColor: 'white',
        alignItems: 'flex-start',
        borderBottomWidth: 1,
        borderBottomColor: '#F0F0F0',
    },
    promoContainer: {
        padding: 20,
        backgroundColor: '#F5F5F5', // Fondo gris claro
        marginVertical: 10,
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 10,
        backgroundColor: '#eee',
    },
    textContainer: {
        flex: 1,
        marginLeft: 15,
        paddingRight: 10,
    },
    title: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#242424',
        marginBottom: 5,
    },
    description: {
        fontSize: 12,
        color: '#808080',
        lineHeight: 18,
        textAlign: 'justify',
    },
    status: {
        fontSize: 14,
        fontWeight: 'bold',
        alignSelf: 'flex-end',
        marginTop: 5,
    },
});