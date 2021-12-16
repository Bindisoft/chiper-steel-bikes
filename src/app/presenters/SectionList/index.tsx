import { Grid, Slide } from "@material-ui/core";
import { useStyles } from "./Styles";
import { useGlobalContext } from "../../context/globalContext";
import SearchBar from "../SearchBar";
import BoxLoading from "../BoxLoading";
import BoxEmpty from "../BoxEmpty";
import ListBikes from "../ListBikes";
import Pagination from "../Pagination";
import BoxError from "../BoxError";

const SectionList = () => {
  
  const classes = useStyles();
  const { state } = useGlobalContext();

  const TextCount = () => {
    if (state.status === "idle"){
      return (
        <Grid className={classes.count} container item md={12}>
          <Grid item>{`Gesamt: ${state.count} - Seite: ${state.page}`}</Grid>
        </Grid>
      )
    }
    return null;
  }
  
  return (
    <Slide
      direction="down"
      in={state.section === "list"}
      mountOnEnter
      unmountOnExit
    >
      <Grid className={classes.content} container spacing={3}>
        <SearchBar />
        <TextCount />
        {state.status === "idle" ? <ListBikes /> : null}
        {state.status === "idle" ? <Pagination /> : null}
        {state.status === "loading" ? <BoxLoading /> : null}
        {state.status === "empty" ? <BoxEmpty /> : null}
        {state.status === "failed" ? <BoxError /> : null}
      </Grid>
    </Slide>
  );
};

export default SectionList;
