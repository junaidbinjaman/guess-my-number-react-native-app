import { useState } from 'react';
import {StyleSheet, ImageBackground, SafeAreaView} from 'react-native';
import StartGameScore from './screens/StartGameScore';
import {LinearGradient} from 'expo-linear-gradient';
import GameScreen from './screens/GameScreen';
import Colors from './constants/colors';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {
    const [userNumber, setUserNumber] = useState<number>();
    const [gameIsOver, setGameIsOver] = useState<boolean>(true);

    function pickedNumberHandler(pickedNumber: number) {
        setUserNumber(pickedNumber);
        setGameIsOver(false);
    }

    function gameOverHandler() {
        setGameIsOver(true);
    }

    let screen = <StartGameScore onPickedNumber={pickedNumberHandler} />

    if (userNumber) {
        screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />;
    }

    if (gameIsOver && userNumber) {
        screen = <GameOverScreen />
    }

    return (
        <LinearGradient
            style={styles.rootScreen}
            colors={[Colors.primary700, Colors.accent500]}
        >
            <ImageBackground
                source={require('./assets/images/background.png')}
                resizeMode='cover'
                style={styles.rootScreen}
                imageStyle={styles.backgroundImage}
            >
                <SafeAreaView style={styles.rootScreen}>
                {screen}
                </SafeAreaView>
            </ImageBackground>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    rootScreen: {
        flex: 1,
    },
    backgroundImage: {
      opacity: 0.15
    }
});
