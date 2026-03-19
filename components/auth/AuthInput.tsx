import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

interface Props {
    placeholder: string;
    secureTextEntry?: boolean;
    label: string;
    children?: React.ReactNode; // Añadimos esto para recibir el LampToggle
}

export default function AuthInput({ placeholder, secureTextEntry, label, children }: Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>

            {/* Contenedor relativo solo para el input y el icono */}
            <View style={styles.inputWrapper}>
                <TextInput
                    style={styles.input}
                    placeholder={placeholder}
                    placeholderTextColor="#888"
                    secureTextEntry={secureTextEntry}
                    autoCapitalize="none"
                />
                {/* Aquí se inyectará el LampToggle si existe */}
                {children}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { marginBottom: 15, width: '100%' },
    label: { color: '#fff', marginBottom: 6, fontSize: 13, fontWeight: '500', opacity: 0.9 },
    inputWrapper: {
        justifyContent: 'center', // Centra el contenido verticalmente
        width: '100%',
    },
    input: {
        backgroundColor: 'rgba(255,255,255,0.95)',
        paddingHorizontal: 15,
        height: 50, // Altura fija para controlar mejor el centro
        borderRadius: 12,
        fontSize: 15,
        color: '#000',
        paddingRight: 45,
    },
});