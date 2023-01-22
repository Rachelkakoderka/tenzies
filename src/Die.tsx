import React from "react"

export default function Die(prop: {value: number, id: number, isHeld: boolean}) {
    return (
        <div className="die">
            <p>{prop.value}</p>
        </div>
    )
}