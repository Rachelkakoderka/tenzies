import React from "react"

interface Props {
    id: number,
    value: number,
    isHeld: boolean
}

export default function Die( {id, value, isHeld} :Props) {
    return (
        <div className="die">
            <p>{value}</p>
        </div>
    )
}