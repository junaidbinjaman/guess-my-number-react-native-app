import React from 'react';
import { StyleSheet, Text } from 'react-native';

const Tittle = ({children}) => {
    return (
        <Text style={styles.title}>{children}</Text>
    );
};

export default Tittle;

const styles = StyleSheet.create({
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 24,
        color: 'white',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: 'white',
        padding: 12
    }
});