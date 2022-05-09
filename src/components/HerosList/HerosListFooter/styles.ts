/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { Fontisto } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  left: -3px;
  width: ${width}px;
  padding: 0 30px;
`;

export const LeftArrow = styled<any>(Fontisto).attrs(({ theme }) => ({
  name: 'caret-left',
  size: 24,
  color: theme.colors.main,
}))``;

export const RightArrow = styled<any>(Fontisto).attrs(({ theme }) => ({
  name: 'caret-right',
  size: 24,
  color: theme.colors.main,
}))``;

export const PageOptions = styled.View`
  flex: 1;
  padding: 24px 60px 24px 60px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
