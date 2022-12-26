import './Games.css'
import  {useParams} from "react-router-dom";
import { useEffect, useState } from 'react';
import {useTheme} from '../../hooks/useTheme'
import { projectFirestore } from '../../firebase/config'


const Games = () => {
    const {id} = useParams()
    const {mode} = useTheme()


    const [error,setError] = useState(null)
    const [isPending, setPending] = useState(false)
    const [game, setGame] = useState(null)




    useEffect(() => {
      setPending(true)

      projectFirestore.collection('games').doc(id).get().then((doc) => {
        if (doc.exists) {
          setPending(false)
          setGame(doc.data())
        } else {
          setPending(false)
          setError('Could not find that game')
        }
      })
    }, [id])

    return ( 
        <div className={`game ${mode}`}>
            {error && <div className='error'>{error}</div>}
            {isPending && <p className='loading'>Pending...</p>}
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