import React from 'react'

export default function ParcelCard( {item}) {
    // Constants

    const { title, completed } = item;
    
    return (
        <div className="task-item">
            <span>{title}</span>
            
        </div>
    )
}
