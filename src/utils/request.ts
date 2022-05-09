import api from '../api';

const publicKey = '5dd0b5470e18758f1e91e5d5179d2e8b';
const md5Hash = '478655e797573381045fabfe6380f6ad';

type IRequest = {
  method: string;
  url: string;
  query?: any;
};

export default async function Request({ method, url, query }: IRequest) {
  const queryString = new URLSearchParams(query).toString();

  const formattedURL = `${url}?ts=1&apikey=${publicKey}&hash=${md5Hash}&${queryString}`;

  const { data } = await api({
    method,
    url: formattedURL,
  });

  if (data.code === 200) {
    return data;
  }
  return null;
}
