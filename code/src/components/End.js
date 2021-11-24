import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

export const End = () => {
    const { description, coordinates, actions } = useSelector(store => store.game.currentPosition)
    const dispatch = useDispatch()

    const handleButtonClick = () => {
        // dispatch(Start())
    }

    return (
        <section>
        <h1>{description}</h1>
        <p>Your current position: {coordinates}</p>
        {<h3>Yay! You made it out!</h3>}
        </section>
    )
}
