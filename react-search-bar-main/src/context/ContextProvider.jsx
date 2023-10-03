import React, { useState } from 'react'
import Context from './context'

const ContextProvider = ({children}) => {
    const [searchedTerm , setSearchedTerm] = useState("")
  return (
   <Context.Provider value={{
    searchedTerm,
    setSearchedTerm
   }}>{children}

   </Context.Provider>
  )
}

export default ContextProvider