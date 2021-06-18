import styled from 'styled-components/native';
import { TextInput } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';


export const Container = styled(TextInput)`
    width: 100%;
    padding: 10px 0;

    color: ${({ theme }) => theme.colors.text};
    font-size: ${RFValue(16)}px;
    font-family: ${({ theme }) => theme.fonts.medium};
`;
