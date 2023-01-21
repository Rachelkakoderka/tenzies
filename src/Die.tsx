import React from "react"

export default function Die(prop: {value: string}) {
    return (
        <div className="die">
            <p>{prop.value}</p>
        </div>
    )
}