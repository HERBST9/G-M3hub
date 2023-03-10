import { useLocation } from 'react-router-dom';
import './Search.css'
import {useFetch} from '../../hooks/useFetch'
import GameList from '../../components/GameList'


const Search = () => {
    const queryString = useLocation().search
    const queryParams = new URLSearchParams(queryString)
    const query = queryParams.get('q')

    const url = 'http://localhost:3000/games?q=' + query
    const {error, isPending, data} = useFetch(url)

    return ( 

        <div>
            <h2 className='page-title'>Games including "{query}"</h2>
            {error && <p className='error'>{error}</p>}
            {isPending && <p className='loading'>Pending...</p> }
            {data && <GameList games={data}/>}
        </div>
        
     );
}
 
export default Search;
