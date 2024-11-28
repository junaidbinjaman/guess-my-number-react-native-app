import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import Title from '../components/ui/Title';
import Colors from '../constants/colors';
import PrimaryButton from '../components/ui/PrimaryButton';

type GameOverScreenProps = {
    roundsNumber: number;
    userNumber: number;
    onStartNewGame: () => void;
};

function GameOverScreen({roundsNumber, userNumber, onStartNewGame}: GameOverScreenProps) {
    return (
        <View style={styles.rootContainer}>
            <Title>GAME OVER!</Title>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={require('../assets/success.png')}
                />
            </View>

            <Text style={styles.summaryText}>
                Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text> rounds
                to guess the number <Text style={styles.highlight}>{userNumber}</Text>
            </Text>
            <PrimaryButton onPress={onStartNewGame}>Start New game</PrimaryButton>
        </View>
    );
}

export default GameOverScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        height: 300,
        width: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: Colors.primary800,
        overflow: 'hidden',
        margin: 36,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    summaryText: {
        fontFamily: 'bungee-spice',
        fontSize: 22,
        textAlign: 'center',
        marginBottom: 24,
    },
    highlight: {
        color: Colors.primary500,
    },
});
