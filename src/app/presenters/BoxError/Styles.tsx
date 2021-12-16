import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: "20vw!important",
    paddingRight: "20vw!important",
    height: "10vh",
  },
  iconContainer: {
    fontSize:"2rem",
    justifyContent:"right",
    alignItems:"center",
    [theme.breakpoints.down('sm')]: {
      fontSize:"1.7rem"
    },
  },
  textContainer:{
    fontSize:"2rem",
    fontWeight:"bold",
    justifyContent:"left",
    alignItems:"center",
    [theme.breakpoints.down('sm')]: {
      justifyContent:"center",
    },
  },
  icon:{
    background:"linear-gradient(to bottom, #583ee2 5%, #200c7e 100%)",
    color:"white",
    height: "fit-content"
  }
}));
