import React from 'react'
import { useParams } from "react-router-dom"
import notes from '../assets/data'

export default function NotesListPage() {
    

    let { id } = useParams();
    let note = notes.find(note => note.id === Number({id}.id))
    
    // console.log(`${id}`);

    return(
        <div>
            <p>{note?.body}</p>
        </div>
    )
}