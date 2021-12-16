import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme)=>({
  root: {
    height: "100vh",
    maxHeight: "100vh",
    width: "100vw",
    backgroundSize: "contain",
    backgroundPosition: "top",
    backgroundRepeat: "no-repeat",
    paddingTop: "7vh",
    paddingBottom: "5vh",
    paddingLeft: "5vw",
    paddingRight: "5vw",
    [theme.breakpoints.down('sm')]: {
      paddingTop: "5vh",
      paddingBottom: "3vh",
      paddingLeft: "3vw",
      paddingRight: "3vw",
    },
    backgroundImage: `url(${process.env.PUBLIC_URL + '/bg.png'})`,
    overflowY:"hidden"
  }
}));
