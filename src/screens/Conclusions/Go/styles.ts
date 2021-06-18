import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { MaterialCommunityIcons, FontAwesome5, FontAwesome } from '@expo/vector-icons';

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.background};
`;

export const Content = styled.View`
    /* display: flex;
    width: 100%;
    height: 100%; */
    flex: 1;
    justify-content: center;
    align-items: center;

    padding: ${RFValue(20)}px;
`;

export const IconConclusion = styled(FontAwesome5)`
    color: ${({ theme }) => theme.colors.secondary};
    font-size: ${RFPercentage(15)}px;

    margin-bottom: ${RFValue(30)}px;
`;

export const MessageBox = styled.View`
    display: flex;
    flex-direction: row;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: ${RFPercentage(2.5)}px;
    color: ${({ theme }) => theme.colors.title};

    text-align: center;
`;

export const TitleHighlight = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: ${RFPercentage(2.5)}px;
    color: ${({ theme }) => theme.colors.secondary};
`;

export const IconHome = styled(FontAwesome)`
    color: ${({ theme }) => theme.colors.secondary};
    font-size: ${RFValue(55)}px;

    margin-bottom: ${RFValue(30)}px;
`;
