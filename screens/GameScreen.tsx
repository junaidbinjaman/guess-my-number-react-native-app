import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, Alert, FlatList} from 'react-native';
import Title from '../components/ui/Title';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';
import Ionicons from '@expo/vector-icons/Ionicons';
import GuessLogItem from '../components/game/GuessLogItem';

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
    const initialGuess = generateRandomBetween(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState<number>(initialGuess);
    const [guessRounds, setGuessRounds] = useState<number[]>([initialGuess]);

    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver();
        }
    }, [currentGuess, userNumber, onGameOver]);

    useEffect(() => {
        (minBoundary = 1), (maxBoundary = 100);
    }, []);

    function nextGuessHandler(direction: string) {
        // direction =>'lower',  'greater'
        if (
            ('lower' === direction && currentGuess < userNumber) ||
            ('greater' === direction && currentGuess > userNumber)
        ) {
            Alert.alert("Don't lie!", 'You know that, this is wrong', [
                {text: 'Sorry', style: 'cancel'},
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
        setGuessRounds((prevGuessRounds) => [newRndNumber, ...prevGuessRounds]);
    }

    const guessRoundsListLength = guessRounds.length
    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card>
                <InstructionText style={styles.instructionText}>
                    Higher or lower
                </InstructionText>
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton
                            onPress={() => nextGuessHandler('lower')}
                        >
                            <Ionicons name='add' size={24} color='white' />
                        </PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton
                            onPress={() => nextGuessHandler('greater')}
                        >
                            <Ionicons name='remove' size={24} color='white' />
                        </PrimaryButton>
                    </View>
                </View>
            </Card>
            <View>
                {/* { guessRounds.map(guessRound => <Text key={guessRound}>{guessRound}</Text>) } */}
                <FlatList
                    data={guessRounds}
                    renderItem={(itemData) => <GuessLogItem roundNUmber={guessRoundsListLength - itemData.item} guess={itemData.item} />}
                />
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
    instructionText: {
        marginBottom: 12,
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1,
    },
});
