import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, Alert} from 'react-native';
import Title from '../components/ui/Title';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';

function generateRandomBetween(min: number, max: number, exclude: number) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}

type GameScreenProps = {
    userNumber: number;
    onGameOver: () => void;
};

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({userNumber, onGameOver}: GameScreenProps) {
    const initialGuess = generateRandomBetween(
        1,
        100,
        userNumber
    );
    const [currentGuess, setCurrentGuess] = useState<number>(initialGuess);

    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver();
        }
    }, [currentGuess, userNumber, onGameOver])

    function nextGuessHandler(direction: string) {
        // direction =>'lower',  'greater'
        if (
            ('lower' === direction && currentGuess < userNumber) ||
            ('greater' === direction && currentGuess > userNumber)
        ) {
            Alert.alert('Don\'t lie!', 'You know that, this is wrong', [
                {text: 'Sorry', style:'cancel'}
            ]);
            return;
        }

        if ('lower' === direction) {
            maxBoundary = currentGuess - 1;
        } else {
            minBoundary = currentGuess + 1;
        }

        const newRndNumber = generateRandomBetween(
            minBoundary,
            maxBoundary,
            currentGuess
        );
        setCurrentGuess(newRndNumber);
    }
    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <View>
                <Text>Higher or lower</Text>
                <View>
                    <PrimaryButton onPress={() => nextGuessHandler('lower')}>
                        +
                    </PrimaryButton>
                    <PrimaryButton onPress={() => nextGuessHandler('greater')}>
                        -
                    </PrimaryButton>
                </View>
            </View>
            <View>
                <Text>LOG ROUNDS</Text>
            </View>
        </View>
    );
}

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
    },
});
