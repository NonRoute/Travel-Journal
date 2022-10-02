import React from "react"
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import data from "./data"

export default function App() {
    const cards = data.map(item => {
        return (
            <div>
                <Card
                    key={item.id}
                    {...item}
                />
                <hr/>
            </div>
        )
    })
    
    return (
        <div>
            <Navbar />
            <section>
                {cards}
            </section>
        </div>
    )
}