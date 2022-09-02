import React, { useState, useEffect } from "react";
import getState from "./store";

interface StoreState  {
    actions: object;
    store: object;
}

export const Context = React.createContext<StoreState | null>(null);

const injectContext = ({ PassedComponent } : any ) => {
	const StoreWrapper = (props: any) => {
		const [state, setState] = useState<StoreState>(
			getState({
				getStore: () => state.store,
				getActions: () => state.actions,
				setStore: (updatedStore: object) =>
					setState({
						store: Object.assign(state.store, updatedStore),
						actions: { ...state.actions }
					})
			})
		);
		useEffect(() => {
				
		}, []);

    return (
      <Context.Provider value={state || null}>
        <PassedComponent {...props} />
      </Context.Provider>
    );
  };
  return StoreWrapper;
};

export default injectContext;