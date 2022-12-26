
import { Link } from 'react-router-dom';
import './GameList.css'
import { useTheme } from '../hooks/useTheme'
import trashcan from '../assets/trashcan.svg'
import { projectFirestore } from '../firebase/config'


const GameList = ({games}) => {
    const { mode } = useTheme()

    const handleDelete = (id) => {
        projectFirestore.collection('games').doc(id).delete()
    }


    return (
        <div className='gamelist'>
            {games && games.map(game => (
             <div key={game.id} className={`card ${mode}`}>
                <h1>{game.title}</h1>
                <div>{game.description.substring(0,100)} ...</div>
                <Link to={`/games/${game.id}`}>More Info</Link>
                <img 
                className='delete'
                src={trashcan} alt="delete game icon"
                onClick={() => handleDelete(game.id)}
                />
                </div>
            ))}
        </div>
       
     );
}
 
export default GameList;
