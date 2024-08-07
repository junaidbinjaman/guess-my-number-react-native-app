import React from 'react';
import { StyleSheet, Text } from 'react-native';
import Colors from '../../constants/colors';

const Tittle = ({children}) => {
    return (
        <Text style={styles.title}>{children}</Text>
    );
};

export default Tittle;

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: 'white',
        padding: 12
    }
});