import { Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './App.css'

import BookCard from './components/BookCard'
import SearchResults from './components/SearchResults'


function App() {
    const [search, setSearch] = useState("")
    const [query, setQuery] = useState("James+Bond")
  
return (
<>
      {<SearchResults query={query} setQuery={setQuery} search={search} setSearch={setSearch}/>}
      <BookCard query={query} setQuery={setQuery}/>
</>
)
}

export default App
