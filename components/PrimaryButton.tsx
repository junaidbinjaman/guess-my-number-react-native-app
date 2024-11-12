import React, {ReactNode} from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';

type PrimaryButtonProps = {
    children: ReactNode;
};

const PrimaryButton: React.FC<PrimaryButtonProps> = ({children}) => {
    function test() {
        console.log('Clicked! Clicked!');
    }
    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable
                style={({pressed}) =>
                    pressed
                        ? [styles.buttonInnerContainer, styles.pressed]
                        : styles.buttonInnerContainer
                }
                onPress={test}
                android_ripple={{color: '#640233'}}
            >
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    );
};

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden',
    },
    buttonInnerContainer: {
        backgroundColor: '#72063c',
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    },
    pressed: {
        opacity: 0.75,
    },
});
