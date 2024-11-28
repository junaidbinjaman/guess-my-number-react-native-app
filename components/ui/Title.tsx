import React, { ReactNode } from 'react'
import { Text, StyleSheet } from 'react-native'
import Colors from '../../constants/colors'

type TitleProps = {
    children: ReactNode
}

function Title({children}: TitleProps) {
  return (
    <Text style={styles.title}>{children}</Text>
  )
}

export default Title

const styles = StyleSheet.create({
    title: {
        fontFamily: 'bungee-spice',
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: 'white',
        padding: 24
    }
})