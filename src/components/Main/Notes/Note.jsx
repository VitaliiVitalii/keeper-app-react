import React from 'react';

import './Note.style.scss';

function Note(props) {
    function hendleClick () {
        props.onDelete(props.id);
        console.log(props.id);
    }

    return (
        <li className='note'>
            <h1 className='note_title'>{props.title}</h1>
            <p className='note_content'>{props.content}</p>
            <button
                className='note_btn'
                onClick={hendleClick}
            >
                Delete
            </button>
        </li>
    )
}

export default Note;
