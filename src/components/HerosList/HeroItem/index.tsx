import { Container, Avatar, Name } from './styles';

type Props = {
  name: string;
  avatar: string;
};

export function HeroItem({ name, avatar }: Props) {
  const imageURL = `${avatar}/standard_medium.jpg`;

  return (
    <Container>
      <Avatar source={{ uri: imageURL }} />
      <Name>{name}</Name>
    </Container>
  );
}
