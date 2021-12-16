import { Grid } from "@material-ui/core";
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import { useStyles } from "./Styles";

const BoxEmpty = () => {
  
  const classes = useStyles();
  
  return (
    <Grid className={classes.root} container item md={12} spacing={2}>
      <Grid className={classes.iconContainer} container item md={6}>
        <VisibilityOffIcon className={classes.icon} fontSize="large"/>
      </Grid>
      <Grid className={classes.textContainer} container item md={6} sm={12}>
        No Results...
      </Grid>
    </Grid>
  );
};

export default BoxEmpty;
