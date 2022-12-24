import './Home.css'
import { useFetch } from '../../hooks/useFetch'
import GameList from '../../components/GameList';


const Home = () => {
    const { data:games, error, isPending } = useFetch('http://localhost:3000/games')
    return ( 
        <div className='home'>
            {error && <div className='error'>{error}</div>}
            {isPending && <div className='loading'> <p>Pending...</p></div> }
            {games && <GameList games={games}/>  }
        </div>
     );
}
 
export default Home;
