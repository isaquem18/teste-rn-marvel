/* eslint-disable camelcase */
import * as SplashScreen from 'expo-splash-screen';
import { ThemeProvider } from 'styled-components';
import { useFonts } from 'expo-font';
import {
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_900Black,
} from '@expo-google-fonts/roboto';

import { PageProvider } from './src/context/PageContext';
import theme from './src/styles/theme';
import { Home } from './src/screens/Home';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_900Black,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <PageProvider>
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </PageProvider>
  );
}
