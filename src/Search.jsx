
import { useGlobalContext } from './context';

const Search = () => {
 const{searchMovies,SetSearchMovies}=useGlobalContext()
const SearchMovies=(e)=>{
  SetSearchMovies(e.target.value)
}

  return (
    <div className='search-bar'>
      <input type="search" placeholder='Search' value={searchMovies} onChange={SearchMovies} />
    </div>
  )
}

export default Search
