import React from "react";
import { Text, TouchableOpacity, StyleSheet, TouchableOpacityProps } from "react-native";

interface ButtonProps extends TouchableOpacityProps {
    title: string;
}
export function Button({ title, ...rest }: ButtonProps) {
    return (
        <TouchableOpacity
            style={styles.button}
            activeOpacity={.7}
            {...rest}
        >
            <Text
                style={styles.buttonText}
            >
                {title}

            </Text>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        padding: 15,
        backgroundColor: '#A370F7',
        borderRadius: 7,
        alignItems: 'center',
        justifyContent: 'center',
        color: '#FFF',
        marginTop: 20
    },
    buttonText: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#FFF'
    },

});
