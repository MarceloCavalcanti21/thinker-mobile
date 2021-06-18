import React from 'react';

import { useNavigation } from '@react-navigation/native';

import { Container, Content, IconConclusion, MessageBox, Title, TitleHighlight, IconHome } from './styles';

export function Go() {

    const navigation = useNavigation();

    return (
        <Container>
            <Content>
                <IconConclusion
                    onPress={() => navigation.navigate('Decision')}
                    name="smile-beam"
                />
                <MessageBox>
                    <Title>Olha só, analisando o que você me disse, tudo indica que é uma decisão bem ponderada.</Title>
                </MessageBox>  

                <MessageBox>
                    <Title>Então, </Title>
                    <TitleHighlight>vai fundo</TitleHighlight>
                    <Title>!</Title>
                </MessageBox>                
            </Content>     
            <IconHome
                onPress={() => navigation.navigate('Welcome')}
                name="refresh"
            />        
        </Container>
    )
}
