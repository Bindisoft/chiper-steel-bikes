import { Box, Grid } from '@material-ui/core';
import { useStyles } from './Styles';

const TitleAndLogo = () => {

  const classes = useStyles();

  return (
    <Grid className={classes.root} container spacing={3}>
      <Grid className={classes.logoContainer} container item md={4} sm={12} xs={12}>
        <img className={classes.logo}
          src={process.env.PUBLIC_URL + '/logo.png'}
          alt="logo"
        />
      </Grid>
      <Grid className={classes.title} container item md={4} sm={12}>
        <Box>
          STOLEN BYKES
        </Box>
      </Grid>
    </Grid>
  )
}

export default TitleAndLogo