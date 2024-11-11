import React, { ReactNode } from 'react';
import { View, Text } from 'react-native';

type PrimaryButtonProps = {
    children: ReactNode;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({children}) => {
    return (
        <View>
            <Text>{children}</Text>
        </View>
    );
};

export default PrimaryButton;