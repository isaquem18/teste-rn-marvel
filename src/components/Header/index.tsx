import { Dispatch } from 'react';

import {
  Container,
  TitleContainer,
  Title,
  UnderlineContainer,
  Label,
  CharacterNameInput,
} from './styles';

type Props = {
  searchValueInput: string;
  setSearchValueInput: Dispatch<string>;
  handleSearch: () => void;
};

export function Header({
  searchValueInput,
  setSearchValueInput,
  handleSearch,
}: Props) {
  return (
    <Container>
      <TitleContainer>
        <UnderlineContainer>
          <Title bold>BUSCA</Title>
        </UnderlineContainer>
        <Title bold> MARVEL</Title>
        <Title>TESTE FRONT-END</Title>
      </TitleContainer>
      <Label>Nome do Personagem</Label>
      <CharacterNameInput
        value={searchValueInput}
        onChangeText={setSearchValueInput}
        onSubmitEditing={handleSearch}
      />
    </Container>
  );
}
