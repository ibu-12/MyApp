import '../assets/styles/nav.css'
import React from 'react'
import {BrowserRouter as Router, Routes,Route,Link } from 'react-router-dom'
import {Button,createTheme,ThemeProvider,TextField} from '@mui/material'
import my from '../assest/llrr1.jpg';
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
function Contact()
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
            height: '610px',
            overflow:'hidden',
            fontFamily: 'URW Chancery L, cursive',
            borderRadius: '30px'
        }}>
            <h2 style={{textAlign:'center',backgroundColor: '#3a16014b', padding: '8px'
            }}>Contact Us</h2>
            <form>
                 <TextField id="standard-basic" label="Any Query" variant="standard" />
                <br></br><br></br>
                <TextField id="standard-basic" label="FullName" variant="standard" />
                <br></br><br></br>
                <TextField id="standard-basic" label="Email" variant="standard" />
                <br></br><br></br>
                <TextField id="standard-basic" label="Phone Number" variant="standard" />
                <br></br><br></br>
            <TextField id="standard-multiline-static" label="Multiline" multiline rows={4} defaultValue="Additional Message" variant="standard"/>
                <br></br><br></br>
            </form>
            <br></br>
            <ThemeProvider theme={theme}>
                <Button variant='contained' color='secondary' sx={{ ml: 3 }}><Link to='/' className='Btn'>Send Request</Link></Button>
            </ThemeProvider> 
            <div style={{
                marginRight: '500px',
                position:'relative',
                left:'301px',
                bottom: '500px'
             }}>
             <img src={my} height='480px' width='350px'></img>
             </div>
        </div>
        </header>

    )
}
export default Contact;