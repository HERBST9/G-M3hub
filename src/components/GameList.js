
import { Link } from 'react-router-dom';
import './GameList.css'

const GameList = ({games}) => {

    return (
        <div className='gamelist'>
            {games && games.map(game => (
             <div key={game.id} className="card">
                <h1>{game.title}</h1>
                <div>
                {game.description.substring(0,100)} ...</div>
                <Link to={`/games/${game.id}`}>More Info</Link>
                </div>
            ))}
        </div>
       
     );
}
 
export default GameList;
