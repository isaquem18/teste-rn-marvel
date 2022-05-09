/* eslint-disable react/no-unstable-nested-components */
import { Pressable } from 'react-native';

import { usePage } from '../../../context/PageContext';
import { PageOption } from '../PageOption';
import { Container, LeftArrow, RightArrow, PageOptions } from './styles';

export function HerosListFooter() {
  const { total, offset, setOffset } = usePage();

  const handleDecreaseOffsetPage = () => {
    if (offset === 1) return;
    setOffset((oldValue) => oldValue - 1);
  };

  const handleIncreaseOffsetPage = () => {
    if (Math.ceil(total / 4) <= offset + 2) return;
    setOffset((oldValue) => oldValue + 1);
  };

  return (
    <Container>
      <Pressable onPress={handleDecreaseOffsetPage} hitSlop={20}>
        <LeftArrow />
      </Pressable>
      <PageOptions>
        <PageOption page={offset} />
        {total > 4 && <PageOption page={offset + 1} />}
        {total > 8 && <PageOption page={offset + 2} />}
      </PageOptions>
      <Pressable onPress={handleIncreaseOffsetPage} hitSlop={20}>
        <RightArrow />
      </Pressable>
    </Container>
  );
}
