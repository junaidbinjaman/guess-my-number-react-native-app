import {StyleSheet, ImageBackground} from 'react-native';
import StartGameScore from './screens/StartGameScore';
import {LinearGradient} from 'expo-linear-gradient';

export default function App() {
    return (
        <LinearGradient
            style={styles.rootScreen}
            colors={['#4e0329', '#ddb52f']}
        >
            <ImageBackground
                source={require('./assets/images/background.png')}
                resizeMode='cover'
                style={styles.rootScreen}
                imageStyle={styles.backgroundImage}
            >
                <StartGameScore />
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
