import React from 'react';
import { TextInput, View, Pressable } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

const StartGameScore = () => {
    return (
        <View>
            <TextInput />
            <PrimaryButton>Reset</PrimaryButton>
            <PrimaryButton>Confirm</PrimaryButton>
        </View>
    );
};

export default StartGameScore;