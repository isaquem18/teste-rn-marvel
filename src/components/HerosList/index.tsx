/* eslint-disable react/no-unstable-nested-components */
import { HeroItem } from './HeroItem';
import { HerosListFooter } from './HerosListFooter';
import { Container, Header, HeaderText, HeroFlatList } from './styles';

type Props = {
  heroList: any;
};

export function HerosList({ heroList }: Props) {
  return (
    <Container>
      <Header>
        <HeaderText>Nome</HeaderText>
      </Header>
      <HeroFlatList
        keyExtractor={(item) => String(item?.id)}
        data={heroList}
        renderItem={({ item }) => (
          <HeroItem name={item?.name} avatar={item?.thumbnail?.path} />
        )}
        ListFooterComponent={() => <HerosListFooter />}
      />
    </Container>
  );
}
