import { useReducer } from "react";
import Reducers from './Reducers';
import Context from "./Context";

const ContextProvider = (props) => {
  const initialState = {
    language: 'english',
    //portfolio: []
  };

  const [state, dispatch] = useReducer(Reducers, initialState);

  const changeLanguage = (language) => {
    dispatch({ type: 'CHANGE_LANGUAGE', payload: language })
  };
  //const getPortfolioData = () => {}

  // Context //
  
  const context = {
    language: state.language,
    changeLanguage,
    //getPortfolioData
  } 

  return (
    <Context.Provider value={context}>
      {props.children}
    </Context.Provider>
  )





}
export default ContextProvider;