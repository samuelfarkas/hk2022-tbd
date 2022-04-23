import React, { createContext, FC, useState } from 'react';

interface GlobalState {
    isLoggedIn: boolean
}

const initState: GlobalState = {
    isLoggedIn: false
}

const GlobalState = createContext<{ state: GlobalState, setState: React.Dispatch<React.SetStateAction<GlobalState>> }>({
    state: initState,
    setState: (v) => {
    }
})

const GlobalStateProvider: FC<{ children: React.ReactNode }> = ({children}) => {
    const [state, setState] = useState<GlobalState>(initState)

    return (
        <GlobalState.Provider value={{state, setState}}>
            {children}
        </GlobalState.Provider>
    );
};

export default GlobalStateProvider;
