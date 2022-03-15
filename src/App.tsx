import React from 'react';
import logo from './logo.svg';
import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import Layout from './components/Layout';
import useMediaQuery from '@mui/material/useMediaQuery';

export const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function App() {
  return (
    <Layout />
  );
}

export default function ToggleColorMode() {
  const [mode, setMode] = React.useState<any>('light');
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode: any) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  React.useEffect(() => {
    console.log("prefersDarkMode", prefersDarkMode);
    if (prefersDarkMode) {
      setMode('dark');
    }
  }, []);
  
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: mode,
          text:{
            primary: mode === 'light' ? '#333333' : "#FFFFFF",
            secondary: "#333333"
          // },
          // status: {
          //   danger: '#ff0505',
          },
          background: {
            default: mode === 'light' ? '#FAF9F6' : '#333333',
            paper: mode === 'light' ? '#ffffff' : ''
          },
        },
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <App />
        <CssBaseline />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
