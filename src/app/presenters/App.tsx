import { useState, useEffect } from 'react';
import { useStyles } from "./Styles";
import { GlobalContext } from '../context/globalContext';
import { stateApp } from '../types/stateApp';
import { initialState } from '../data/initialState';
import { getBikes } from "../reducers/getBikes"
import TitleAndLogo from './TitleAndLogo';
import SectionList from './SectionList';
import SectionDetail from './SectionDetail';

function App() {

  const [state, setState] = useState<stateApp>(initialState)
  const classes = useStyles();

  useEffect(() => {
    setState({ ...state, status: 'loading' })
    getBikes(state).then((res)=>{setState(res)})
  },[]);

  return (
    <GlobalContext.Provider value= {{ state, setState }}>
      <div className={classes.root}>
        <TitleAndLogo />
        <SectionList />
        <SectionDetail />
      </div>
    </GlobalContext.Provider>
    
  );
}

export default App;
