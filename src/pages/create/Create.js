import { useState, useRef, useEffect } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useHistory} from 'react-router-dom'
import './Create.css'


const Create = () => {
    const [title,  setTitle] = useState('')
    const [company, setCompany] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [ newGenre, setNewGenre] = useState('')
    const [genre, setGenre] = useState([])
    const genFocus = useRef(null)
    const {postData, data, error} = useFetch('http://localhost:3000/games', "POST")
    const history = useHistory()


    const handleSubmit = (e) => {
        e.preventDefault()
         postData({
            title,company,description,price,genre
         })
    }


    const handleAdd = (e) => {
        e.preventDefault()
        const gen = newGenre.trim()

        if(gen && !genre.includes(gen)) {
            setGenre(prevGenre => [...prevGenre, gen])
        }
        setNewGenre('')
        genFocus.current.focus()
    }

    useEffect(() => {
        if(data) {
            history.push('/')
        }
    },[data])



    return (  
        <div className='create'>
            <h1>Add New Game</h1>

            <form onSubmit={handleSubmit}>

                <label>
                    <span>Title:</span>
                    <input 
                    type="text" 
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    required/>
                </label>

                    <label>
                    <span>Genre:</span>
                    <div className='genre'> 
                      <input 
                      type="text" 
                      onChange={(e) => setNewGenre(e.target.value)}
                      value={newGenre}
                      ref={genFocus}
                      />
                     <button className='btn' onClick={handleAdd}>Add</button>
                    </div>
                </label>
                <p>Genres: {genre.map(g => <em key={g}>{g}, </em>)}</p>

                
                
                
                <label>
                    <span>Company:</span>
                    <input 
                    type="text" 
                    onChange={(e) => setCompany(e.target.value)}
                    value={company}
                    required/>
                </label>
                <label>
                    <span>Price:</span>
                    <input 
                    type="text" 
                    onChange={(e) => setPrice(e.target.value)}
                    value={price}
                    required/>
                </label>
                <label>
                    <span>Description:</span>
                    <input 
                    type="text" 
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    required/>
                </label>
            <button className='btn'>Add</button>

            </form>
        </div>
    );
}
 
export default Create;