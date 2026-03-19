import React, { ReactNode } from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';

interface Props {
    children: ReactNode;
}

export default function Background({ children }: Props) {
    return (
        <ImageBackground
            source={{ uri: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2158&auto=format&fit=crop' }}
            style={styles.background}
            resizeMode="cover"
        >
            <View style={styles.overlay} />
            {children}
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: { flex: 1, justifyContent: 'flex-end' },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.4)',
    },
});