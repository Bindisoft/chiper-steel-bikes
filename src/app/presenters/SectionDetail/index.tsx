import { Grid, Slide, IconButton } from "@material-ui/core";
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { useStyles } from "./Styles";
import { useGlobalContext } from "../../context/globalContext";
import { formatFull } from '../../utils/formatDate'
import { changeSection } from "../../reducers/changeSection";

const SectionDetail = () => {
  
  const classes = useStyles();
  const { state, setState } = useGlobalContext();

  const onclickButton = () => {
    const newState = changeSection(state, 'list');
    setState(newState);
  }
  
  return (
    <Slide
      direction="down"
      in={state.section === "detail"}
      mountOnEnter
      unmountOnExit
    >
      <Grid className={classes.content} container spacing={3}>
        <Grid className={classes.features} container item md={6}>
          <Grid className={classes.stolen} item md={12}>STOLEN:</Grid>
          <Grid className={classes.title} item md={12}>{state.detailBike?.title}</Grid>
          <Grid className={classes.subtitle} item md={12}>Serial:</Grid>
          <Grid item md={12}>{state.detailBike?.serial}</Grid>
          <Grid className={classes.subtitle} item md={12}>Model:</Grid>
          <Grid item md={12}>{state.detailBike?.frame_model}</Grid>
          <Grid className={classes.subtitle} item md={12}>Primary Color:</Grid>
          <Grid item md={12}>{state.detailBike?.frame_colors}</Grid>
          <Grid className={classes.subtitle} item md={12}>Manufacturer:</Grid>
          <Grid item md={12}>{state.detailBike?.manufacturer_name}</Grid>
          <Grid className={classes.subtitle} item md={12}>Date Stolen:</Grid>
          <Grid item md={12}>{formatFull(state.detailBike?.date_stolen)}</Grid>
        </Grid>
        <Grid className={classes.description} container item md={6}>
          <Grid className={classes.subtitle} item md={12}>Description of incident:</Grid>
          <Grid item md={12}>{state.detailBike?.description}</Grid>
          <Grid className={classes.imgContainer} item md={12}>
            <img 
              className={classes.img}
              src={
                state.detailBike?.large_img ? state.detailBike?.large_img : process.env.PUBLIC_URL + '/default.png'
              }           
              alt={state.detailBike?.title}
        /></Grid>
        </Grid>
        <Grid className={classes.buttonContainer}  container item md={12}>
          <IconButton
            aria-label="search"
            className={classes.button}
            onClick={onclickButton}
          >
            <KeyboardArrowUpIcon fontSize="large" />
          </IconButton>
        </Grid>
      </Grid>
    </Slide>
  );
};

export default SectionDetail;
