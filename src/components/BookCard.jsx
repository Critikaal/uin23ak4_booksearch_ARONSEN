import { useEffect, useState } from "react"

export default function BookCard({query, setQuery}){
const [content, setContent] = useState([])
  

  const getBook = async() =>{
    try{
      const response = await fetch(`https://openlibrary.org/search.json?title=${query}`)
      const data = await response.json()
      setContent(data)
      console.log(data.docs[0].title)
    }catch{
      console.error("Det har skjedd en feil")
     
    }
  }
  

    useEffect(()=>{
        getBook()
    },[query])
    return(
        <>
      <main>
        {content.docs?.map(item => (
            <div>
                <img src={`https://covers.openlibrary.org/b/id/${item.cover_i}-M.jpg`} alt={item.title} />
                <div>
                    <h2>{item.title}</h2>
                    <h3>Av {item.author_name}</h3>
                    <p>Publisert først i {item.first_publish_year}</p>
                    <p>{item.ratings_average} av 5 Stjerner</p>
                    <a href={`https://www.amazon.com/s?k=${item.id_amazon}`}>Kjøp boken her</a>
                </div>
            </div>
    
        ))}
    </main>
        
    {/*
    <img src="src/assets/111376-M.jpg" alt="" />
        <div>
          <h2>{content.docs[0].title}</h2>
          <h3>av {content.docs[0].author_name}</h3>
          <p>Publisert først i {content.docs[0].first_publish_year}</p>
          <p>Vurdering: {content.docs[0].ratings_average} Stjerner</p>
          <a href="https://www.amazon.com/dp/0143037668/">Kjøp boken her</a>
        </div> */}
        </>
    )
        
}