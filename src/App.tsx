import { useState } from 'react';
import './App.css';
import { Box, createTheme, Grid, Paper, ThemeProvider, useMediaQuery } from '@mui/material';
import { HashRouter, Route, Router, Routes } from 'react-router-dom';
import Navbar from './components/pages/NavBar';
import MobileProfile from './components/pages/MobileNav';
import DarkModeSwitch from './components/UI/DarkModeSwitch';
import AboutMe from './components/pages/Profile/AboutMe';
import Resume from './components/pages/Resume/Resume';
import Portfolio from './components/pages/Portfolio/Portfolio';
import PageNotFound from './components/pages/PageNotFound';
import MenuBtn from './components/UI/MenuBtn';
import { makeStyles } from '@mui/styles';

const useStyles: any = makeStyles((theme: any) => ({
  root: {
    overflow: 'hidden',
    height: '100%',
  },
  rootPages: {
    height: '100vh',
    overflow: 'auto',
    display: 'flex',
    flexDirection: 'column',
  },
  switchBtn: {
    position: 'fixed',
    right: '10px',
    zIndex: 900,
  },
  switchBtnMobile: {
    position: 'fixed',
    zIndex: 900,
  },
}))

function App() {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const [darkMode, setDarkmode] = useState(true)

  const theme = createTheme({
    typography: {
      fontFamily: 'Quicksand, sans-serif',
    },

    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        light: '#ff833a',
        main: '#e65100',
        dark: '#ac1900',
        contrastText: '#000',
      },

      secondary: {
        light: '#ffbb93',
        main: '#ff8a65',
        dark: '#c75b39',
        contrastText: '#000',
      },
    },
  })
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  const handleOpenMenu = (e: any) => {
    setOpen(!open)
  }

  return (
    <HashRouter>
      <ThemeProvider theme={theme}>
        <Paper className={classes.root}>
          <Grid container>

            {!isMobile ? (
              <Navbar isMobile={isMobile} />
            ) : (
              <MobileProfile
                open={open}
                handleOpenMenu={handleOpenMenu}
                isMobile={isMobile}
              />
            )}
            <Grid item className={classes.rootPages} xs>
              <Box
                className={
                  !isMobile ? classes.switchBtn : classes.switchBtnMobile
                }>
                <DarkModeSwitch
                  isMobile={isMobile}
                  setDarkmode={setDarkmode}
                  darkMode={darkMode}
                />
              </Box>
              <Routes>
                <Route element={<AboutMe isMobile={isMobile} />} path='/'>

                </Route>
                <Route element={<Resume />} path='/resume'>

                </Route>
                <Route element={<Portfolio />} path='/projects'>

                </Route>
                <Route path='*' Component={PageNotFound} />
              </Routes>
            </Grid>
            <MenuBtn onClick={handleOpenMenu} isMobile={isMobile} open={open} />
          </Grid>
        </Paper>
      </ThemeProvider>
    </HashRouter>
  );
}

export default App;
