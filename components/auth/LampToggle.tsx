import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

interface Props {
    isActive: boolean;
    onPress: () => void;
}

export default function LampToggle({ isActive, onPress }: Props) {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress} activeOpacity={0.7}>
            <MaterialCommunityIcons
                name={(isActive ? "lamp" : "lamp-outline") as any}
                size={22}
                color={isActive ? "#FFD700" : "#888"}
            />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        position: 'absolute',
        right: 5,
        height: '110%',
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 10,
    },
});