import './Games.css'
import  {useParams} from "react-router-dom";
import { useFetch } from '../../hooks/useFetch'



const Games = () => {
    const {id} = useParams()
    const { data: game, error, isPending} = useFetch(`http://localhost:3000/games/${id}`)
    return ( 
        <div className='game'>
            {error && <div className='error'>{error}</div>}
            {isPending && <div className='loading'>Pending...</div>}
            {game && (
        <>
          <h1 className="page-title">{game.title}</h1>
          <h3>{game.company}</h3>
          <h4>Damage: {game.price}</h4>
          <ul>
            {game.genre.map(g => <li key={g}>{g}</li>)}
          </ul>
          <p className="description">{game.description}</p>
        </>
      )}
        </div>
     );
}
 
export default Games;