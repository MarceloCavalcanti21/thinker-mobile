import React from 'react';

import { useNavigation } from '@react-navigation/native';

import { Container, Content, Title, Subtitle, IconNext } from './styles';

import { Input } from '../../components/Form/Input';

export function Decision() {

    const navigation = useNavigation();

    return (
        <Container>
            <Content>
                <Title>Pra gente começar, me fala que decisão você tá precisando tomar</Title>
                <Subtitle>Coloca só as palavras-chave, tá? Por exemplo, comprar carro, trocar casa etc...</Subtitle>
                {/* <Subtitle>Por exemplo, comprar carro, trocar casa etc...</Subtitle> */}
                <Input
                    placeholder="Digite aqui qual é a sua questão..."
                />
            </Content>
            <IconNext
                onPress={() => navigation.navigate('Context')}
                name="navigate-next"
            />            
        </Container>
    )
}
