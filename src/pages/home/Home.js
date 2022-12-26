import './Home.css'
import { projectFirestore } from '../../firebase/config'
import { useState, useEffect } from 'react'
import GameList from '../../components/GameList';


const Home = () => {
  const [data, setData] = useState(null)
  const [isPending, setPending] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    setPending(true)

    const unsub = projectFirestore.collection('games').onSnapshot(snapshot => {
      if (snapshot.empty) {
        setError('No recipes to load')
        setPending(false)
      } else {
        let results = []
        snapshot.docs.forEach(doc => {
          // console.log(doc)
          results.push({ ...doc.data(), id: doc.id })
        })
        setData(results)
        setPending(false)
      }
    }, (err) => {
      setError(err.message)
      setPending(false)
    })

    return () => unsub()

  }, [])


    return ( 
        <div className='home'>
            {error && <div className='error'>{error}</div>}
            {isPending && <div className='loading'> <p>Pending...</p></div> }
            {data && <GameList games={data}/>  }
        </div>
     );
}
 
export default Home;
