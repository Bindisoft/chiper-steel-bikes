
import { useGlobalContext } from "../../context/globalContext";
import { formatFull } from '../../utils/formatDate'
import { Grid, IconButton } from "@material-ui/core";
import VisibilityIcon from '@material-ui/icons/Visibility';
import { useStyles } from "./Styles";
import { bike } from "../../types/bike";
import { changeSection } from "../../reducers/changeSection";

const ItemBike = (props:bike) => {
  
  const classes = useStyles();
  const { state, setState } = useGlobalContext();

  const onClickButton = () => {
    const updateDetailBike = {...state, detailBike: props}
    const newState = changeSection(updateDetailBike, 'detail')
    setState(newState);
  };
  
  return (
    <Grid className={classes.root} container item md={12} spacing={2}>
      <Grid className={classes.imgContainer} container item md={3}>
        <img 
          className={classes.thumb}
          src={
            props.thumb ? props.thumb : process.env.PUBLIC_URL + '/default.png'
          }           
          alt={props.title}
        />
      </Grid>
      <Grid className={classes.textContainer} container item md={6} sm={12}>
        <Grid className={classes.title} item>{props.title}</Grid>
        <Grid className={classes.location} item>{props.stolen_location}</Grid>
        <Grid className={classes.date} item>
          {formatFull(props.date_stolen)}
        </Grid>
      </Grid>
      <Grid className={classes.buttonContainer} container item md={3} sm={12}>
        <IconButton
          aria-label="search"
          className={classes.button}
          onClick={onClickButton}
        >
          <VisibilityIcon fontSize="medium" />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default ItemBike;
