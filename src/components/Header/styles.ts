import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  padding: ${getStatusBarHeight() + 12}px 30px 0 30px;
`;

export const TitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
  height: 30px;
`;

type ITitle = {
  bold?: boolean;
};

export const Title = styled.Text<ITitle>`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.main};
  font-family: ${({ theme, bold }) =>
    bold ? theme.fonts.roboto900 : theme.fonts.roboto300};
  line-height: 20px;
`;

export const UnderlineContainer = styled.View`
  border-bottom-width: 2px;
  border-bottom-color: ${({ theme }) => theme.colors.main};
  justify-content: center;
  padding-top: 2px;
  height: 30px;
`;

export const Underline = styled(Title)``;

export const Bolder = styled(Title)`
  font-family: ${({ theme }) => theme.fonts.roboto900};
  line-height: 20px;
`;

export const Label = styled(Title)`
  font-family: ${({ theme }) => theme.fonts.roboto400};
  margin-top: 12px;
`;

export const CharacterNameInput = styled.TextInput.attrs({
  autoCapitalize: 'none',
  autoCorrect: false,
  returnKeyType: 'search',
})`
  border: 1px solid #000000;
  border-radius: 4px;
  height: 40px;
  padding: 0 10px;
`;
