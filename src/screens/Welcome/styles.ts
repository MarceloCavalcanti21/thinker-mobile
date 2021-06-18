import styled from 'styled-components/native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.background};
`;

export const Content = styled.View`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
`;

export const IconLogo = styled(MaterialCommunityIcons)`
    color: ${({ theme }) => theme.colors.secondary};
    font-size: ${RFPercentage(15)}px;
`;

export const WelcomeMessageBox = styled.View`
    display: flex;
    flex-direction: row;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: ${RFPercentage(2.5)}px;
    color: ${({ theme }) => theme.colors.title};
`;

export const AppName = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: ${RFPercentage(2.5)}px;
    color: ${({ theme }) => theme.colors.secondary};
`;
