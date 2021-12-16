import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: "center",
    paddingTop: "5vh!important",
    paddingLeft: "15vw!important",
    paddingRight: "15vw!important",
    gap: "5px"
  },
  btn:{
    height: "5vh",
    background:"linear-gradient(to bottom, #583ee2 5%, #200c7e 100%)",
    color:"#fff",
    '&.Mui-disabled': {
      color: "#fff",
      opacity: 0.5,
    },
  }
}));
