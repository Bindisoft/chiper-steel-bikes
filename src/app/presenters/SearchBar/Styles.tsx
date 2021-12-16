import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: "28vw!important",
    paddingRight: "20vw!important",
    height: "15vh",
  },
  textFieldContainer: {
    fontSize:"2rem",
    justifyContent:"right",
    [theme.breakpoints.down('sm')]: {
      fontSize:"1.7rem"
    },
  },
  buttonContainer:{
    justifyContent:"left",
    [theme.breakpoints.down('sm')]: {
      justifyContent:"center",
    },
  },
  button:{
    background:"linear-gradient(to bottom, #583ee2 5%, #200c7e 100%)",
    color:"white",
    height: "fit-content"
  }
}));
