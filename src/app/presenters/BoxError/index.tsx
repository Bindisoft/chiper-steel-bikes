import { Grid } from "@material-ui/core";
import ErrorIcon from '@material-ui/icons/Error';
import { useStyles } from "./Styles";

const BoxError = () => {
  
  const classes = useStyles();
  
  return (
    <Grid className={classes.root} container item md={12} spacing={2}>
      <Grid className={classes.iconContainer} container item md={6}>
        <ErrorIcon className={classes.icon} fontSize="large"/>
      </Grid>
      <Grid className={classes.textContainer} container item md={6} sm={12}>
        Oooops… Something went wrong.
      </Grid>
    </Grid>
  );
};

export default BoxError;
