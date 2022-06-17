import React from 'react';
import './Header.css'

export default ({black}) => {
    return (
        <header className={black? 'black': ''}>
            <div className='header--logo'>
                
                   <p className='logo--header'>jlins</p>
              
            </div>
            <div className='header--user'>
                <a href='/'>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt='perfil do usuario'/>
                </a>
            </div>
            </header>
    )
}