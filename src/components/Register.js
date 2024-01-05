import { DateField } from '@mui/x-date-pickers/DateField';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import {Button,createTheme,ThemeProvider,TextField} from '@mui/material'
import {BrowserRouter as Router, Routes,Route,Link } from 'react-router-dom'
import my from '../assest/logo22.jpg';
import React from 'react';
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
function  Register()
{
    return(
        <div style={{
            marginLeft: '450px',
            marginTop: '25px',
            backgroundColor: '#3a16014b',
            color: 'rgb(50, 30, 9)',
            padding: '10px 50px',
            width: '750px',
            height: '570px',
            overflow:'hidden',
            fontFamily: 'URW Chancery L, cursive',
            borderRadius: '30px'}}>
             <h2 style={{ textAlign:'center' ,backgroundColor: '#3a16014b', padding: '8px'}}>Register</h2>
             <div style={{
                marginRight: '500px'
             }}>
             <img src={my} height='480px' width='350px'></img>
             </div>
            <form className='frm'>
                
                    <TextField id="standard-basic" label="FirstName" variant="standard" />
                <br></br>
                <br></br>
                    <TextField id="standard-basic" label="LastName" variant="standard" />
                <br></br>
                <br></br>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateField']}>
        <DateField label="Date Of Birth" />
      </DemoContainer>
    </LocalizationProvider>
                <br></br>
                    <TextField id="standard-basic" label="UserName or Email" variant="standard" />
                <br></br><br></br>
                <TextField id="filled-password-input" label="Password" type="password"  autoComplete="current-password" variant="filled"/>
                 
                <br></br>
                <h6>Already have an account? <Link to='/login' className='nln'>Login</Link></h6>
                <ThemeProvider theme={theme}>
                <Button variant='contained' color='secondary' sx={{ ml: 3 }}><Link to='/rs' className='Btn'>Register</Link></Button>
                </ThemeProvider>
            </form><br></br>
        </div>
    )
}
export default Register;