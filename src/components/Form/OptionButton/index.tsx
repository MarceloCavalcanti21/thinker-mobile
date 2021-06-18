import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Container, Title } from './styles';

interface Props extends TouchableOpacityProps {
    title: string;
    isActive: boolean;
}

export function OptionButton({
    title,
    isActive,
    ...rest
}: Props) {
    return (
        <Container
            isActive={isActive}
            {...rest}
        >
            <Title
                isActive={isActive}
            >
                {title}
            </Title>
        </Container>      
    )
}
