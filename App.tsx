import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { theme } from './src/styles';
import { SignIn } from './src/screens/SignIn';
import { Home } from './src/screens/Home';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        backgroundColor="#000"
        barStyle={'light-content'}
        translucent
      />
      <Home/>
    </ThemeProvider>
  );
}
