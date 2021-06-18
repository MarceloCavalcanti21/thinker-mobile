import React, { useState, useContext } from 'react';

import { ScrollView } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { QuestionsContext } from '../../hooks/QuestionsContext';

import { Container, Content, Title, QuestionBox, Question, OptionsBox, IconNext } from './styles';

import { OptionButton } from '../../components/Form/OptionButton';

export function Forces() {

    const navigation = useNavigation();

    const context = useContext(QuestionsContext);

    const [emocao, setEmocao] = useState({ Sim: false, Nao: false });
    const [velocidade, setVelocidade] = useState({ Sim: false, Nao: false });
    const [fatos, setFatos] = useState({ Sim: false, Nao: false });
    const [experiencia, setExperiencia] = useState({ Sim: false, Nao: false });
    const [desejo, setDesejo] = useState({ Sim: false, Nao: false });
    const [pressao, setPressao] = useState({ Sim: false, Nao: false });
    const [trauma, setTrauma] = useState({ Sim: false, Nao: false });
    const [opiniao, setOpiniao] = useState({ Sim: false, Nao: false });
    const [ignorarFatos, setIgnorarFatos] = useState({ Sim: false, Nao: false });

    return (        
        <Container>
            <Content>
                <Title>Perfeito! Pra fechar e calcular o risco, me diz se...</Title>

                <ScrollView style={{ width: '100%'}}>

                    <QuestionBox>
                        <Question>1. É algo que envolve a sua emoção?</Question>

                        <OptionsBox>
                            <OptionButton                        
                                title="Sim"
                                onPress={() => setEmocao({ Sim: true, Nao: false })}
                                isActive={emocao.Sim}
                            />

                            <OptionButton                        
                                title="Não"
                                onPress={() => setEmocao({ Sim: false, Nao: true })}
                                isActive={emocao.Nao}
                            />
                        </OptionsBox>                    

                    </QuestionBox>

                    <QuestionBox>
                        <Question>2. O processo está muito rápido?</Question>

                        <OptionsBox>
                            <OptionButton                        
                                title="Sim"
                                onPress={() => setVelocidade({ Sim: true, Nao: false })}
                                isActive={velocidade.Sim}
                            />

                            <OptionButton                        
                                title="Não"
                                onPress={() => setVelocidade({ Sim: false, Nao: true })}
                                isActive={velocidade.Nao}
                            />
                        </OptionsBox>                    

                    </QuestionBox>

                    <QuestionBox>
                        <Question>3. Você tem poucos fatos?</Question>

                        <OptionsBox>
                            <OptionButton                        
                                title="Sim"
                                onPress={() => setFatos({ Sim: true, Nao: false })}
                                isActive={fatos.Sim}
                            />

                            <OptionButton                        
                                title="Não"
                                onPress={() => setFatos({ Sim: false, Nao: true })}
                                isActive={fatos.Nao}
                            />
                        </OptionsBox>                    

                    </QuestionBox>

                    <QuestionBox>
                        <Question>4. Tem experiência na área?</Question>

                        <OptionsBox>
                            <OptionButton                        
                                title="Sim"
                                onPress={() => setExperiencia({ Sim: true, Nao: false })}
                                isActive={experiencia.Sim}
                            />

                            <OptionButton                        
                                title="Não"
                                onPress={() => setExperiencia({ Sim: false, Nao: true })}
                                isActive={experiencia.Nao}
                            />
                        </OptionsBox>                    

                    </QuestionBox>

                    <QuestionBox>
                        <Question>5. É algo que você deseja muito?</Question>

                        <OptionsBox>
                            <OptionButton                        
                                title="Sim"
                                onPress={() => setDesejo({ Sim: true, Nao: false })}
                                isActive={desejo.Sim}
                            />

                            <OptionButton                        
                                title="Não"
                                onPress={() => setDesejo({ Sim: false, Nao: true })}
                                isActive={desejo.Nao}
                            />
                        </OptionsBox>                    

                    </QuestionBox>

                    <QuestionBox>
                        <Question>6. Tem algum tipo de pressão em você?</Question>

                        <OptionsBox>
                            <OptionButton                        
                                title="Sim"
                                onPress={() => setPressao({ Sim: true, Nao: false })}
                                isActive={pressao.Sim}
                            />

                            <OptionButton                        
                                title="Não"
                                onPress={() => setPressao({ Sim: false, Nao: true })}
                                isActive={pressao.Nao}
                            />
                        </OptionsBox>                    

                    </QuestionBox>

                    <QuestionBox>
                        <Question>7. Tem relação com algum  trauma?</Question>

                        <OptionsBox>
                            <OptionButton                        
                                title="Sim"
                                onPress={() => setTrauma({ Sim: true, Nao: false })}
                                isActive={trauma.Sim}
                            />

                            <OptionButton                        
                                title="Não"
                                onPress={() => setTrauma({ Sim: false, Nao: true })}
                                isActive={trauma.Nao}
                            />
                        </OptionsBox>                    

                    </QuestionBox>

                    <QuestionBox>
                        <Question>8. Pediu opiniões e sugestões?</Question>

                        <OptionsBox>
                            <OptionButton                        
                                title="Sim"
                                onPress={() => setOpiniao({ Sim: true, Nao: false })}
                                isActive={opiniao.Sim}
                            />

                            <OptionButton                        
                                title="Não"
                                onPress={() => setOpiniao({ Sim: false, Nao: true })}
                                isActive={opiniao.Nao}
                            />
                        </OptionsBox>                    

                    </QuestionBox>

                    <QuestionBox>
                        <Question>9. Se pega tendo que não olhar alguns fatos?</Question>

                        <OptionsBox>
                            <OptionButton                        
                                title="Sim"
                                onPress={() => setIgnorarFatos({ Sim: true, Nao: false })}
                                isActive={ignorarFatos.Sim}
                            />

                            <OptionButton                        
                                title="Não"
                                onPress={() => setIgnorarFatos({ Sim: false, Nao: true })}
                                isActive={ignorarFatos.Nao}
                            />
                        </OptionsBox>                    

                    </QuestionBox>
                                        
                    <IconNext
                        onPress={() => navigation.navigate('Go')}
                        name="navigate-next"
                    />  
                </ScrollView>
            </Content>               
        </Container>
    )
}
