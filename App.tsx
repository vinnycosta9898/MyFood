import { StatusBar } from 'react-native';
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins'
import { ThemeProvider } from 'styled-components';
import { theme } from './src/styles';
import { Routes } from './src/routes';
import { Loading } from './src/components/Loading';
import React from 'react';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular
  })
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        backgroundColor="#000"
        barStyle={'light-content'}
        translucent
      />
       {fontsLoaded ? <Routes/> : <Loading/>}
    </ThemeProvider>
  );
}
