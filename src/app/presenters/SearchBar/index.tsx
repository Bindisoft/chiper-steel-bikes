import { useGlobalContext } from "../../context/globalContext";
import { useState } from "react";
import { Grid, TextField, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useStyles } from "./Styles";
import { changeQuery } from "../../reducers/changeQuery";
import { getBikes } from "../../reducers/getBikes";
import { changeStatus } from "../../reducers/changeStatus";

const SearchBar = () => {
  
  const classes = useStyles();
  const [search, setSearch] = useState("");
  const { state, setState } = useGlobalContext();
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const onClickButton = () => {
    setState(changeStatus(state,'loading'));
    const stateWithQuery = changeQuery(state, search);
    getBikes(stateWithQuery).then(res => setState(res));
  };

  return (
    <Grid className={classes.root} container item md={12} spacing={2}>
      <Grid className={classes.textFieldContainer} container item md={9}>
        <TextField
          id="outlined-basic"
          label="Search Cases..."
          variant="outlined"
          fullWidth
          onChange={handleChange}
          value={search}
        />
      </Grid>
      <Grid className={classes.buttonContainer} container item md={3} sm={12}>
        <IconButton
          aria-label="search"
          className={classes.button}
          onClick={onClickButton}
        >
          <SearchIcon fontSize="large" />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default SearchBar;
