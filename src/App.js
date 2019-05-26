import React from 'react';
import Home from './views/Home';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import deepPurple from '@material-ui/core/colors/deepPurple';
import deepOrange from '@material-ui/core/colors/deepOrange';

const theme = createMuiTheme({
    typography: {
        useNextVariants: true,
        fontSize: 18,
        htmlFontSize: 18,
        fontFamily: ['Ubuntu', 'sans-serif'].join(','),
        h1: {
            fontSize: '2.11em',
            lineHeight: '138%',
            color: '#282828'
        },
        h2: {
            fontSize: '1rem',
            lineHeight: '207%',
            color: '#282828'
        }
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
