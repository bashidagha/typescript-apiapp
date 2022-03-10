import './App.css';
import {note as Note} from "./models/note.model"
import Header from './components/Header';
import ListNotes from './components/ListNotes';
import {useState, useEffect} from 'react';

function App() {

const [notes, setNotes] = useState<Note[]>([]);

useEffect(()=>{
  fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response => response.json())
  .then(data => setNotes(data))
  .catch(err => console.log(err))
},[])


  return (
    <>
      <Header/>
      <div className="container">
      <ListNotes notes={notes} setNotes={setNotes}/>
      </div>
    </>
  );
}

export default App;
