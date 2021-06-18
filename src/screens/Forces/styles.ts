import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.background};
`;

export const Content = styled.View`
    flex: 1;
    width: 100%;
    height: 100%;
    justify-content: flex-start;
    align-items: flex-start;
    padding: ${RFPercentage(10)}px ${RFPercentage(2)}px ${RFPercentage(2)}px ${RFPercentage(2)}px;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: ${RFPercentage(2.4)}px;
    color: ${({ theme }) => theme.colors.title};
    margin-bottom: ${RFPercentage(3)}px;
`;

export const QuestionBox = styled.View`
    display: flex;
    width: 100%;
    justify-content: center;

    border-bottom-width: 0.3px;
    border-bottom-color: #6A6A6A;

    margin-bottom: ${RFValue(25)}px;
`;

export const Question = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: ${RFPercentage(2)}px;
    color: ${({ theme }) => theme.colors.secondary};
    margin-bottom: ${RFValue(7)}px;
`;

export const OptionsBox = styled.View`
    flex-direction: row;

    justify-content: space-around;
`;

export const IconNext = styled(MaterialIcons)`
    color: ${({ theme }) => theme.colors.secondary};
    font-size: ${RFPercentage(12)}px;
    align-self: flex-end;
`;