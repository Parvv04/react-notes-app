import { useState } from 'react'
import './App.css'

function App() {
  const [title,setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [notes, setNotes] = useState([]);
  
  function addNotes() {
    if(title.trim() == "" || desc.trim() == ""){
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
    setNotes(notes.filter((task) =>
      task.id !== id
    ));
  }

  return (
    <div className="container">
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
      <button onClick={addNotes}>
        Add Note
      </button>
      {
        notes.length === 0 ?
        <p>No notes to display</p>
        :
        (
          <ul>
            {notes.map((note) => (
              <li key = {note.id}>
                {note.title}
                <p>{note.desc}</p>
                <button onClick={ () => {deleteNote(note.id)}}>
                  Delete Note
                </button>
              </li>
            ))}
          </ul>
        )
      }
    </div>
  )
}

export default App
