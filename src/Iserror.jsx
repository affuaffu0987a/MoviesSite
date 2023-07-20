import React from 'react'
import { useGlobalContext } from './context'

const Iserror = () => {
    const{isError}=useGlobalContext();
      return (
    <>
     {isError.show?<p>{isError.msg}</p>:isError.msg}
    </>
  )
}

export default Iserror
