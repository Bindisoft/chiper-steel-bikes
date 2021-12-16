import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    height: "10vh",
    maxHeight: "10vh",
    [theme.breakpoints.down('sm')]: {
      height: "20vh",
      maxHeight: "20vh",
    },
  },
  title: {
    color:"#dbf10d",
    fontSize:"2rem",
    justifyContent:"center",
    textShadow: "3px 5px 8px #CE0000",
    [theme.breakpoints.down('sm')]: {
      fontSize:"1.7rem",
      justifyContent:"center"
    },
  },
  logoContainer:{
    justifyContent:"left",
    [theme.breakpoints.down('sm')]: {
      justifyContent:"center",
    },
  },
  logo: {
    height:"25vh",
    [theme.breakpoints.down('sm')]: {
      justifyContent:"center",
      height: "20vh",
      maxHeight: "20vh",
      margin: "-4vh"
    },
    [theme.breakpoints.down('xs')]: {
      //justifyContent:"center",
      height: "18vh",
      maxHeight: "18vh",
      margin: "-4vh"
    },
  },
}));
