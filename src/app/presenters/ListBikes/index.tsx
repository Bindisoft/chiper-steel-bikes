
import { useGlobalContext } from "../../context/globalContext";
import { Grid } from "@material-ui/core";
import { useStyles } from "./Styles";
import { bike } from "../../types/bike";
import ItemBike from "../ItemBike";

const ListBikes = () => {
  
  const classes = useStyles();
  const { state } = useGlobalContext();

  const List = state.listBikes.map((bike: bike) => {
    return <ItemBike key={bike.id} {...bike} />
  })
  
  return (
    <Grid className={classes.root} container item md={12} spacing={2}>
      {List}
    </Grid>
  );
};

export default ListBikes;
