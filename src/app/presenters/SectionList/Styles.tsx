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
  count:{
    fontSize: "1rem",
    fontWeight: "bold",
    color: "#203135",
    textAlign: "center",
    justifyContent: "center"
  }
}));
