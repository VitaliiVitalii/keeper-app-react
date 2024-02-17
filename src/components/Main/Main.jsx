import React, { useState } from 'react';

import CreateNote from './Notes/CreateNote';
import Note from './Notes/Note';

import './Main.scss';

function Main() {
    const [notes, setNotes] = useState([

    ]);

    function addNote(newNote) {
        setNotes(prevValue => {
            return [...prevValue, newNote];
        });

    }

    function deletNote(id) {
        setNotes(prevValue => {
            return prevValue.filter(
                (item, index) => {
                    return index !== id;
                }
            )
        })
    }


    return (
        <div className='main'>
            <CreateNote addNote={addNote} />
            <ul>
                {notes.map((note, index) => (
                    <Note
                        id={index}
                        title={note.title}
                        content={note.content}
                        key={index}
                        onDelete={deletNote}
                    />  
                ))}
            </ul>
        </div>
    );
}

export default Main;