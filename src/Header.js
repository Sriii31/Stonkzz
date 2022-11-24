import React, {useState} from 'react';
import { AppBar, Toolbar, Typography, Tabs, Tab, Button} from '@mui/material/';
import TerminalIcon from '@mui/icons-material/Terminal';


const Header = () => {
    const [count, setCount] = useState();
    return(
        <React.Fragment>
        <AppBar sx={{background: '#000000'}}>
            <Toolbar>
            <TerminalIcon fontSize='large'></TerminalIcon>
                <Typography sx={{paddingLeft: '10%'}}>
                    Portfolio
                </Typography>
                <Tabs sx={{marginLeft: 'auto'}} indicatorColor='primary' value={count} onChange={(e, count) => setCount(count)} textColor='inherit¯'>
                 <Tab label="Skills" />
                 <Tab label="Projects" />
                 <Tab label="Services" />
                 <Tab label="Contact" />
                </Tabs>
                <Button sx={{marginLeft: 'auto', background: '#ffffff', color: 'black'}} variant="container">Login</Button>
                <Button  sx={{marginLeft: '10px', background: '#ffffff', color: 'black'}} variant="container">SignUp</Button>
            </Toolbar>
        </AppBar>
        </React.Fragment>        
    )
}

export default Header


