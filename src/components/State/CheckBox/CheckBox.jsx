import React from 'react'
import './Check.Box.style.css'

const CheckBox = ({ name, id, label, onChange, checked }) => {
    return (
        <div>
            <input
                onChange={onChange}
                type="checkbox"
                checked={checked}
                id={id}
                name={name}
                className='check'
            />
            <label style={{
                cursor: "pointer"
            }} htmlFor={id}>{label}</label>
        </div>
    )
}

export default CheckBox
