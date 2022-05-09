/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from 'styled-components/native';

type Props = {
  selected?: boolean;
};

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})<Props>`
  width: 30px;
  height: 30px;
  border-radius: 30px;
  border: 1px solid ${({ theme }) => theme.colors.main};
  background-color: ${({ theme, selected }) =>
    selected ? theme.colors.main : theme.colors.light};
  align-items: center;
  justify-content: center;
`;

export const PageButtonText = styled.Text<Props>`
  color: 1px solid ${({ theme }) => theme.colors.main};
  color: ${({ theme, selected }) =>
    selected ? theme.colors.light : theme.colors.main};
`;
