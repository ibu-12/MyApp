import '../assets/styles/nav.css'
import React from 'react'
import {BrowserRouter as Router, Routes,Route,Link } from 'react-router-dom'
import {Button,createTheme,ThemeProvider,TextField} from '@mui/material'
import my from '../assest/logo22.jpg';
const theme = createTheme({
    palette: {
      primary: {
        main: 'rgb(50, 30, 9)',
        // light: will be calculated from palette.primary.main,
        // dark: will be calculated from palette.primary.main,
        // contrastText: will be calculated to contrast with palette.primary.main
      },
      secondary: {
        main: 'rgb(50, 30, 9)',
        light: 'rgb(50, 30, 9)',
        // dark: will be calculated from palette.secondary.main,
        contrastText: 'rgb(50, 30, 9)',
      },
    },
  });
function Login()
{
    return(
        <header>        <div style={{
            marginLeft: '450px',
            marginTop: '25px',
            backgroundColor: '#3a16014b',
            textAlign: 'left',
            color: 'rgb(50, 30, 9)',
            padding: '10px 50px',
            width: '750px',
            height: '570px',
            overflow:'hidden',
            fontFamily: 'URW Chancery L, cursive',
            borderRadius: '30px'
        }}>
            <h2 style={{textAlign:'center',backgroundColor: '#3a16014b', padding: '8px'
            }}>Login</h2>
            <form>
                 <TextField id="standard-basic" label="UserName or Email" variant="standard" />
                <br></br><br></br>
                <TextField id="filled-password-input" label="Password" type="password"  autoComplete="current-password" variant="filled"/>
            <h6>Don't you have an account? <Link to='/register' className='nln'>Register</Link></h6>
            </form>
            <ThemeProvider theme={theme}>
                <Button variant='contained' color='secondary' sx={{ ml: 3 }}><Link to='/ls' className='Btn'>Login</Link></Button>
                </ThemeProvider> 
            <div style={{
                marginRight: '500px',
                position:'relative',
                left:'301px',
                bottom: '200px'
             }}>
             <img src={my} height='480px' width='350px'></img>
             </div>
        </div>
        </header>

    )
}
export default Login;