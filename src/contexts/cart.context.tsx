import { useMemo, createContext, useContext, useReducer } from 'react';

const initialState = {
    total: 0,
    initialItems: ["React", "React native", "javascript", "Typescript"],
    finalItems: [],
};

enum Types {
    init = 'INIT_MODE',
    push = 'PUSH_MODE',
    pop = 'POP_MODE',
    update = 'UPDATE_MODE',
    length = 'LENGTH_MODE',
}

const pushItemToCart = (items: Array<string>, item:any) => items.push(item)
const popItemToCart = (items: Array<string>) => items.pop()
const itemsLength = (items: Array<string>) => console.log(items);
const initState = (items: any) => items.finalItems = [...items.initialItems];
const updateInitialState = (items: any, item: Array<string>) => items.initialItems = item;
const generateFinalState = (state: any) => {
    return {
        ...state,
        total: state.finalItems.length,
    };
}

const cartReducer = (state: any, action: any) => {
    let items;       
    switch (action.type) {
        case Types.init:
            initState(state)
            return generateFinalState(state);
        case Types.push:
            items = pushItemToCart(state.items, action.item);
            return generateFinalState(state)
        case Types.pop:
            popItemToCart(state.finalItems);
            return generateFinalState(state)            
        case Types.length:
            items = itemsLength(state.items);
            return generateFinalState(state)
        case Types.update:
            updateInitialState(state, action.item);
            initState(state);
            return generateFinalState(state);
        default:
            return state;
    }
};


const CartContext = createContext(undefined);
const CartProvider = (props: any) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    const pushItem = (item: any) =>
        dispatch({ type: Types.push, item });

    const popItem = () =>
        dispatch({ type: Types.pop });

    const lenItem = () =>
        dispatch({ type: Types.length });

    const updateItem = (item: any) =>
        dispatch({ type: Types.update, item });

    const initItem = () =>
        dispatch({ type: Types.init });

    const value = useMemo(
        () => ({
            ...state,
            pushItem,
            popItem,
            initItem, 
            updateItem,
            lenItem
        }),
        [state]
    );
    
    return <CartContext.Provider value={value} {...props} />;
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (context === undefined) {
      throw new Error(`useUI must be used within a UIProvider`);
    }
    return context;
  };
  

export { Types, CartProvider, CartContext };
