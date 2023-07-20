import React from 'react'
import { useGlobalContext } from './context'

const Isloading = () => {
    const{isLoading}=useGlobalContext();
  return (
    <>
    {isLoading?<div className='isLoading'>
        <h3>Loading...</h3>
    </div>:null}
    </>
  )
}

export default Isloading
