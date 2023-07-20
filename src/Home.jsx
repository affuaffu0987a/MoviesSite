import React from 'react'
import  Search  from './Search'
import Movies from './Movies'
import Isloading from './Isloading'
import Iserror from './Iserror'



const Home = () => {
  return (
    <>
    <Search/>
    <Iserror/>
    <Isloading/>
    <Movies/>
    </>
  )
}

export default Home
