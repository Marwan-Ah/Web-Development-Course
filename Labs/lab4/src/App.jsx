import { useState } from "react";
import './App.css'

function App() {
  const [id, setId] = useState(0)
  const [movies, setMovies] = useState([])
  const addMovie = (movie) => {
    setMovies([...movies, movie])
  }
  
  const incrementID = (id) => {
    setId(id+1);
  }

  const deleteMovie = (id) => {
    setMovies(movies.filter((movie) => movie.id !== id));
  };
  
  return (
    <>
      <Hdr />
      <Mlist Movies={movies} Delt={deleteMovie} />
      <EntryForm AddMovies={addMovie} ID={id} Incrementer={incrementID} />
    </>
  )
}

function EntryForm({AddMovies, ID, Incrementer}){
  
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [rating, setRating] = useState("")
  
  const handleAdd = () => {
    if (!name || !description || !rating) {
      alert("Please fill all fields!");
      return;
    }

    AddMovies({ name, description, rating, id: ID });
    Incrementer(ID)
    setName("")
    setDescription("")
    setRating("")
    console.log("first")
  };

  
  return(
  <div>
    <label>Name:</label>
    <input type="text" value={name} onChange={(e) =>{ setName(e.target.value)}} />
    <div>
    <label>Description:</label>
    <input type="text" value={description} onChange={(e) =>{ setDescription(e.target.value)}} />
    </div>
     <div>
    <label>Rating:</label>
    <input type="number" value={rating} onChange={(e) =>{ setRating(e.target.value)}} />
      </div>
    <button onClick={handleAdd}>Add Movie</button>
  
  </div>
  )
}

function Hdr(){
  return(
    <h1>Movie List</h1>
  )
}

function Mlist({ Movies, Delt }) {
  return (
    <ul>
      {Movies.map((movie, index) => (
        <li key={index} >
          {movie.name} — {movie.description} ⭐{movie.rating} <button onClick={() => Delt(movie.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
export default App
