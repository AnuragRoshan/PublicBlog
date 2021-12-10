
import { AppBar, Toolbar, Typography, makeStyles} from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    component: {
        background: '#ffffff',
        color: 'grey'
    },
    container: {
        padding: 29,
        justifyContent: 'center'
        , '&>*': {
            padding: 20
        }
    },
    link:{
        textDecoration:'none',
        color:'inherit'
    }

})
const Navbar = () => {
    const classes = useStyles();
    return (

        <AppBar className={classes.component}>
            <Toolbar className={classes.container}>
               <Link to='/' className={classes.link}> <Typography>HOME</Typography></Link>
                <Typography  className={classes.link}>ABOUT</Typography>
                <Typography  className={classes.link}>CONTACT</Typography>
                <Typography  className={classes.link}>LOGIN</Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar