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
    <div style={{padding: "10px", marginTop: "20px", display: "flex", justifyContent: "center"}}>
        <form onSubmit={handleSubmit} >
            <input style={{width: "500px", height: "50px", borderRadius: "5px", padding: "10px", fontSize: "16px"}}
                type="text" 
                placeholder="Search..." 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <button type="submit" style={{width: "100px", height: "70px", padding: "10px", borderRadius: "5px", backgroundColor: "#707070", color: "white", border: "none"}}>Search</button>
        </form>
    </div>
  )
}

export default SearchForm