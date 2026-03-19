import React from 'react';
import { Animated, StyleSheet, Text, TouchableOpacity } from 'react-native';

interface Props {
    fadeAnim: Animated.Value;
    slideAnim: Animated.Value;
    onPress: () => void;
}

export default function AnimatedContent({ fadeAnim, slideAnim, onPress }: Props) {
    return (
        <Animated.View style={[
            styles.content,
            {
                opacity: fadeAnim,
                transform: [{ translateY: slideAnim }]
            }
        ]}>
            <Text style={styles.title}>Diseña tu{"\n"}Espacio Ideal</Text>
            <Text style={styles.subtitle}>
                Encuentra los mejores muebles minimalistas para transformar tu hogar.
            </Text>

            <TouchableOpacity
                style={styles.button}
                activeOpacity={0.8}
                onPress={onPress}
            >
                <Text style={styles.buttonText}>Iniciar Sesión</Text>
            </TouchableOpacity>
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    content: { padding: 30, paddingBottom: 60 },
    title: { color: 'white', fontSize: 42, fontWeight: 'bold', marginBottom: 10, lineHeight: 50 },
    subtitle: { color: '#ddd', fontSize: 16, marginBottom: 30, lineHeight: 24 },
    button: {
        backgroundColor: '#fff',
        paddingVertical: 18,
        borderRadius: 30,
        alignItems: 'center',
        elevation: 5,
    },
    buttonText: { color: '#000', fontSize: 18, fontWeight: 'bold', letterSpacing: 1 },
});