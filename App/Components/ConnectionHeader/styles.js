import styled from 'styled-components/native';

export const Container = styled.View`
    background-color: #fff;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    height: 50px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    elevation: 5;
    


`;

export const ConnectionStatus = styled.View`

    background-color: ${props => props.color};
    margin-left: 10px;
    width: 15px;
    height: 15px;
    border-radius: 15px;

`
