import { useState } from 'react'
import './App.css'

function NoteInput({title, setTitle, desc, setDesc}) {
  return (
    <div className='note-input'>
      <input 
        placeholder='Enter Title'
        value= {title}
        onChange= {(event) =>
          setTitle(event.target.value)
        }
      />
      <input
        placeholder='Enter Description'
        value = {desc}
        onChange={(event) =>
          setDesc(event.target.value)
        }
      />
      
    </div>
  )
}

function Notes({notes, deleteNote}) {
  return (
    <div>
      {
        notes.length === 0 ?
        <p>No notes to display</p>
        :
        (
          <ul>
            {notes.map((note) => (
              <li key = {note.id}>
                <h3>{note.title}</h3>
                <p>{note.desc}</p>
                <DeleteNote deleteNote={() => deleteNote(note.id)} />
              </li>
            ))}
          </ul>
        )
      }
    </div>
  )
}

function DeleteNote({deleteNote}) {
  return (
      <button onClick={deleteNote}>
        Delete Note
      </button>
  )
}

function App() {
  const [title,setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [notes, setNotes] = useState([]);
  
  function addNotes() {
    if(title.trim() === "" || desc.trim() === ""){
      setTitle("");
      setDesc("");
      return;
    }
    setNotes([...notes,
      {
        id:Date.now(),
        title,
        desc
      }
    ])
    setTitle("");
    setDesc("");
  }

  function deleteNote(id){
    setNotes(notes.filter((note) =>
      note.id !== id
    ));
  }

  return (
    <div className="container">
      <h1>Notes App</h1>
      <NoteInput 
        title = {title}
        setTitle = {setTitle}
        desc = {desc}
        setDesc = {setDesc}
      />
      <button onClick={addNotes}>
        Add Note
      </button>
      <Notes 
        notes = {notes}
        deleteNote = {deleteNote}
      />
    </div>
  )
}

export default App
