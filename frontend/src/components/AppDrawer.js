import React, { useState, useEffect } from 'react';

import { AppBar, Toolbar, IconButton, Typography, makeStyles, Button, Drawer, List, ListItem, ListItemIcon } from '@material-ui/core';
import { Menu, AccountCircle } from '@material-ui/icons';


import ListItemText from '@material-ui/core/ListItemText';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import SettingsIcon from '@material-ui/icons/Settings';
import BarChartIcon from '@material-ui/icons/BarChart';
import DashboardIcon from '@material-ui/icons/Dashboard';

const useStyles = makeStyles({
    paper: {
        background: 'rgba(66, 66, 66, 0.5)',
        color: 'white',
        marginTop:"3.37%",
        backdropFilter: "blur(10px)",
 
    }
});

function AppDrawer () {
    const styles = useStyles();
    const [drawerState, setDrawerState] = useState(false);

    const goStats = () => {
        window.location.href = '/stats';
    }

    const goDash = () => {
        window.location.href = '/dashboard';
    }

    const goHabits = () => {
        window.location.href = '/habits';
    }

    return(
        <>
        <Drawer anchor="left" open={drawerState} onClose={() => setDrawerState(false)} classes={{ paper: styles.paper }}>
                <List>

                <ListItem button>
                        <ListItemIcon> 
                            <DashboardIcon style={{ color: "white"}}/>
                        </ListItemIcon>
                        <ListItemText primary="Dashboard" onClick={goDash}/>
                    </ListItem>
                   

                    <ListItem button>
                        <ListItemIcon> 
                            <DoneAllIcon style={{ color: "white"}} />
                        </ListItemIcon>
                        <ListItemText primary="Habits" onClick={goHabits}/>
                    </ListItem>

                    <ListItem button>
                        <ListItemIcon> 
                            <BarChartIcon style={{ color: "white"}}/>
                        </ListItemIcon>
                        <ListItemText primary="Statistics" onClick={goStats}/>
                    </ListItem>

                    <ListItem button>
                        <ListItemIcon> 
                            <CalendarTodayIcon style={{ color: "white"}}/>
                        </ListItemIcon>
                        <ListItemText primary="Calendar" />
                    </ListItem>

                    <ListItem button>
                        <ListItemIcon> 
                            <SettingsIcon style={{ color: "white"}}/>
                        </ListItemIcon>
                        <ListItemText primary="Settings" />
                    </ListItem>

                </List>
            </Drawer>
            <AppBar position="fixed" style={{ backgroundColor: "black" }}>
            <Toolbar style={{alignItems:"center"}}>
                <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => setDrawerState(true)}>
                    <Menu />
                </IconButton>
                <div style={{width:"100%", paddingTop: 14}}>
                <p style={{textAlign:"center", fontFamily:"Courgette"}}></p>
                </div>

                <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => setDrawerState(true)}>
                    <AccountCircle />
                </IconButton>

            </Toolbar>
        </AppBar>
        </>

    )
}

export default AppDrawer;