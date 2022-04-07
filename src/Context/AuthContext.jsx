import React from 'react';
export const AuthContext = React.createContext()

export const AuthContextProvider = ({children}) => {
    const movePage = (id) =>{
        console.log("abhi")
        console.log(id)
    }
  return <AuthContext.Provider value = {{movePage}}>
      {children}
      </AuthContext.Provider>
   
  
}


