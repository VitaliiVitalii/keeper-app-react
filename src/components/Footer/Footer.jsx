import React from 'react';

import './Footer.style.scss';

function Footer() {
    const curentData = new Date().getFullYear();

    return (
        <footer className='footer'>
            <p className='footer_text'>
                Copyright ⓒ {curentData}
            </p>
        </footer>
    )
}

export default Footer
