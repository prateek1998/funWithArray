import { useMemo, createContext, useEffect, useContext, useReducer} from 'react';
import { CartProvider } from './cart.context';

const initialState = {
  themeMode: 'dark',
};

enum Types {
  Light = 'LIGHT_MODE',
  Dark = 'DARK_MODE',
}

const themeReducer = (state: any, action: any) => {
  const root = window.document.documentElement;
  switch (action.type) {
    case Types.Light:
      root.classList.remove('dark');
      root.classList.add("light");
      return { themeMode: 'light' };
    case Types.Dark:
      root.classList.remove('light');
      root.classList.add("dark");
      return { themeMode: 'dark' };
    default:
      return state;
  }
};

const ThemeContext = createContext<{state: any}>({state: initialState});

const ThemeProvider = (props: any) => {
  const [state, dispatch] = useReducer(themeReducer, initialState);
  const lightMode = () => dispatch({ type: Types.Light });
  const darkMode = () => dispatch({ type: Types.Dark });
  //     localStorage.setItem('themeMode', state.themeMode);
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light');
    root.classList.add("dark");
  }, [])
  const value = useMemo(
    () => ({
      ...state,
      lightMode,
      darkMode
    }),
    [state]
  );
  return <ThemeContext.Provider value={value} {...props} />;
};



export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error(`useUI must be used within a UIProvider`);
  }
  return context;
};

export const ManagedUIContext = ({ children }: any) => (
  <CartProvider>
    <ThemeProvider>{children}</ThemeProvider>
  </CartProvider>
);
