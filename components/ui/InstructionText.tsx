import React, {ReactNode} from 'react';
import {View, Text, StyleSheet, TextStyle} from 'react-native';
import Colors from '../../constants/colors';

type InstructionTextProp = {
    children: ReactNode;
    style?: TextStyle | TextStyle[]
};

function InstructionText({children, style}: InstructionTextProp) {
    return <Text style={[styles.instructionText, style]}>{children}</Text>;
}

export default InstructionText;

const styles = StyleSheet.create({
    instructionText: {
        color: Colors.accent500,
        fontSize: 24
    },
})
