import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: rgba(209, 214, 251, 0.18);
  flex: 1;
  padding-left: 16px;
  padding-right: 16px;
`;

export const BaseContainer = styled.View`
  elevation: 3;
  flex: 1;
  margin-bottom: 15px; 
  background-color: #ffffff
  border-radius: 15px;
  padding: 15px;
`

export const ChangeNetwork = styled.TouchableOpacity`
  elevation: 3;
  height: 40px;
  width: 117px;
  margin-top: 8px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: #f3efef;
  bottom: -13px;
  align-self: flex-end;
  justify-content: center;
  align-items: center;
`
export const ActionButton = styled.TouchableOpacity`
  background-color: #d1d6fb;
  justify-content: center;
  align-items: center;
  height: 40px;
  margin-top: 10.1px;
  border-radius: 5px;
  elevation: 2;
`