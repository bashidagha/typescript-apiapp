import {note as Note} from "../models/note.model"

interface IListNotesProps {
    notes : Note[],
    setNotes : React.Dispatch<React.SetStateAction<Note[]>>
}

const ListNotes: React.FunctionComponent<IListNotesProps> = ({notes, setNotes}) => {

  const handleDelete = (myid:string) => setNotes(notes.filter(note=>note.id !== myid));

  return(
  <>
    <h2>My Notes</h2>
    {notes.map((note)=>(
    <div className="mt-4 p-5 bg-primary text-black rounded" key={note.id}>
      <h1>{note.title}</h1>
      <p>{note.body}</p>
      <button className="btn btn-danger" onClick={()=> handleDelete(note.id)}>Delete Item</button>
    </div>
    ))
    }
  </>
);
}
export default ListNotes;
