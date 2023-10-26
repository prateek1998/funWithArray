import { useEffect, createContext, useReducer, Dispatch } from 'react';

const initialState = {
  themeMode: 'light',
};

enum Types {
  Light = 'LIGHT_MODE',
  Dark = 'DARK_MODE',
}

const themeReducer = (state: any, action: any) => {
  switch (action.type) {
    case Types.Light:
      return { themeMode: 'light' };
    case Types.Dark:
      return { themeMode: 'dark' };
    default:
      return state;
  }
};

const ThemeContext = createContext<{
  state: any;
  dispatch: Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null,
});

const ThemeProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  const themeChanger = (state: any) => {
    const isDark = state.themeMode === 'dark';
    const root = window.document.documentElement;
    root.classList.remove(isDark ? 'light' : 'dark');
    root.classList.add(state.themeMode);
    localStorage.setItem('themeMode', state.themeMode);
  };
  useEffect(() => {
    // let getLocalTheme = localStorage.getItem('themeMode');
    // console.log(getLocalTheme);
    //   // themeChanger({themeMode:getLocalTheme})
    // // themeChanger()
    // // if(getLocalTheme)
    // // else
    themeChanger(state);
  }, [state]);

  return <ThemeContext.Provider value={{ state, dispatch }}>{children}</ThemeContext.Provider>;
};

export { Types, ThemeProvider, ThemeContext };
