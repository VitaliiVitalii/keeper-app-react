import React from 'react';

import './Note.style.scss';

function Note(props) {
    return (
        <div className='main'>
            <div className='note'>
                <h1 className='note_title'>{props.title}</h1>
                <p className='note_content'>{props.content}</p>
            </div>
        </div>
    )
}

export default Note;
