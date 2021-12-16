import { Grid, CircularProgress } from "@material-ui/core";
import { useStyles } from "./Styles";

const BoxLoading = () => {
  
  const classes = useStyles();
  
  return (
    <Grid className={classes.root} container item md={12} spacing={2}>
      <Grid className={classes.iconContainer} container item md={6}>
        <CircularProgress />
      </Grid>
      <Grid className={classes.textContainer} container item md={6} sm={12}>
        Loading...
      </Grid>
    </Grid>
  );
};

export default BoxLoading;
