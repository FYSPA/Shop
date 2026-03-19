import { Stack } from 'expo-router';

export default function ShopLayout() {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="home" options={{ title: 'Muebles Minimalistas' }} />
            <Stack.Screen name="detail" options={{ title: 'Detalle del Producto' }} />
        </Stack>
    );
}