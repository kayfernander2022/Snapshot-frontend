import React from 'react';

interface IGlobalContextProps{
 url?:string,
 token:string | undefined
 setGlobalToken(token:string|undefined): void
}

// Context to access these values from anywhere in the application
export const GlobalCtx = React.createContext<IGlobalContextProps>({url:"http://localhost:4040", token: undefined, setGlobalToken:() =>{}});
