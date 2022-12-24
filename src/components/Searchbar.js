import  './Searchbar.css'
import { useState } from 'react';
import { useHistory} from 'react-router-dom'




const Searchbar = () => {
    const [terms, setTerms] = useState('')
    const history = useHistory()

const handleSubmit = (e) => {
    e.preventDefault()
    history.push(`/search?q=${terms}`)
}

    return (  

        <div className='searchbar'>
            <form onSubmit={handleSubmit}>
                <label htmlFor='search'>Search</label>
                <input type="text"
                id='search'
                onChange={(e) => setTerms(e.target.value)}
                required
                
                />
            </form>
        </div>
    );
}
 
export default Searchbar;