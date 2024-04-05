import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export default function SearchResults({query, setQuery, search, setSearch}){
  
  
 

  

  

    function handleSubmit (e){
        if (search.length < 3){
          alert("Søket må inneholde minst 3 tegn!")
        }
        else {
          e.preventDefault()
        setQuery(search)
        }
    }

    function handleChange (event){
        setSearch(event.target.value)

    }
    return(
    <>
     <nav className="topnav">
    <a className="active" href=''>Boksøk</a>
    <div className="search-container">
      <form onSubmit={handleSubmit}>
        <button type="submit"><FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#ffffff"}} /></button>
        <input type="text" placeholder="Søk etter bøker..." name="search" id="search" onChange={handleChange}/>
      </form>
    </div> 
    <p></p>
  </nav>
    </>
    )
}