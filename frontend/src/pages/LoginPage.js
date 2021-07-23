import React, { useRef, useState } from "react";
import { Button, TextField } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';



const style = {
    flexContainer: {
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
    },

    buttonsContainer: {
        border: "1px solid red",
        display: "flex",
        justifyContent: "center",
    },

    button: {
        margin: 10,
        minWidth: "50%",
        maxWidth: "60%"
    },

    textFields: {
        border: "1px solid red",

        display: "flex",
        flexDirection:"column",
        justifyContent: "center",
        alignItems: "center"

    },

    loginArea: {
        border: "1px solid red",
        height: "60vh",
        width: "70vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
        

    }
};

function LoginPage() {
    const classes = useStyles();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const login = () => {

        const loginInfo = JSON.stringify({
            email: username,
            password: password
        })
        try {
            axios({

                method: 'post',
                url: 'http://localhost:5000/api/user/login',
                data: loginInfo,
                headers: {
                    'Content-Type': 'application/json'
                },

            }).then(res => {
                console.log(res.data);

            }).catch(err => console.log(err))
        } catch (err) {
            console.log(err)
        }


    }


    return (
        <div style={style.flexContainer}>
            <div style={style.loginArea}>
            <form className={classes.root} style ={style.textFields}  noValidate autoComplete="off">
                <TextField id="outlined-basic" label="Login" variant="outlined" color="primary" onChange={(c) => setUsername(c.target.value)} />
                <TextField id="outlined-basic" label="Password" variant="outlined" type="password" onChange={(c) => setPassword(c.target.value)} />
                

            </form>
            <h6>forgot password</h6>

            <div style={style.buttonsContainer}>
                <Button variant="contained" style={style.button} onClick={login}>
                    Login
                </Button>
                
            </div>
            <div>
                <h6>New User? Register Here</h6>
               
            </div>
            </div>
        </div>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

export default LoginPage;
