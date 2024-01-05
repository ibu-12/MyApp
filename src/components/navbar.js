import '../assets/styles/nav.css'
import {BrowserRouter as Router, Routes,Route,Link } from 'react-router-dom'
import {Button,createTheme,ThemeProvider,TextField} from '@mui/material'
import me from '../assest/l1.png';
import Home from './Home';
import Login from './login';
import Register from './Register';
import Contact from './contact';
import { Bussiness, Education, Entertainment, News, Sports, Techno } from './cards';
import RegistrationForm from './signup';
import SignIn from './signin';

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
function Ls()
{
    return(
        <header>        <div style={{
            marginLeft: '590px',
            marginTop: '100px',
            backgroundColor: '#3a16014b',
            color: 'rgb(50, 30, 9)',
            padding: '100px',
            width: '200px',
            borderRadius: '30px'
        }}>
            <h3 style={{
                textDecoration: 'Underline'
            }}>Logged In!!</h3>
            <form>
                <h2>Login successfully!</h2>
                <ThemeProvider theme={theme}>
                <Button variant='contained' color='secondary' sx={{ ml: 2 }}><Link to='/' className='Btn'>Ok</Link></Button>
                </ThemeProvider>
            </form><br></br>
        </div>
        </header>

    )
}function Rs()
{
    return(
        <header>        <div style={{
            marginLeft: '590px',
            marginTop: '100px',
            backgroundColor: '#3a16014b',
            color: 'rgb(50, 30, 9)',
            padding: '100px',
            width: '200px',
            borderRadius: '30px'
        }}>
            <h3 style={{
                textDecoration: 'Underline'
            }}>Welcome!</h3>
            <form>
                <h4>Rgistration Successfully!</h4>
                <ThemeProvider theme={theme}>
                <Button variant='contained' color='secondary' sx={{ ml: 3 }}><Link to='/Login' className='Btn'>Ok</Link></Button>
                </ThemeProvider>
            </form><br></br>
        </div>
        </header>

    )
}
function Navbar()
{
    return (
        
        <Router>
            <div className='parentDiv'>
            <nav>
                <ul style={{
                    marginRight: '1000px'
                }}>
                    
                    <img src={me} height='70px' width='70px' marginLeft= '100px' className='bgm'></img>
                    
                    <li ><Link to='/' className='link'>HOME</Link></li>
                    <li ><Link to='/siIn' className='link'>LOGIN</Link></li>
                    <li ><Link to='/siup'className='link'>REGISTER</Link></li>
                    <li ><Link to='/cnt'className='link'>ContactUs</Link></li>

                </ul>
            </nav>
            </div>
            <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route exact path='/login' element={<Login/>}/>
                <Route exact path='/register' element={<Register/>}/>
                <Route exact path='/cnt' element={<Contact/>}/>
                <Route exact path='/ls' element={<Ls/>} />
                <Route exact path='/rs' element={<Rs/>} />
                <Route exact path='/enter' element={<Entertainment/>}/>
                <Route exact path='/tech' element={<Techno/>}/>
                <Route exact path='/sports' element={<Sports/>}/>
                <Route exact path='/Bussiness' element={<Bussiness/>}/>
                <Route exact path='/edu' element={<Education/>}/>
                <Route exact path='/news' element={<News/>}/>
                <Route exact path='/siup' element={<RegistrationForm/>}/>
                <Route exact path='/siIn' element={<SignIn/>}/>
            </Routes>
        </Router>
        
    )
}
export default Navbar;


