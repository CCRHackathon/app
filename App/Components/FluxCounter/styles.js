import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
    background-color: #fff;
    margin-top: 24px;
    margin-bottom: 24px;
    height: 64px;
    justify-content: center;
    align-items: center;
    elevation: 3;

`;

export const ConnectionStatus = styled.TouchableOpacity`

    background-color: ${props => props.color};
    margin-left: 10px;
    width: 15px;
    height: 15px;
    border-radius: 15px;

`
