
import { AppBar, Toolbar, Typography, makeStyles, colors } from '@material-ui/core';
const useStyles = makeStyles({
    component: {
        background: '#ffffff',
        color: 'grey'
    },
    container: {
        padding: 30,
        justifyContent: 'center'
        , '&>*': {
            padding: 20
        }
    }

})
const Navbar = () => {
    const classes = useStyles();
    return (

        <AppBar className={classes.component}>
            <Toolbar className={classes.container}>
                <Typography>HOME</Typography>
                <Typography>ABOUT</Typography>
                <Typography>CONTACT</Typography>
                <Typography>LOGIN</Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar