import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { game } from '../reducers/game'
import Button from '@mui/material/Button'

export const End = () => {
    const { description, coordinates } = useSelector(store => store.game.currentPosition)
    const dispatch = useDispatch()

    return (
        <section>
            <h1>{description}</h1>
            <p>Your current position: {coordinates}</p>
            <Button 
              variant="contained"
              color="secondary"
              onClick={() => dispatch(game.actions.setNewGame())}>
                Restart game
            </Button>
            {/* <button onClick={() => dispatch(game.actions.setNewGame())}>
                 Restart game
            </button> */}
        </section>
    )
}

