import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { game } from '../reducers/game'

export const End = () => {
    const { description, coordinates, actions } = useSelector(store => store.game.currentPosition)
    const dispatch = useDispatch()

    return (
        <section>
            <h1>{description}</h1>
            <p>Your current position: {coordinates}</p>
            <button onClick={() => dispatch(game.actions.setNewGame())}>
                Restart game
            </button>
        </section>
    )
}
