import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const SearchForm = () => {
    const [search, setSearch] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate(`/search?q=${search}`)
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Search..." 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <button type="submit">Search</button>
        </form>
    </div>
  )
}

export default SearchForm