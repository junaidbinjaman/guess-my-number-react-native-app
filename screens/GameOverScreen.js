import React from 'react';
import {Image, View, StyleSheet, Text} from 'react-native';
import Tittle from '../components/ui/Tittle';
import Colors from '../constants/colors';
import PrimaryButton from '../components/ui/PrimaryButton';

const GameOverScreen = ({roundsNumber, userNumber, onStartNewGame}) => {
    return (
        <View style={styles.rootContainer}>
            <Tittle>Game Over</Tittle>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={require('../assets/images/success.png')}
                />
            </View>
            <Text style={styles.SummaryText}>
                Your phone needed <Text style={styles.highlighted}>{userNumber}</Text> rounds
                to guess the number <Text style={styles.highlighted}>{roundsNumber}</Text>
            </Text>
            <PrimaryButton onPress={onStartNewGame}>Start New Gate</PrimaryButton>
        </View>
    );
};

export default GameOverScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },

    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 2,
        borderColor: Colors.primary800,
        overflow: 'hidden',
        margin: 36,
    },

    image: {
        width: '100%',
        height: '100%',
    },

    SummaryText: {
        fontFamily: 'open-sans',
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 24
    },

    highlighted: {
        fontFamily: 'open-sans-bold',
        color: Colors.primary500,
    },
});
