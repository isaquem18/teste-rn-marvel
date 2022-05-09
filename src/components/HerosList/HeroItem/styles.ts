import styled from 'styled-components/native';

export const Container = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.main};
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 100px;
  margin: 18px 30px;
`;

export const Name = styled.Text`
  font-size: 16px;
  color: #000000;
  font-family: ${({ theme }) => theme.fonts.roboto400};
`;
