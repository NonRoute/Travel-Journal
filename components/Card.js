import React from "react"

export default function Card(props) {
    return (
        <div className="card">
            <div>
                <img src={props.imageUrl} className="card--img" />
            </div>
            <div>
                <h3 className="card--location">
                    <img src="../images/path.png" /> 
                    {props.location}
                    <a href={props.googleMapsUrl} className="card--map">View on Google Maps</a>
                </h3>
                <h1 className="card--title">{props.title}</h1>
                <h2 className="card--date">{props.startDate} - {props.endDate}</h2>
                <p className="card--description">{props.description}</p>
            </div>
        </div>
    )
}