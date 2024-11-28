import {Children, useState} from 'react';
import {
    TextInput,
    View,
    StyleSheet,
    Alert,
    useWindowDimensions,
    KeyboardAvoidingView,
    ScrollView,
} from 'react-native';
import PrimaryButton from '../components/ui/PrimaryButton';
import Colors from '../constants/colors';
import Title from '../components/ui/Title';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';

type StartGameScoreProps = {
    onPickedNumber: (chosenNumber: number) => void;
};

const StartGameScore = ({onPickedNumber}: StartGameScoreProps) => {
    const [enteredNumber, setEnteredNumber] = useState<string>('');

    const {width, height} = useWindowDimensions();

    function numberInoutHandler(enteredText: string) {
        setEnteredNumber(enteredText);
    }

    function resetInputHandler() {
        setEnteredNumber('');
    }

    function confirmInoutHandler() {
        const chosenNumber = parseInt(enteredNumber);

        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert(
                'Invalid Number',
                'Number has to be a number between 1 and 99',
                [
                    {
                        text: 'okay',
                        style: 'destructive',
                        onPress: resetInputHandler,
                    },
                ]
            );
            return;
        }

        onPickedNumber(chosenNumber);
    }

    const marginTopDistance = height < 400 ? 30 : 100;

    return (
        <ScrollView>
            <KeyboardAvoidingView style={styles.screen} behavior='position'>
                <View
                    style={[
                        styles.rootContainer,
                        {marginTop: marginTopDistance},
                    ]}
                >
                    <Title>Guess My Number</Title>
                    <Card>
                        <InstructionText>Enter a number</InstructionText>
                        <TextInput
                            style={styles.numberInput}
                            keyboardType='number-pad'
                            autoCapitalize='none'
                            onChangeText={numberInoutHandler}
                            value={enteredNumber}
                        />
                        <View style={styles.buttonsContainer}>
                            <View style={styles.buttonContainer}>
                                <PrimaryButton onPress={resetInputHandler}>
                                    Reset
                                </PrimaryButton>
                            </View>
                            <View style={styles.buttonContainer}>
                                <PrimaryButton onPress={confirmInoutHandler}>
                                    Confirm
                                </PrimaryButton>
                            </View>
                        </View>
                    </Card>
                </View>
            </KeyboardAvoidingView>
        </ScrollView>
    );
};

export default StartGameScore;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    rootContainer: {
        flex: 1,
        alignItems: 'center',
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        marginVertical: 8,
        fontWeight: 'bold',
        color: Colors.accent500,
        textAlign: 'center',
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1,
    },
});
