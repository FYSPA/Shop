import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, View } from 'react-native';

// Importamos nuestros nuevos componentes
import AnimatedContent from '../components/welcome/AnimatedContent';
import Background from '../components/welcome/Background';

export default function WelcomeScreen() {
    const router = useRouter();
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const slideAnim = useRef(new Animated.Value(50)).current;

    useEffect(() => {
        Animated.parallel([
            Animated.timing(fadeAnim, { toValue: 1, duration: 1000, useNativeDriver: true }),
            Animated.timing(slideAnim, { toValue: 0, duration: 800, useNativeDriver: true }),
        ]).start();
    }, []);

    return (
        <View style={styles.container}>
            <StatusBar style="light" />

            <Background>
                <AnimatedContent
                    fadeAnim={fadeAnim}
                    slideAnim={slideAnim}
                    onPress={() => router.replace('/(auth)/login')}
                />
            </Background>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1 },
});