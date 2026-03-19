import { Link, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import AuthBackground from '../../components/auth/AuthBackground';
import AuthInput from '../../components/auth/AuthInput';
import LampToggle from '../../components/auth/LampToggle';

export default function RegisterScreen() {
    const router = useRouter();
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={{ flex: 1 }}>
                <AuthBackground isLightOn={isPasswordVisible}>
                    <KeyboardAvoidingView
                        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                        style={styles.container}
                    >
                        {/* ScrollView opcional solo si el contenido es más alto que la pantalla */}
                        <View style={styles.formCard}>
                            <Text style={styles.title}>Crear Cuenta</Text>
                            <Text style={styles.subtitle}>Sé parte del diseño exclusivo</Text>

                            <AuthInput label="Nombre Completo" placeholder="Juan Pérez" />
                            <AuthInput label="Correo" placeholder="juan@correo.com" />

                            <View style={{ width: '100%' }}>
                                <AuthInput
                                    label="Contraseña"
                                    placeholder="********"
                                    secureTextEntry={!isPasswordVisible}
                                />
                                <LampToggle
                                    isActive={isPasswordVisible}
                                    onPress={() => setIsPasswordVisible(!isPasswordVisible)}
                                />
                            </View>

                            <AuthInput
                                label="Confirmar Contraseña"
                                placeholder="********"
                                secureTextEntry={!isPasswordVisible}
                            />

                            <TouchableOpacity
                                style={styles.mainButton}
                                onPress={() => router.replace('/(tabs)/home')}
                            >
                                <Text style={styles.mainButtonText}>Registrarse</Text>
                            </TouchableOpacity>

                            <View style={styles.linkContainer}>
                                <Link href="/(auth)/login" asChild>
                                    <TouchableOpacity style={styles.link}>
                                        <Text style={styles.linkText}>¿Ya tienes cuenta? Inicia Sesión</Text>
                                    </TouchableOpacity>
                                </Link>
                            </View>
                        </View>
                    </KeyboardAvoidingView>
                </AuthBackground>
            </View>
        </TouchableWithoutFeedback>
    );
}

// Los estilos son idénticos al de Login para mantener la coherencia
const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    formCard: {
        width: '85%',
        backgroundColor: 'rgba(0,0,0,0.65)',
        padding: 25,
        borderRadius: 25,
        alignItems: 'center',
    },
    title: { fontSize: 26, fontWeight: 'bold', color: '#fff', marginBottom: 5 },
    subtitle: { color: '#ccc', fontSize: 14, marginBottom: 25, textAlign: 'center', minWidth: 250 },
    mainButton: {
        backgroundColor: '#fff',
        width: '100%',
        padding: 16,
        borderRadius: 12,
        alignItems: 'center',
        marginTop: 15,
    },
    mainButtonText: { fontWeight: 'bold', fontSize: 16, color: '#000' },
    linkContainer: {
        marginTop: 20,
        width: '100%', // Asegura que el contenedor ocupe todo el ancho
        alignItems: 'center',
    },
    link: { marginTop: 20 },
    linkText: {
        color: '#fff',
        textDecorationLine: 'underline',
        fontSize: 14, // Bajamos un punto si es necesario
        textAlign: 'center',
        minWidth: 250, // Asegura un ancho mínimo para evitar el salto de línea
    },
});