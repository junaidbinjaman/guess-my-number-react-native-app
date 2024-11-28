import {useState} from 'react';
import {
    StyleSheet,
    ImageBackground,
    SafeAreaView,
    ActivityIndicator,
} from 'react-native';
import StartGameScore from './screens/StartGameScore';
import {LinearGradient} from 'expo-linear-gradient';
import GameScreen from './screens/GameScreen';
import Colors from './constants/colors';
import GameOverScreen from './screens/GameOverScreen';
import {useFonts} from 'expo-font';
import {StatusBar} from 'expo-status-bar';

export default function App() {
    const [userNumber, setUserNumber] = useState<number | null>();
    const [gameIsOver, setGameIsOver] = useState<boolean>(true);
    const [guessRounds, setGuessRounds] = useState<number>(0);

    const [fontsLoaded] = useFonts({
        'bungee-spice': require('./assets/fonts/Parkinsans/static/ParkinsansRegular.ttf'),
    });

    if (!fontsLoaded) {
        // Show a loading spinner until the font is loaded
        return <ActivityIndicator size='large' style={styles.centered} />;
    }

    function pickedNumberHandler(pickedNumber: number) {
        setUserNumber(pickedNumber);
        setGameIsOver(false);
    }

    function gameOverHandler(numberOfRounds: number) {
        setGameIsOver(true);
        setGuessRounds(numberOfRounds);
    }

    function startNewGameHandler() {
        setUserNumber(null);
        setGuessRounds(0);
    }

    let screen = <StartGameScore onPickedNumber={pickedNumberHandler} />;

    if (userNumber) {
        screen = (
            <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
        );
    }

    if (gameIsOver && userNumber) {
        screen = (
            <GameOverScreen
                roundsNumber={guessRounds}
                userNumber={userNumber}
                onStartNewGame={startNewGameHandler}
            />
        );
    }

    return (
        <>
            <StatusBar style='light' />
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
        </>
    );
}

const styles = StyleSheet.create({
    rootScreen: {
        flex: 1,
    },
    backgroundImage: {
        opacity: 0.15,
    },
    centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
