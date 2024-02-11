import { Text } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { theme } from './src/styles';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Text>Open up App.tsx to start working on your app!</Text>
    </ThemeProvider>
  );
}
