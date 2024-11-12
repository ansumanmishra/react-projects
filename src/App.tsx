import {Recipes} from './components/Recipes';
import {AppBar, Box, createTheme, CssBaseline, Stack, ThemeProvider, Toolbar, Typography} from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import {useMemo, useState} from 'react';

const App = () => {
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  const theme = useMemo(
    () => createTheme({
      palette: {
        mode: mode,
      },
    }),
    [mode]
  );

  const switchTheme = () => {
    setMode((prevMode) => (prevMode === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Stack direction="row" sx={{justifyContent: "space-between", width: "100%"}}>
            <Typography variant="h6" color="inherit" component="div">
              Recipes
            </Typography>

            <LightModeIcon onClick={switchTheme} sx={{cursor: "pointer"}} />
          </Stack>
        </Toolbar>
      </AppBar>
      <Box component="section">
        <Recipes/>
      </Box>
    </ThemeProvider>
  )
}

export default App;