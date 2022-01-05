import React from 'react'
import './Header.style.css'

function Header({handleAddTodoList}) {
    return (
        <header className='header'>
            <h1 className='head'>
                ToDo List 
            </h1>   
            <div>
                <button className='button_addlist' onClick={handleAddTodoList}>Create New Todo</button>
            </div>
        </header>
    )
}

export default Header
