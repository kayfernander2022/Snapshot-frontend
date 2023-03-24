import React from 'react';
import User from './models/user'

interface IAuthContextProps{
 url?:string,
 currentUser: User | undefined,
 setUserContext: React.Dispatch<React.SetStateAction<User | undefined>>
}

// Context to access these values from anywhere in the application / this is central location
export const AuthContext: React.Context<IAuthContextProps | undefined> = React.createContext<IAuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<any> =({children}) => {
  const [currentUser, setUserContext] = React.useState<User | undefined>(undefined);

  return (
    <AuthContext.Provider value={{url:'http://localhost:4040', currentUser, setUserContext}}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuthContext = () => {
  const authContext = React.useContext(AuthContext);

  if(authContext === undefined){
    throw new Error('useAuthContext is not called with an AuthProvider');
  }

  return authContext;
}
