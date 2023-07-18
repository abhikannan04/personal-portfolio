import {createContext, useReducer} from 'react';
export const ThemeContext = createContext();
const IntialStage =  {darkmode:true};

const themeReducer = (state , action)=>
{
    switch(action.type)
    {
        case "TOGGLE" :
        {
            return {darkmode: !state.darkmode}
        }
        default:
            return state;
    }
}

export const ThemeProvider = (props)=>
{
    const [state , dispatch] = useReducer(themeReducer,IntialStage);

    return (
        <ThemeContext.Provider value={{state,dispatch}}>{props.children}</ThemeContext.Provider>
    );
}