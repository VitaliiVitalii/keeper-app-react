import React, { useState } from 'react';

import './Note.style.scss';

function CreateNote(props) {
    const [newNote, setNewNote] = useState({
        title: '',
        content: ''
    });

    function handleChange(e) {
        const { name, value } = e.target;
        console.log(name);
        console.log(value);

        setNewNote((prevValue) => {
            return {
                ...prevValue,
                [name]: value
            }
        })

    }   

    function passNewNote(e) {
        e.preventDefault();
        props.addNote(newNote);
        setNewNote({
            title: "",
            content: ""
        });

    }

    return (
        <div className='create-note'>
            <div>
                {newNote.title} {newNote.content}
            </div>
            <form className='create-note_form'>
                <input
                    className='form_title'
                    onChange={handleChange}
                    name='title'
                    type="text"
                    placeholder='Title'
                    value={newNote.title}
                />
                <textarea
                    className='form_content'
                    onChange={handleChange}
                    name="content"
                    type="text"
                    placeholder='Take a note...'
                    value={newNote.content}>
                </textarea>
                <button
                    className='form_button'
                    onClick={passNewNote}
                >Add</button>
            </form>
        </div>
    );
}

export default CreateNote;