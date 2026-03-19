import CustomHeader from '@/components/ui/CustomHeader';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native';
import Carrousel from '../../components/catalog/Carrousel';
import ProductCard from '../../components/catalog/ProductCard';

export default function HomeScreen() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const router = useRouter(); // Hook para navegar

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <View style={styles.center}>
                <ActivityIndicator size="large" color="#6200ea" />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <CustomHeader
                title="MAKE HOME"
                subtitle="Explora lo mejor para ti"
                rightIcon="cart-outline"
                showBadge={true}
                onRightPress={() => router.push('/(shop)/cart')}
            />
            <Carrousel />
            <View style={styles.containerLine}>
                <LinearGradient
                    colors={['#edededff', 'transparent']}
                    style={styles.blurShadow}
                />
            </View>
            <FlatList
                data={products}
                keyExtractor={(item: any) => item.id.toString()}
                numColumns={2}
                columnWrapperStyle={styles.row}
                renderItem={({ item }) => (
                    <ProductCard
                        product={item}
                        onPress={() => {
                            router.push({
                                pathname: "/(shop)/detail",
                                params: {
                                    id: item.id.toString(),
                                    productData: JSON.stringify(item)
                                }
                            });
                        }}
                    />
                )}
                contentContainerStyle={styles.list}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#f8f9fa' },
    center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    list: { padding: 15 },
    row: {
        flex: 1,
        justifyContent: "space-between",
    },
    containerLine: {
        marginHorizontal: 20,
        marginVertical: 10,
        marginBottom: 0,
    },
    blurShadow: {
        height: 8,
        width: '100%',
        opacity: 0.2,
    },
});