import { createContext, useContext, useEffect, useState } from "react";

const API_Key= `http://www.omdbapi.com/?apikey=eff00a54&s='titanic'`;
const Appcontext=createContext();

const AppProvider=({children})=>{
    const[isLoading,setIsLoading]=useState(true);
    const[isError,setError]=useState({show:'false',msg:""})
    const[movies,setMovies]=useState([]);

   

    const getMovies=async(url)=>{
        try{
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            if(data.Response==='True'){
            setIsLoading(false)
            setMovies(data.Search)
        }
        else{
            setError({
                show:"true",
                msg:"The Error show"
            });
        };
        }
        catch(error){
            console.log(error);
        }

        
    }

    useEffect(()=>{
        getMovies(API_Key)
    },[])
    return(
        <Appcontext.Provider value={{movies,isLoading,isError}}>
            {children}
        </Appcontext.Provider>
    )
}
const useGlobalContext=()=>{
    return useContext(Appcontext);
}
export{Appcontext,AppProvider,useGlobalContext}