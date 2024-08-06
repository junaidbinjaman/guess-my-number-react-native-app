import {React, useState, useEffect} from 'react';
import {Text, View, StyleSheet, Alert} from 'react-native';
import Tittle from '../components/ui/Tittle';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';
import Ionicons from '@expo/vector-icons/Ionicons';

function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({userNumber, onGameOver}) => {
    const initialGuess = generateRandomBetween(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);

    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver();
        }
    }, [currentGuess, userNumber, onGameOver]);

    function nextGuessHandler(direction) {
        if (
            (direction === 'lower' && currentGuess < userNumber) ||
            (direction === 'greater' && currentGuess > userNumber)
        ) {
            Alert.alert("Don't lie", 'You know that, this is wrong', [
                {text: 'Sorry', style: 'cancel'},
            ]);
            return;
        }

        if (direction === 'lower') {
            maxBoundary = currentGuess;
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
            <Tittle>Opponent's Guess</Tittle>
            <NumberContainer>{currentGuess}</NumberContainer>
            <View>
                <Card>
                    <InstructionText style={styles.instructionText}>Higher or Lower?</InstructionText>
                    <View style={styles.buttonsContainer}>
                        <View style={styles.buttonContainer}>
                            <PrimaryButton
                                onPress={nextGuessHandler.bind(this, 'lower')}
                            >
                                <Ionicons name="remove" size={24} color="white" />
                            </PrimaryButton>
                        </View>
                        <View style={styles.buttonContainer}>
                            <PrimaryButton
                                onPress={nextGuessHandler.bind(this, 'greater')}
                            >
                                <Ionicons name="add-sharp" size={24} color="white" />
                            </PrimaryButton>
                        </View>
                    </View>
                </Card>
            </View>
            <View>{/* LOG ROUNDS */}</View>
        </View>
    );
};

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 20,
    },

    instructionText: {
        marginBottom: 12
    },

    buttonsContainer: {
        flexDirection: 'row',
    },

    buttonContainer: {
        flex: 1,
    },
});
