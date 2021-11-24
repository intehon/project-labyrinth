import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { nextStep } from '../reducers/game'

export const Maze = () => {
    const { description, coordinates, actions } = useSelector(store => store.game.currentPosition)
    const dispatch = useDispatch()

    const handleButtonClick = (type, direction) => {
        // call the api, pass along type and direction to use as part of the body
        dispatch(nextStep(type, direction))
    }

    const ActionCard = ({ description, type, direction }) => (
        <div className='action-card'>
        <p>{description}</p>
        <button onClick={() => handleButtonClick(type, direction)}>
            {type} {direction.toLowerCase()}
        </button>
        </div>
    )

    return (
        <section>
        <h1>{description}</h1>
        <p>{coordinates}</p>
        {actions.length === 0 && <h3>Yay! You made it out!</h3>}
        {actions.length > 0 && actions.map(item => <ActionCard key={item.direction} {...item} />)}
        </section>
    )
}
