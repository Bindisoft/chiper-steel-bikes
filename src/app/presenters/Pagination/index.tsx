
import { useGlobalContext } from "../../context/globalContext";
import { Button, Grid } from "@material-ui/core";
import { useStyles } from "./Styles";
import { pag } from "../../utils/pagination";
import { getBikes } from "../../reducers/getBikes";
import { changeStatus } from "../../reducers/changeStatus";
import { changePage } from "../../reducers/changePage";

const Pagination = () => {
  
  const classes = useStyles();
  const { state, setState } = useGlobalContext();
  const p = pag(state.page,state.count);

  const onClickButton = (page: number) => {
    setState(changeStatus(state,'loading'));
    const stateWithPage = changePage(state, page);
    getBikes(stateWithPage).then(res => setState(res));
  }
  
  return (
    <Grid className={classes.root} container item md={12} spacing={2}>
      <Button
        size="medium" 
        className={classes.btn} 
        disabled={p['first']}
        onClick={()=>onClickButton(1)}
        >
        {'Firts'}
      </Button>
      <Button 
        size="medium" 
        className={classes.btn} 
        disabled={p['prev']}
        onClick={()=>onClickButton(state.page-1)}
        >
        {'Prev'}
      </Button>
      <Button 
        size="medium" 
        className={classes.btn}
        >
        {state.page}
      </Button>
      <Button 
        size="medium" 
        className={classes.btn}
        disabled={p['next']}
        onClick={()=>onClickButton(state.page+1)}
        >  
        {'Next'}
      </Button>
      <Button 
        size="medium"
        className={classes.btn}
        disabled={p['last']}
        onClick={()=>onClickButton(p['totalPages'])}
        >
        {'Last'}
      </Button>
    </Grid>
  );
};

export default Pagination;
