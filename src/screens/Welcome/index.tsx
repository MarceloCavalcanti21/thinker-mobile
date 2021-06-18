import React from 'react';

import { useNavigation } from '@react-navigation/native';

import { Container, Content, IconLogo, WelcomeMessageBox, Title, AppName } from './styles';

export function Welcome() {

    const navigation = useNavigation();

    return (
        <Container>
            <Content>
                <IconLogo
                    onPress={() => navigation.navigate('Decision')}
                    name="brain"
                />
                <WelcomeMessageBox>
                    <Title>Bem-vindo ao </Title>
                    <AppName>Thinker</AppName>
                    <Title>!</Title>
                </WelcomeMessageBox>                
            </Content>            
        </Container>
    )
}
