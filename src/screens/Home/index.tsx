import { useEffect, useState } from 'react';
import { Alert, StatusBar } from 'react-native';

import { Container } from './styles';
import Request from '../../utils/request';

// components
import { Header } from '../../components/Header';
import { HerosList } from '../../components/HerosList';
import { usePage } from '../../context/PageContext';

export function Home() {
  const { setTotal, selectedPage, setSelectedPage, setOffset } = usePage();
  const [searchValue, setSearchValue] = useState('');
  const [updateList, setUpdateList] = useState(false);
  const [heroList, setHeroList] = useState([]);

  useEffect(() => {
    let query;
    if (searchValue.length > 0) {
      query = {
        limit: 4,
        offset: (selectedPage - 1) * 4,
        name: searchValue,
      };
    } else {
      query = {
        limit: 4,
        offset: (selectedPage - 1) * 4,
      };
    }

    try {
      (async () => {
        const response = await Request({
          method: 'get',
          url: `/characters`,
          query,
        });

        if (!response) {
          return;
        }

        setTotal(response?.data?.total);
        setHeroList(response?.data?.results);
      })();
    } catch (e) {
      Alert.alert('Erro', 'Não foi possível carregar lista de heróis.');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedPage, updateList]);

  const handleSearch = () => {
    setOffset(1);
    setSelectedPage(1);
    setUpdateList((oldValue) => !oldValue);
  };

  return (
    <>
      <StatusBar
        backgroundColor="transparent"
        barStyle="dark-content"
        translucent
      />
      <Container>
        <Header
          searchValueInput={searchValue}
          setSearchValueInput={setSearchValue}
          handleSearch={handleSearch}
        />
        <HerosList heroList={heroList} />
      </Container>
    </>
  );
}
