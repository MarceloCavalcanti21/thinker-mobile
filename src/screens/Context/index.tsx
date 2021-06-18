import React, { useState } from 'react';

import { ScrollView } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { Container, Content, Title, QuestionBox, Question, OptionsBox, IconNext } from './styles';

import { OptionButton } from '../../components/Form/OptionButton';

export function Context() {

    const navigation = useNavigation();

    const [impacto, setImpacto] = useState({ Baixo: false, Medio: false, Alto: false });
    const [beneficio, setBeneficio] = useState({ Baixo: false, Medio: false, Alto: false });
    const [reversivel, setReversivel] = useState({ Sim: false, Nao: false });
    const [reversivelCusto, setReversivelCusto] = useState({ Baixo: false, Alto: false });
    const [necessario, setNecessario] = useState({ Sim: false, Nao: false });

    return (
        <Container>            
            <Content>
                <Title>Certo! Agora eu preciso entender um pouco do que tá envolvido</Title>

                <ScrollView
                    style={{ width: '100%'}}
                >
                    <QuestionBox>
                        <Question>1. Impacto da decisão</Question>

                        <OptionsBox>
                            <OptionButton                        
                                title="Baixo"
                                onPress={() => setImpacto({ Baixo: true, Medio: false, Alto: false })}
                                isActive={impacto.Baixo}
                            />

                            <OptionButton                        
                                title="Médio"
                                onPress={() => setImpacto({ Baixo: false, Medio: true, Alto: false })}
                                isActive={impacto.Medio}
                            />

                            <OptionButton                        
                                title="Alto"
                                onPress={() => setImpacto({ Baixo: false, Medio: false, Alto: true })}
                                isActive={impacto.Alto}
                            />
                        </OptionsBox>                    
                    </QuestionBox>
                
                    <QuestionBox>
                        <Question>2. Tamanho do benefício gerado</Question>

                        <OptionsBox>
                            <OptionButton                        
                                title="Baixo"
                                onPress={() => setBeneficio({ Baixo: true, Medio: false, Alto: false })}
                                isActive={beneficio.Baixo}
                            />

                            <OptionButton                        
                                title="Médio"
                                onPress={() => setBeneficio({ Baixo: false, Medio: true, Alto: false })}
                                isActive={beneficio.Medio}
                            />

                            <OptionButton                        
                                title="Alto"
                                onPress={() => setBeneficio({ Baixo: false, Medio: false, Alto: true })}
                                isActive={beneficio.Alto}
                            />
                        </OptionsBox>                    

                    </QuestionBox>

                    <QuestionBox>
                        <Question>3. É algo reversível?</Question>

                        <OptionsBox>
                            <OptionButton                        
                                title="Sim"
                                onPress={() => setReversivel({ Sim: true, Nao: false })}
                                isActive={reversivel.Sim}
                            />

                            <OptionButton                        
                                title="Não"
                                onPress={() => setReversivel({ Sim: false, Nao: true })}
                                isActive={reversivel.Nao}
                            />
                        </OptionsBox>                    

                    </QuestionBox>

                    <QuestionBox>
                        <Question>3.1. A que custo?</Question>

                        <OptionsBox>
                            <OptionButton                        
                                title="Baixo"
                                onPress={() => setReversivelCusto({ Baixo: true, Alto: false })}
                                isActive={reversivelCusto.Baixo}
                            />

                            <OptionButton                        
                                title="Alto"
                                onPress={() => setReversivelCusto({ Baixo: false, Alto: true })}
                                isActive={reversivelCusto.Alto}
                            />
                        </OptionsBox>                    

                    </QuestionBox>

                    <QuestionBox>
                        <Question>4. É algo necessário?</Question>

                        <OptionsBox>
                            <OptionButton                        
                                title="Sim"
                                onPress={() => setNecessario({ Sim: true, Nao: false })}
                                isActive={necessario.Sim}
                            />

                            <OptionButton                        
                                title="Não"
                                onPress={() => setNecessario({ Sim: false, Nao: true })}
                                isActive={necessario.Nao}
                            />
                        </OptionsBox>                    

                    </QuestionBox>

                    <IconNext
                        onPress={() => navigation.navigate('Vulnerability')}
                        name="navigate-next"
                    /> 
                </ScrollView>
            </Content>      
        </Container>
    )
}
