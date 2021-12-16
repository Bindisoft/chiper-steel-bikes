import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme)=>({
  content:{
    paddingTop: "4vh",
    height: "84vh",
    maxHeight: "84vh",
    borderRadius: "16px",
    borderWidth: "1px",
    borderColor:"#d9d9d9",
    backgroundColor: "#f2f2f2",
    boxShadow: "0px 3px 4px 1px rgba(0,0,0,0.6)",
    alignContent: "flex-start",
    [theme.breakpoints.down('sm')]: {
      paddingTop: "8vh",
    },
  },
  features:{
    paddingLeft: "16vw!important",
  },
  stolen:{
    color:"#720606",
    fontSize: "1.3rem",
    fontWeight: "bold"
  },
  title:{
    color:"#200C7E",
    fontSize: "1.4rem",
    fontWeight: "bold"
  },
  subtitle:{
    color:"#000",
    fontSize: "1rem",
    fontWeight: "bold"
  },
  description:{
    paddingRight: "10vw!important",
  },
  imgContainer:{
    paddingTop: "4vh",
    justifyContent: "center",
  },
  img:{
    maxHeight: "45vh",
    maxWidth: "45vw",
  },
  buttonContainer:{
    justifyContent:"center",
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
