import React from 'react'

const Card = (props) => {
  return (
    <div className="timeline__item">
        <i class={props.logo}></i>
        <span className="timeline__date">{props.year}</span>
        <h3 className="timeline__title">{props.title} | {props.name}</h3>
        <p className="timeline__text">{props.desc}</p>
    </div>
  )
}

export default Card