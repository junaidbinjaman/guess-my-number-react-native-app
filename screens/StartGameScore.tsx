import {Children, useState} from 'react';
import {TextInput, View, StyleSheet, Alert} from 'react-native';
import PrimaryButton from '../components/ui/PrimaryButton';
import Colors from '../constants/colors';

type  StartGameScoreProps = {
    onPickedNumber: (chosenNumber:number) => void;
}

const StartGameScore = ({onPickedNumber}: StartGameScoreProps) => {
    const [enteredNumber, setEnteredNumber] = useState<string>('');

    function numberInoutHandler(enteredText: string) {
        setEnteredNumber(enteredText)
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
                    {text: 'okay', style: 'destructive', onPress: resetInputHandler}
                ]
            );
            return;
         }

         onPickedNumber(chosenNumber);
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.numberInput}
                keyboardType='number-pad'
                autoCapitalize='none'
                onChangeText={numberInoutHandler}
                value={enteredNumber}
            />
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={confirmInoutHandler}>Confirm</PrimaryButton>
                </View>
            </View>
        </View>
    );
};

export default StartGameScore;

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
        marginHorizontal: 24,
        borderRadius: 8,
        padding: 16,
        backgroundColor: Colors.primary800,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.25,
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
