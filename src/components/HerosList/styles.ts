import styled from 'styled-components/native';
import { FlatList } from 'react-native';

export const Container = styled.View`
  flex: 1;
  width: 100%;
`;

export const Header = styled.View`
  margin-top: 12px;
  padding: 12px 0;
  background-color: ${({ theme }) => theme.colors.main};
`;

export const HeaderText = styled.Text`
  color: ${({ theme }) => theme.colors.light};
  font-family: ${({ theme }) => theme.fonts.roboto400};
  font-size: 16px;
`;

export const HeroFlatList = styled(FlatList).attrs({
  contentContainerStyle: {
    paddingLeft: 3,
    paddingBottom: 100,
  },
})`
  flex: 1;
` as unknown as typeof FlatList;
