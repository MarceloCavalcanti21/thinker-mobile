import 'react-native-gesture-handler';

import React from 'react';
import AppLoading from 'expo-app-loading';

import { PageNavigation } from './src/routes';
import { NavigationContainer } from '@react-navigation/native';

import { QuestionsContext } from './src/hooks/QuestionsContext';
import { IQuestionsContext } from './src/hooks/IQuestionsContext';

import { ThemeProvider } from 'styled-components';

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';

import theme from './src/global/styles/theme';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if(!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <ThemeProvider theme={theme} >
        <QuestionsContext.Provider value={IQuestionsContext}>
          <PageNavigation />
        </QuestionsContext.Provider>
      </ThemeProvider>
    </NavigationContainer>
  )
}
