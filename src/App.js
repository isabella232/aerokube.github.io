import React from 'react';
import Home from './views/Home';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import deepPurple from '@material-ui/core/colors/deepPurple';
import deepOrange from '@material-ui/core/colors/deepOrange';

const theme = createMuiTheme({
    typography: {
        useNextVariants: true,
        fontSize: 14,
        fontFamily: ['Ubuntu', 'sans-serif'].join(',')
    },
    palette: {
        primary: deepPurple,
        secondary: deepOrange
    }
});

function App() {
    return (
        <MuiThemeProvider theme={theme}>
            <Home />
        </MuiThemeProvider>
    );
}

export default App;
