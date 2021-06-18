import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import { TouchableOpacity } from 'react-native';

interface SelectProps{
    isActive: boolean;
}

export const Container = styled(TouchableOpacity)<SelectProps>`
    width: 30%;
    justify-content: center;
    align-items: center;
    padding: ${RFValue(5)}px;

    border-width: 1px;
    border-style: solid;
    border-color: ${({ theme }) => theme.colors.text};
    border-radius: 5px;

    margin-bottom: ${RFValue(12)}px;

    ${({ isActive }) => isActive && css`
        background-color: ${({ theme }) => theme.colors.secondary};
        border-color: ${({ theme }) => theme.colors.secondary};
    `};
`;

export const Title = styled.Text<SelectProps>`
    font-family: ${({ theme }) => theme.fonts.medium};
    font-size: ${RFValue(10)}px;
    color: ${({ theme }) => theme.colors.title};

    ${({ isActive }) => isActive && css`
        color: ${({ theme }) => theme.colors.background};
    `};
`;
