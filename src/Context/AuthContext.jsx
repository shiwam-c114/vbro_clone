import React from 'react';
export const AuthContext = React.createContext()

export const AuthContextProvider = ({children}) => {
    const [id,setId] = React.useState()
    const movePage = (id) =>{
        setId(id)
        // console.log("abhi")
        // console.log(id)
    }
  return <AuthContext.Provider value = {{movePage,id}}>
      {children}
      </AuthContext.Provider>
   
  
}


