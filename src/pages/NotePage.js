import React, {useState, useEffect} from 'react'
import { useParams } from "react-router-dom"
// import notes from '../assets/data'
import { Link } from 'react-router-dom'
import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg'

export default function NotesListPage() {
    // let note = notes.find(note => note.id === Number({id}.id))
    // console.log(`${id}`);
    let { id } = useParams();
    let noteId = {id}.id
    let [note, setNote] = useState(null)

    useEffect(() => {
        getNote()   
    }, [noteId])

    let getNote = async() => {
        let response = await fetch(`http://localhost:8000/notes/${noteId}`)
        let data = await response.json()
        setNote(data)
    }

    return(
        <div className="note">
            <div className="note-header">
                <h3>
                    <Link to="/">
                        <ArrowLeft />
                    </Link>
                </h3>
            </div>
            <textarea value={note?.body}>
                </textarea>
        </div>
    )
}