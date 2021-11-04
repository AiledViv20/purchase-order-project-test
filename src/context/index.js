import React, { createContext, useReducer } from 'react';
import { initialState } from "./constants";
import { reducer } from "./reducer";

export const PurchaseOrderContext = createContext();

const PurchaseOrderProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return ( 
        <PurchaseOrderContext.Provider value={{ state, dispatch }}>
            {props.children}
        </PurchaseOrderContext.Provider>
    );
}
 
export default PurchaseOrderProvider;