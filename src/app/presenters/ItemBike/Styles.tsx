import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "10px",
    height: "13vh",
    backgroundColor: "#fff",
    boxShadow: "0px 4px 5px -2px #000000"
  },
  imgContainer: {
    justifyContent:"center",
    alignItems:"center",
    [theme.breakpoints.down('sm')]: {
      fontSize:"1.7rem"
    },
  },
  thumb: {
    height: "10vh"
  },
  textContainer:{
    flexDirection:"column",
    justifyContent:"left",
    alignItems:"left",
    [theme.breakpoints.down('sm')]: {
      justifyContent:"center",
    },
  },
  title: {
    color: "#200c7e",
    fontSize: "1rem",
    fontWeight: "bold"
  },
  location: {
    color: "#203135",
    fontSize: "0.8rem",
    fontWeight: "bold"
  },
  date: {
    color: "#000",
    fontSize: "0.8rem",
    fontWeight: "bold"
  },
  buttonContainer:{
    justifyContent:"left",
    alignItems:"center",
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
