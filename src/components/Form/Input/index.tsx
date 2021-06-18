import React from 'react';
import { TextInputProps } from 'react-native';

import { Container } from './styles';

type Props = TextInputProps;

export function Input({...rest}: Props) {
    return (
        <Container
            multiline={true}
            numberOfLines={12}
            style={{
                textAlignVertical: 'top',
            }}
            {...rest}
        />          
    )
}
