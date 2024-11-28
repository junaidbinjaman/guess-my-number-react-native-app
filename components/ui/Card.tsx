import React, { ReactNode } from 'react'
import { View, StyleSheet } from 'react-native';
import Colors from '../../constants/colors';

type CardProps = {
    children: ReactNode
}

function Card({children}: CardProps) {
  return (
    <View style={styles.card}>
        {children}
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
        marginHorizontal: 24,
        borderRadius: 8,
        padding: 16,
        backgroundColor: Colors.primary800,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.25,
    }
})