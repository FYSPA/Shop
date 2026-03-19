import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import NotificationItem from '../../components/notifications/NotificationItem';
import CustomHeader from '../../components/ui/CustomHeader';

const NOTIFICATIONS = [
    {
        id: '1',
        type: 'order',
        title: 'Your order #123456789 has been confirmed',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis pretium et in arcu adipiscing nec.',
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=200',
        status: 'New'
    },
    {
        id: '2',
        type: 'order',
        title: 'Your order #123456789 has been canceled',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis pretium et in arcu adipiscing nec.',
        image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=200',
    },
    {
        id: '3',
        type: 'promo',
        title: 'Discover hot sale furnitures this week.',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis pretium et in arcu adipiscing nec. Turpis pretium et in arcu adipiscing nec.',
        status: 'HOT!'
    },
    {
        id: '4',
        type: 'order',
        title: 'Your order #123456789 has been shipped successfully',
        description: 'Please help us to confirm and rate your order to get 10% discount code for next order.',
        image: 'https://images.unsplash.com/photo-1518455027359-f3f816b1a238?q=80&w=200',
    }
];

export default function NotificationScreen() {
    return (
        <View style={styles.mainContainer}>
            {/* Reutilizamos el Header que hicimos antes */}
            <CustomHeader
                title="Notification"
                leftIcon="magnify" // Icono de búsqueda a la izquierda
            />

            <FlatList
                data={NOTIFICATIONS}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <NotificationItem item={item as any} />}
                contentContainerStyle={styles.listContent}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: 'white',
    },
    listContent: {
        paddingBottom: 100, // Espacio para que el menú de pestañas no tape el final
    },
});