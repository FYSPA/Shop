import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface HeaderProps {
    title: string;
    subtitle?: string; // El '?' significa que es opcional
    leftIcon?: keyof typeof MaterialCommunityIcons.glyphMap;
    rightIcon?: keyof typeof MaterialCommunityIcons.glyphMap;
    showBadge?: boolean;
    onLeftPress?: () => void;
    onRightPress?: () => void;
}

export default function CustomHeader({
    title,
    subtitle,
    leftIcon = "magnify", // Icono por defecto
    rightIcon,
    showBadge = false,
    onLeftPress,
    onRightPress
}: HeaderProps) {
    return (
        <View style={styles.container}>
            {/* LADO IZQUIERDO */}
            <TouchableOpacity style={styles.iconButton} onPress={onLeftPress}>
                <MaterialCommunityIcons name={leftIcon} size={28} color="#242424" />
            </TouchableOpacity>

            {/* CENTRO: Se adapta si hay subtítulo o no */}
            <View style={styles.containerText}>
                {subtitle ? (
                    <>
                        <Text style={styles.brandNameSmall}>{title}</Text>
                        <Text style={styles.subtitle}>{subtitle}</Text>
                    </>
                ) : (
                    <Text style={styles.brandNameBig}>{title}</Text>
                )}
            </View>

            {/* LADO DERECHO */}
            <TouchableOpacity style={styles.iconButton} onPress={onRightPress}>
                {rightIcon && (
                    <MaterialCommunityIcons name={rightIcon} size={28} color="#242424" />
                )}
                {showBadge && <View style={styles.cartBadge} />}
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 10,
        paddingBottom: 15,
        backgroundColor: '#fff',
    },
    iconButton: {
        width: 45,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    containerText: {
        alignItems: 'center',
        flex: 1, // Para que el texto siempre esté centrado
    },
    brandNameSmall: {
        fontSize: 12,
        letterSpacing: 2,
        fontWeight: '400',
        color: '#909090',
        textTransform: 'uppercase',
    },
    subtitle: {
        fontSize: 18,
        fontWeight: '700',
        color: '#242424',
    },
    brandNameBig: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#242424',
    },
    cartBadge: {
        position: 'absolute',
        top: 8,
        right: 8,
        width: 10,
        height: 10,
        backgroundColor: '#EB5757',
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#fff',
    }
});