import { createContext, useContext, useEffect, useState } from "react";
export const API_Key = `http://www.omdbapi.com/?apikey=eff00a54`;
const Appcontext=createContext();

const AppProvider=({children})=>{
    const[searchMovies,SetSearchMovies]=useState('movies')
    const[isLoading,setIsLoading]=useState(true);
    const[isError,setError]=useState({show:'false',msg:""})
    const[movies,setMovies]=useState([]);

   

    const getMovies=async(url)=>{
        setIsLoading(true);
        try{
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            if(data.Response==='True'){
            setIsLoading(false)
            setMovies(data.Search)
            setError({
                show:"false",
                msg:"",
            })
        }
        else{
            setError({
                show:"true",
                msg:`${data.Error}`
            });
        };
        }
        catch(error){
            console.log(error);
        }

        
    }

    useEffect(()=>{
        let timer=setTimeout(()=>{
            getMovies(`${API_Key}&s=${searchMovies}`)
        },800)
        return()=> clearTimeout(timer)
    },[searchMovies])
    return(
        <Appcontext.Provider value={{movies,isLoading,isError,searchMovies,SetSearchMovies}}>
            {children}
        </Appcontext.Provider>
    )
}
const useGlobalContext=()=>{
    return useContext(Appcontext);
}
export{Appcontext,AppProvider,useGlobalContext}