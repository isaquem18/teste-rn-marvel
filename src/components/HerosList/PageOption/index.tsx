/* eslint-disable react/no-unstable-nested-components */
import { usePage } from '../../../context/PageContext';
import { Container, PageButtonText } from './styles';

type Props = {
  page: number;
};

export function PageOption({ page }: Props) {
  const { selectedPage, setSelectedPage } = usePage();

  const handleChangePage = () => {
    setSelectedPage(page);
  };

  return (
    <Container selected={selectedPage === page} onPress={handleChangePage}>
      <PageButtonText selected={selectedPage === page}>{page}</PageButtonText>
    </Container>
  );
}
